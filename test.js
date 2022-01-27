//引入接口测试方法
const { testInterface } = require('./toolFun.js');
//引入所有接口及接口前缀
const { defApi,urlObj } = require('./PluginServer.js');

//测试所有接口  method：请求方法
function Test(method) {
  //循环测试所有接口
  for (const key in urlObj) {
    var p = new Promise(function (resolve, reject) {
      //url地址
      const url = `${defApi}` + urlObj[key]
      //post请求需要携带的参数
      const params = {}
      
      if (method == 'GET' || method == 'get') {
        testInterface.get(url, params).then((res) => {
          resolve(res)
        })
      }else if(method == 'POST' || method == 'post') {
        testInterface.post(url, params).then((res) => {
          resolve(res)
        })
      }else {
        console.log('你输入的参数有问题啊兄弟！',method);
      }
      
    })
    //只要一个接口出错停止测试
    Promise.all([p]).then(function (res) {
      console.log(res);
    })

  }
}

//使用方法开始测试
// Test('get')
Test('post')
