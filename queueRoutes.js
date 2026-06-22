const db = require("../config/db");

exports.searchProcedure = async (req,res)=>{

    try{

        const keyword =
        req.query.keyword;

        const [rows] =
        await db.execute(

        `
        SELECT *
        FROM procedures
        WHERE name LIKE ?
        `,

        [`%${keyword}%`]

        );

        res.json(rows);

    }catch(error){

        res.status(500).json(error);
    }

};