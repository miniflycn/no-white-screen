# no-white-screen

> 我们的口号是：没有白屏。

### 来源

总有那么些情况会导致页面白屏：

1. 渲染前js线程挂了
2. CGI数据错误，导致页面无法渲染
3. CGI还没返回

等等……

所以就有了这个项目……

### 原理

简单来说我们提供一种在页面mark一个容器是需要渲染的，如果没有渲染就上报仅此而已，具体请看：src/no-srceen.js