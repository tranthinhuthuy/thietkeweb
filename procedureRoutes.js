const db = require("../config/db");

exports.createFeedback =
async(req,res)=>{

try{

const {
fullname,
phone,
content
}
=
req.body;

await db.execute(

`
INSERT INTO feedbacks
(fullname,phone,content)
VALUES (?,?,?)
`,

[
fullname,
phone,
content
]

);

res.json({
success:true
});

}catch(error){

res.status(500).json(error);

}

};