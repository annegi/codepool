'use strict';
const request = require('request');
const cheerio = require('cheerio');
const topUrl = require('./TopUrl');
//const topUrl = ['http://www.qvcuk.com/Butler-%26-Wilson-Butterfly-Print-Long-Skirt.product.164096.html', 'http://www.qvcuk.com/Luxxe-Pencil-Skirt.product.107955.html', 'http://www.qvcuk.com/Andrew-Yu-Blue-Waves-Print-Dip-Hem-Skirt.product.160620.html'];




topUrl.getUrl(function(topUrl){
    let arr = [];
    for (let i=0; i<topUrl.length; i++) {
        arr.push(myRequest(topUrl[i]));
    }
    Promise.all(arr).then(values => {
        console.log(values); // [3, 1337, "foo"]
    });

//console.log(arr);


});


function myRequest(url){
    return new Promise(function(resolve,reject){
        let crawledDataObj;

        request(url, function (error, response, body) {
            crawledDataObj  = {};
            let $ = cheerio.load(body);

            $('body').each(function () {
                if ($(this).hasClass('productDetail uk')) {
                    var x = $(this).children().get(0).children[0].data;
                }
                let arr1 = x.split('"');
                // arr.push({item_code: arr1[15]});
                // arr.push({clearance_price: arr1[27]});
                // arr.push({brand_name: arr1[35]});

                crawledDataObj.item_code = arr1[15];
                crawledDataObj.clearance_price = arr1[27];
                crawledDataObj.brand_name = arr1[35];
            });
            $('label').each(function () {
                if ($(this).text() === 'QVC Price:') {
                    crawledDataObj.qvc_price = $(this).next().text();
                }
            });

            resolve(crawledDataObj)

        });


    });
}
