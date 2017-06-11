

class LoginRouter {
    static get(req,res,next){
        let html = `<!DOCTYPE html>
                    <html>
                        <head>
                            <title>Login</title>
                            <link rel='stylesheet' href='/css/login.css' type="text/css" />
                        </head>
                        <body>
                            <div id="app">
                            <form class='loginForm' action='/login' method='post'>
                                <div>
                                    <div class='column1'></div><input placeholder='User Id' type='text' name='emailId'></input>
                                </div>
                                <div>
                                    <div class='column1'></div><input placeholder='Password' type='password' name='password'></input>
                                </div>
                                <button type='submit'>Login</button>
                            </form>
                        </body>
                     </html>`;


        res.setHeader("content-type", "text/html");
        res.write(html);
        return res.end();


    }

    static post(req,res,next){

        if(req.body.emailId==='anegi' && req.body.password==='anurocks'){
            req.session.name = 'Anupam Negi';
            req.session.bio = "Hi I am Anupam. I work in nextag and I am passionate about coding";

            res.redirect('/loginSuccess');
            return res.end();
            //for dropping a cookie : res.cookie('sid' , '').send('Cookie is set');
        }

    }

}


module.exports = LoginRouter;