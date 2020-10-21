const { User } = require('./../models/user');

let auth = (req,res,next) => {
   // console.log(req.cookies)
    let token = req.headers.cookie.w_auth;


    User.findByToken(token,(err,user)=>{
        if(err) throw err;
        if(!user) return res.json({
            isAuth: false,
            error: true
        });

        req.token = token;
        req.user = user;
        next();
    })

}


module.exports = { auth }