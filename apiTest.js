const { apiList } = require('./apiList');
const axios = require('axios');
const allApiReq = [];
var apiStatus = ''

for (let index = 0; index < apiList.length; index++) {
  const api = apiList[index];
  if (api.method == 'post') {
    if (api.contentType === 'json') {
      allApiReq.push(axios.post(api.apiPath, api.body))
    } else {
      const req = axios.post(api.apiPath, api.body, {
        transformRequest: [function (data) {
          let ret = ''
          for (let it in data) {
            ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
          }
          return ret
        }],
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      allApiReq.push(req);
    }
  } else {
    allApiReq.push(axios.get(api.apiPath, {
      params: api.body
    }))
  }
}

const allApiTest = Promise.all(allApiReq).then(res => {
  return true;
}).catch(e => {
  return false;
})

allApiTest.then(res => {
  // console.log(res);
  apiStatus = res
  exports.apiStatus = apiStatus
})
