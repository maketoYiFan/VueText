const axios = require('axios');
const express = require('express');
const app = express();
const { apiList } = require('./apiList')


for (let index = 0; index < apiList.length; index++) {
    
    const api = apiList[index];
    if (api.method == 'post') {
        if (api.contentType === 'json') {
            app.post(api.path, function (req, res) {
                console.log(req.body);
                axios.post(api.apiPath, req.body).then((result) => {
                    res.send(result.data)
                })
            })
        } else {
            app.post(api.path, function (req, res) {
                console.log(req.body);
                axios.post(api.apiPath, req.body, {
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
                }).then((result) => {
                    res.send(result.data)
                })
            })
        }
    } else {
        app.get(api.path, function (req, res) {
            console.log(req.query)
            axios.get(api.apiPath, {
                params: req.query
            }).then((result) => {
                res.send(result.data)
            })
        })
    }
}

app.listen(8000, () => {
    console.log('服务器启动在8000端口');
});