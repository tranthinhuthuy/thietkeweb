const db = require("../config/db");

exports.applyJob = (req,res)=>{

    const {name,phone,email,job_id} = req.body;

    const sql="INSERT INTO candidates(name,phone,email,job_id) VALUES(?,?,?,?)";

    db.query(sql,[name,phone,email,job_id],(err,result)=>{

        if(err) return res.json(err);

        res.json({
            message:"apply success"
        });

    });

};

exports.getCandidates = (req,res)=>{

    const sql="SELECT * FROM candidates";

    db.query(sql,(err,result)=>{

        if(err) return res.json(err);

        res.json(result);

    });

};