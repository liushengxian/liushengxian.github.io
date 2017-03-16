Meet problems. 

搭建hacker news时遇到的问题。

1.npm WARN vue-loader@8.7.0 requires a peer of vue-hot-reload-api@^1.2.0 but none was installed.

solutions: 手动安装. (just a warning.)

2.windows10 上遇到的问题

https://github.com/npm/npm/issues/10713

看了这么多解决方法都没有用。还是从出错信息开始看起。这里的export 后面的方块！ 显然是 export上面这句出了问题。

其中有个用windows command line居然就解决了的。

结果并没有解决这个问题。

所以我去看了源代码。这句 npm run dev 背后所指示的语句是 

"dev": "export NODE_ENV=\"dev\" ; gulp watch",

然后用下面的语句试了一下，居然神奇的解决了。

export NODE_ENV="dev"|gulp watch

3. 整个的node的学习过程是怎么样的呢。我要完成这个项目的哪些重点部分呢 。从头开始吗。

4. package.json是自己写的吗。从0到1的这个开发过程。没有人提供需求。

通过npm init. 逐项填表。  那么gulp呢。 好吧 作者认为不需要有这种东西。

npm install express --save
npm install express --save-dev


5. 关于那个domain方法 生成a标签 不会有性能影响吗。不 同一时刻只会有一个a标签用来转换。

6.  恩 开源协议很牛逼。

7. 一个问题。news会刷新 但是之前的时间 并不会自动刷新。

8.gulp & webpack. 混用。为何。

9.这么多gulp插件。也都是见过用过 然后到时候有记得的 然后现查的吗。 如何开辟呢。保持一个不断观察最新模块的状态？

10.优点：智商够了，缺点：容易让人浮躁。也算是一个考验了吧。

11. 计划： 文档 => 项目 搞懂每个部分 => 删掉项目从我开始 =>可以查google/文档 但是不能看项目 => 测试。 

12.keep calm and carry on。。。

13. CLI 命令行工具 要不要用。