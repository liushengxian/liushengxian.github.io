---
layout: post
title:  "GitHub rollback"
date:   2016-04-15 11:56:32 +0800
categories: jekyll update
---
在拿出一点零碎时间中想把自己的blog搞一下，下载了一个easybook的主题然而没耐心去看配置。草草上传到GitHub之后发现把网站弄的丑陋不堪。很烦的问题是我这边没有安装成功Jekyll，（尝试了两个gems的镜像都没有成功），所以想想还是回退到之前的Blog了。先开始写。

用GitHub for Windows搞了好一会儿也没成功。不管是Revert还是什么命令，感觉基本上是废的。。。

最后还是尝试用了Git的命令行来解决问题。。



如下两条命令轻松解决问题：

1、回退到之前的某个版本

`git reset --hard <要rollback到的commit>`

2、强制推送你当前的版本到远程仓库：

`git push <remote>  HEAD --force`


年轻人还是要好好学习文化知识，不要老想搞个大新闻。还是要老老实实学习Git命令的。



参考资料：[github版本回滚问题][ref-20160415-01]



[ref-20160415-01]: http://www.oschina.net/question/590228_102985
