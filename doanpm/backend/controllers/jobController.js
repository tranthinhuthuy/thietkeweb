const db = require("../config/db");

exports.createJob = (req,res)=>{

    const {title,location,quantity,salary} = req.body;

    const sql="INSERT INTO jobs(title,location,quantity,salary) VALUES(?,?,?,?)";

    db.query(sql,[title,location,quantity,salary],(err,result)=>{

        if(err) return res.json(err);

        res.json({
            message:"job created"
        });

    });

};

exports.getJobs = (req,res)=>{

    const sql="SELECT * FROM jobs";

    db.query(sql,(err,result)=>{

        if(err) return res.json(err);

        res.json(result);

    });

};