---
layout: post
title:  "About Flash Sockets"
date:   2016-04-25 01:13:34 +0800
categories: jekyll update
---
今天花了好久做一个Arduino跟Flash之间使用Socket通信的应用。但是期间总是对于Flash端Socket里接收的数据可靠性表示很怀疑，最后也没解决这个问题，很是尴尬。
回来趁一股热乎劲赶紧花两个小时看了一下，做了一个python的server来模拟Arduino的行为，总算是有些理解了。

说实话自己在下午接触Arduino的时候，听了那么多，还是一脸懵逼。回来梳理了一下，才明白用的那些工具大体是做什么用的。

首先，是那个serproxy.exe程序，是用来把Arduino通过USB连接到串口的数据转换成本地的ServerSocket当中去。然后你使用Socket监听它的时候，就会给你的Socket发送数据。在这里我使用python程序编写的模拟器就充当了serproxy+Arduino的两个角色。我想这个serproxy也是server proxy的缩写吧。

首先上我的server端的模拟代码：

```python
import socketserver
import time
import random

class MyTCPHandler(socketserver.BaseRequestHandler):
    def handle(self):
        while(True):
            tmplist = [0x6F]
            l = self.getList(tmplist)
            b1 = bytes(l)
            print(l)
            time.sleep(0.01)
            self.request.sendall(b1)

    def getList(self,tList):
        for i in range(7):
            tList.append(random.randint(112,255))
        return tList


def testServer():
    HOST,PORT = "localhost",5331

    server = socketserver.TCPServer((HOST,PORT),MyTCPHandler)
    server.serve_forever()

testServer();
```
这里主要是开始在5331端口开启一个服务，对连接来的socket不停发送8个字节的数据。其间的发送间隔，我实验过1s，0.1s，0.01s等等多个数据。通过在python端跟Flash端打印的数据，加之今天下午反复测试的经验可以判断，在0.1s时发送的数据量最接近今天使用Arduino发送的数据量。

在Flash端还是使用原来的FlashTest.as这个文件进行测试。其中的接收数据部分如下所示：

```javascript
private function onSocketData(event:ProgressEvent):void
		{
		//此处省略对i,x,y,z,f,s,w的定义，都是int类型
			if (socket.bytesAvailable >= 8)
			{
				var data2:uint = socket.readUnsignedByte();

				// protocal: 0x6F i x y z f
					if (data2 == 0x6F)
					{
						i = socket.readUnsignedByte();
						x = socket.readUnsignedByte();
						y = socket.readUnsignedByte();
						z = socket.readUnsignedByte();
						f = socket.readUnsignedByte();
						s = socket.readUnsignedByte();
						w = socket.readUnsignedByte();

						if(socket.bytesAvailable > 0)
						{
							var tmpString:String = socket.readUTFBytes(socket.bytesAvailable);
							trace("bytes length:"+tmpString.length);
						}
						trace("data2:"+data2+"i = " + i + " x = " + x + " y = " + y + " z = " + z + " f = " + f + " s = " + s + " w = " + w);
					}
			}
			else{
				var tmpString2:String = socket.readUTFBytes(socket.bytesAvailable);
				trace("------tmpString2:"+tmpString2.length);
			}
		}
```

当使用1s测试的时候没有发现什么问题。几乎所有的数据都得到正确的处理。而当我使用0.1s的间隔进行测试的时候，发现过了大约10~20s之后，开始有丢弃数据的现象发生。所以，使用串口怎么会这么容易丢失数据呢！一定是我的程序处理的有问题啊= =！

其实下午想走的时候就已经大概想到了发生了什么，只是那时候脑袋不太清醒，现在回来证实了。。。

这边丢弃包的举措不合理啊摔！因为在这种实际情景下，onSocketData这个函数触发的时候，SocketServer依然在给Client发送数据，那么我在onSocketData函数里读取的时候，ClientSocket里的缓冲区还是在被修改着，可能一开始是8个字节，运行到判断socket.bytesAvailable的时候，下一次的正确数据已经发送过来若干个字符了，而我把他丢弃了，就导致下次数据还是错误的。。。。

反复触发onSocketData函数，不如在onSocketData函数里处理完再退出。

```javascript
private function onSocketData(event:ProgressEvent):void
		{
	     //同上，此处省略变量定义
			while (socket.bytesAvailable >= 8)
			{
				var data2:uint = socket.readUnsignedByte();

				// protocal: 0x6F i x y z f
					if (data2 == 0x6F)
					{
						i = socket.readUnsignedByte();
						x = socket.readUnsignedByte();
						y = socket.readUnsignedByte();
						z = socket.readUnsignedByte();
						f = socket.readUnsignedByte();
						s = socket.readUnsignedByte();
						w = socket.readUnsignedByte();

						trace("data2:"+data2+"i = " + i + " x = " + x + " y = " + y + " z = " + z + " f = " + f + " s = " + s + " w = " + w);
					}
			}
		}
```

说来可笑，其实只是自己对Socket编程的不熟悉导致的，更甚，只是while跟if的区别QAQ。实际上，从串口来的数据根本没有丢失，据我猜想，而是之前反复触发的ProgressEvent事件影响了读取Socket当中数据的速度。这样我们只要在每一次的事件处理函数当中socket里把其中可用的所有数据读取出来，而不是每8个字符触发一次事件读取一次数据。而剩余的不多于8个字符的数据也是正确数据，在这种封闭的环境当中其实基本上不必担心数据的丢失= =！怎么可能会出错呢。记得好像电路出错导致问题发生的概率比买彩票还难吧，又不是在空气中传播那种可能会损耗信号的事情。。。。所以剩余的字符只需要不去管理，放到下次再处理就好了。

Q:会不会同时有多个处理函数进行读取呢？

A:不会，因为Flex里是单线程的。=v=


另外，在新代码的情况下，使用0.01s进行测试，测试的时候数据也是基本同步的（如下图,停止swf之后，最后收到的数据与python里的socketserver倒数第四条发送的数据完全一致）。更不必说，修改代码后完全可以应付Arduino的输入了。

![pic-20160425-01][https://misanya.com/pic/20160425/01.png]



参考资料：
1.[python-doc-socketserver][ref-20160425-01]
2.[python-doc-random][ref-20160425-02]

虽然python实现的代码很简单，但是还是查了不少资料才慢慢把那一小段能工作的代码折腾出来的。还好python是比较简单易懂的！所以虽然可以临时抱佛脚，但是还是把这些最基本的东西记住了才能算是熟练掌握这门语言啊！

[ref-20160425-01]: https://docs.python.org/3/library/socketserver.html
[ref-20160425-02]: https://docs.python.org/3/library/random.html
