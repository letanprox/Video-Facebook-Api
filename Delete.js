let fetch = require("node-fetch");
let fs = require('fs');
const http      = require('http'),
      https     = require('https');

var id_page = '103083858598351';
var token = 'EAApj1qd5BwYBAD5OwriFlRZAH8k2xWq8grVLBe1LODzgntnUSO5yWeyILpIwMEgwbWlPY5bfgPBNZBZBsHrwAAbJZCJWaZBlgonnmh37bRgZBjGZAQmxJkdZCUf3ZAoprekzJk0OnV7e855FcfMZAyAKJ5ZB0ZBMqk2W5mrJNZCzeuLsAHeYtERyM6NyTtYsUreoitrYZD';

let i = 1;
let k = 1;

function getLink(id_page,token) {
    let url = 'https://graph.facebook.com/'+ id_page + '/videos?limit=1000&access_token=' + token;
    let client = http;
    if (url.toString().indexOf("https") === 0) {
        client = https;
    }
    let request = client.request(url, function (res) {
        let data = '';
            res.on('data', function (chunk) {
                data += chunk;
            });
            res.on('end', function () {
                let data_array = JSON.parse(data);  
                let json_ray = data_array.data;
                json_ray.forEach(element => {

                    let durl =  'https://graph.facebook.com/'+element.id+'?access_token=' + token+'&method=delete';
                    let drequest = client.request(durl, function (dres) {
                        dres.on('end', function (da) {
                            console.log(da)
                        });
                    })
                    drequest.on('error', function (e) {
                        console.log(e.message);
                    });
                    drequest.end();

                    // if (!fs.existsSync(String('Save/'+element.description))) {
                    // if(k == 1){
                    //     loadurl('https://graph.facebook.com/'+ element.id + '?access_token=' + token + '&fields=source',element.id,element.description)
                    //     k = k + 1;
                    // }else{
                    //     setTimeout(function(){
                    //         loadurl('https://graph.facebook.com/'+ element.id + '?access_token=' + token + '&fields=source',element.id,element.description)
                    //     },60000*k)
                    //     k = k + 1;
                    // }
                    // }

                });
            });
        });
        request.on('error', function (e) {
            console.log(e.message);
        });
        request.end();
}
getLink(id_page,token);