const request = require('request');
const cheerio = require('cheerio');
const topUrl = 'http://www.qvcuk.com/fashion/skirts/_/N-lfmp/c.html';

class TopUrl {

    static getUrl(callback){
        let topUrls = [];
        request(topUrl, function (error, response, body) {
            let $ = cheerio.load(body);
            $('div').each(function () {
                if ($(this).hasClass('col-tn-6 col-sm-4 galleryItem')) {
                    topUrls.push($(this).children().attr('href'));

                }
            });
            callback(topUrls);

        });

        return topUrls;
    }

}

module.exports = TopUrl;
