//引入request
const request = require('request');

//封装的接口测试函数
const testInterface = {
  get(url) {
    return new Promise(function (resolve, reject) {
      request(url, function (err, response, body) {
        //err 当前接口请求错误信息
        //response 一般使用statusCode来获取接口的http的执行状态
        //body 当前接口response返回的具体数据 返回的是一个jsonString类型的数据 
        //需要通过JSON.parse(body)来转换
        if (!err && response.statusCode == 200) {
          resolve(body)
          console.log('请求成功！！' , url);
        } else {
          reject(body)
          console.log('请求失败！！' , url);
        }
      })
    })
  },
  post(url, params) {
    return new Promise(function (resolve, reject) {
      var requestData = params
      request({
        url: url,
        method: "POST",
        json: true,
        headers: {
          "Content-Type": "application/json",
          "Authorization": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJleHAiOjE2NDMyMjIwODYsInVzZXJJZCI6IkZLNGJYQzhKWnFJT3J4cWY3ZGI4T0VPTFF5OFZQV3pOUHB5a2FVRDdIVTl4ditJZ01sS3F5S1ZPREkvL1VoZ2ZiVm1GQVcyb3BpMEJQZFJzd3dVWVRTZmhjNEJWQ2dDWnJXL1M3TmJCS2p2RmtCSlNNRmZKaVRGVnZ3dmRBZjRLczBlWmNFdGVScU9Ta1BtaU9oamJHRTJPQTJwS1p5c3NwMXM4b3JXclB6MGNveUliSjBVODBNQUd2OC9nUkhOUDl1clJyWkZVWVI4emgzN1JUb2laaVdKbDR3bi9xK2N1c1JDSnJwekJ4ODM3K0pZbkpWRG0yMkRWL3dQekpGNkJ5Z3E5OWNkRkR1K3lQbnVtOVBiYnZuUDd2OThmNmJJZ1R5c3ZvcHZqN1dnL0RrYW1KTm1IcHM5YXZ2MjJSMDlib2NlMFEyNlZNUFplMWVZcGIzZTh2Zz09IiwiaWF0IjoxNjQzMTY0NDg2fQ.YvcOApym32_jfkgXF3JWcjjaduj_D5-u-ADi4Aq4IUNlKoOfwOwZnTWjHBrjJvn8QQy5gF74NHPz85pBbnAVn5RkCoNcqm0wTpqPD4cSonnLzp1w-gcb2hP6gphjX70M3GOpmSMtzE7AQ5mS7Z8kdpMWSSHFBgH4z250fuDsFJ9EHROeZs1vUe6258rNaac6KlNLCgznxSkSOYYa4uHyNV4H--ymYqKfwCwWDBAgFcegowEZxP0cjE2NvBF8_E9Dr2aH7HijqN5I1azXQhwvMkTz2kEmcFIh4iETWG1oDr64l7y0Bsejcg2jSKPfWv8h_VyevhV4mddYC3KhswQ1ow"
        },
        body: requestData
      }, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          resolve(body)
          console.log('请求成功！！' , url);
        } else {
          reject(body)
          console.log('请求失败！！' , url);
        }
      });
    })

  }

};

module.exports = {testInterface}



//**************使用示例**************

//引入API
// const url = 'https://api.apiopen.top/videoCategoryDetails'
// //API需要携带的参数
// const params = {
//   id: "14"
// }
// testInterface.get(url, params).then((res) => {
//   console.log(res)
// })

//使用Promise调用
// var p = new Promise(function (resolve, reject) {
//   const url = `${defApi}${urlObj.resetBusiList}`
//   const params = {
//     "scopeIds": ["022ec97dad2b48baa7c9cc47fbc310a3"],
//     "ac": "110000",
//     "branchList": []
//   }
//   testInterface.post(url, params).then((res) => {
//       resolve(res)
//   })
// })

// Promise.all([p]).then(function (res) {
//   console.log(res);
// })