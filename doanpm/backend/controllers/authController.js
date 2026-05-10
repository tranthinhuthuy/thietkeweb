const db = require("../config/db");

exports.login = (req,res)=>{

    const {email,password} = req.body;

    const sql = "SELECT * FROM users WHERE email=? AND password=?";

    db.query(sql,[email,password],(err,result)=>{

        if(err) return res.json(err);

        if(result.length>0){

            res.json({
                message:"login success",
                user:result[0]
            });

        }else{

            res.json({
                message:"login failed"
            });

        }

    });

};