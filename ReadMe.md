
  引用swiper做轮播图 将头部 底部部分抽取出来作为公共样式
1.不能给引入的图片设置宽，插件自动回设置好2.注意插入的图片是
前景图还是背景图3.css和js文件同时引用
  在写静态页面还未完成，对于jquery方面整体都不太熟练
  针对翻页效果方面整体不太熟悉，基本一些大的数据交互已经完成，
  出现问题
   1.渲染页面数据读取不出来
   2.后台获取到星星，结构错乱
   3.添加评论翻页问题，翻页在评论后面
   4.路由之间跳转问题
   解决方案：
   1.查看传到template的数据类型，可以先输出，查看，在进行判断
   2.父元素没有添加宽度，由子元素撑开，添加宽度修改
   3.通过prepend而不是append
   4.新的窗口打开ele.onclick=function(){window.open('https://www.baidu.com')}
     ele.onclick=function(){onClick="window.location.href=('https://www.baidu.com')}
     https://blog.csdn.net/cgzhello1/article/details/8101525