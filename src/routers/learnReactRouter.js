
class homeRouter{
    static get(req,res,next){

        let html = `<!DOCTYPE html>
                    <html>
                        <head>
                            <title>Learn React</title>
                            <link rel='stylesheet' href='/css/learnHtml-CSS-JS.css' type="text/css" />
                        </head>
                        <body>
                            <div id="app"></div>
                        </body>
                        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
                        <script src="/scripts/codepool-react-bundle.js"></script>
                     </html>`;


        res.setHeader("content-type", "text/html");
        res.write(html);
        return res.end();
    }


}
module.exports=homeRouter;


