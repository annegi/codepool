


class LearnHTMLCSSJSRouter {
    static get(req,res,next){

        let html = `<!DOCTYPE html>
                    <html>
                        <head>
                            <title>Learn HTML-CSS-JS</title>
                            <link rel='stylesheet' href='/css/learnHtml-CSS-JS.css' type="text/css" />
                        </head>
                        <body>
                            <input id='inputField' onchange='changeFunction()' />
                        </body>
                        <script src="/scripts/html-css-js-client.js"></script>
                     </html>`;


        res.setHeader("content-type", "text/html");
        res.write(html);
        return res.end();
    }


}
module.exports=LearnHTMLCSSJSRouter;


