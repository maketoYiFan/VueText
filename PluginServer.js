const axios = require('axios');
const express = require('express');

const compression = require('compression')
const app = express();

const defApi = "https://api.jyfwyun.com"
// 总局地址
// const defApi = "http://140.143.50.36:81"
// 青海、新疆外网地址
// const defApi = "http://140.143.170.171:81"
// 新疆内网地址
// const defApi = "http://123.123.124.47:8282"
// 重庆政务网地址
// const defApi = "http://10.31.255.2:8222"


const urlObj = {
    // 搜索
    cloudSearch: "/cloud-service/cross/search",
    // 搜索
    search: "/search-service/cross/search",
    // 主题列表
    themeObj: "/cloud-service/cross/themeObj",
    // 主题菜单
    themeList: "/cloud-service/cross/themeList",
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
    // 热搜
    getHotKeywords: "/cloud-service/cross/getHotKeywords",
    // 动态1
    getItemDynamic: "/cloud-service/cross/getItemDynamic",
    // 动态2
    getConDynamicList: "/cloud-service/cross/getConDynamicList",
    //獲取全國行政區
    regionList: "/cloud-service/cross/regionList",
    //獲取驗證碼
    getvalidimg: "/passport-service/getvalidimg",
    // 旧的查询
    opscopesearchKeyword: "/cloud-service/opscopesearch/keyword",
    // 套餐信息查询接口
    opscopesearchCombo: "/cloud-service/opscopesearch/combo",
    // 套餐下经营范围条目查询接口
    opscopesearchItemofcombo: "/cloud-service/opscopesearch/itemofcombo",
    // 组合码查询（新版）
    analysisComCodeV2: "/cloud-service/cross/analysisComCodeV2",
    // 添加行为日志
    add: "/analysis-service/cross/behavior/add",
    // openApi
    openApi: "/cloud-service/cross/openApi",
}

module.exports = { defApi,urlObj }