class learnReactRouter {
    static get(req, res, next) {

        let html = `<!DOCTYPE html>
                    <html>
                        <head>
                            <title>Learn React</title>
                            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

                            <!-- jQuery library -->
                            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

                            <!-- Latest compiled JavaScript -->
                            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

                            <link rel='stylesheet' href='/css/learn-react.css' type="text/css" />
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
module.exports = learnReactRouter;


