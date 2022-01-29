//引入接口测试方法
const { testInterface } = require('./toolFun.js');
//引入接口前缀
const defApi = "https://api.jyfwyun.com"
//所有的get请求
const getObj = {
  // 主题菜单
  themeList: "/cloud-service/cross/themeList",
  // 热搜
  getHotKeywords: "/cloud-service/cross/getHotKeywords",
  // 动态1
  getItemDynamic: "/cloud-service/cross/getItemDynamic",
  // 动态2
  getConDynamicList: "/cloud-service/cross/getConDynamicList",
}
//所有的post请求
const postObj = {
  // 搜索
  cloudSearch: "/cloud-service/cross/search",
  // 搜索
  search: "/search-service/cross/search",
  // 主题列表
  themeObj: "/cloud-service/cross/themeObj",
  // 热搜
  topSearch: "/cloud-service/cross/topSearch",
  // 生成组合码
  buildComposeCode: "/cloud-service/cross/buildComposeCode",
  // 解析组合码到列表
  openAnalysisComCode: "/cloud-service/cross/openAnalysisComCode",
  // 条目详情
  details: "/cloud-service/cross/details",
  // 重新获取条目信息
  resetBusiList: "/cloud-service/cross/resetBusiList",
  // 接口解析
  analysisComCode: "/cloud-service/cross/analysisComCode",
  // 更新查看
  whetherBeUpdate: "/cloud-service/cross/whetherBeUpdate",
  // 主题获取
  newThemeObj: "/cloud-service/cross/newThemeObj",
  // 地区码搜索
  regionName: "/cloud-service/cross/regionName",
  // 更新动态
  analysisDomain: "/cloud-service/cross/analysisDomain",
  // 获取全国行政码
  regionList: "/cloud-service/cross/regionList",
  // 获取验证码
  getvalidimg: "/passport-service/getvalidimg",
  // 旧的查询
  opscopesearchKeyword: "/cloud-service/opscopesearch/keyword",
}

//测试所有接口  method：请求方法
function Test() {
  //把所有get、post请求接口变成数组
  let getUrlArr = Object.values(getObj)
  let postUrlArr = Object.values(postObj)
  //最后一个接口
  const getUrlLength = Object.values(getObj).length
  const postUrlLength = Object.values(postObj).length
  let getNUm = 0
  let postNUm = 0

  //循环测试所有get请求
  getUrlArr.forEach(item => {
    new Promise(function (resolve, reject) {
      //url地址
      const url = defApi + item
        testInterface.get(url).then((res, rej) => {
          getNUm++
          if (getNUm !== getUrlLength) {
            console.log(res);
          } else {
            console.log('所有get接口全部通过！！');
            // process.exit()
          }

        })
    })

  });
  //循环测试所有get请求
  postUrlArr.forEach(item => {
    new Promise(function (resolve, reject) {
      //url地址
      const url = defApi + item
      //post请求需要携带的参数
      const params = {}
        testInterface.post(url, params).then((res, rej) => {
          postNUm++
          if (postNUm !== postUrlLength) {
            console.log(res);
          } else {
            console.log('所有post接口全部通过！！');
            process.exit()
          }
        })
        
    })

  });



}

//使用方法开始测试
Test()