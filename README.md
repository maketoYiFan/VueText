## 测试API工具，对所有接口进行请求验证，请求成功的返回true，失败返回false。
## 需要循环进行验证，全部通过才为true，中途碰到不通过的，循环就终止，返回false以及没通过的接口
## 该文件主要实现以下功能

## 1、服务器状态收集，比如：内存，CPU，磁盘空间，IP地址
## 2、接口定时校验

## 返回示例：
<!-- {
  IP: '192.168.1.55',
  apiStatus: true,
  memory: '5.97G|15.91G',
  cpuUsage: '7.66%',
  disk: 'D:13gb|100gb',
  errApi: '无'
} -->
<!-- {
  IP: '192.168.1.55',
  apiStatus: false,
  memory: '5.96G|15.91G',
  cpuUsage: '6.68%',
  disk: 'D:13gb|100gb',
  errApi: 'https://api.jyfwyun11.com/cloud-service/cross/search'
} -->