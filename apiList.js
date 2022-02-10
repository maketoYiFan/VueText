const defApi = "https://api.jyfwyun.com"

const apiList = [{
  label: "搜索",
  path: "/cloud-service/cross/search",
  method: "post",
  contentType: 'json',
  body: {

  }
}, {
  label: "地区码搜索",
  path: "/cloud-service/cross/regionName",
  method: "post",
  contentType: 'form',
  body: {

  }
}, {
  label: "动态2",
  path: "/cloud-service/cross/getConDynamicList",
  method: "get",
  contentType: 'json',
  body: {

  }
}]

exports.apiList = apiList.map(item => ({
  ...item,
  apiPath: defApi + item.path
}))