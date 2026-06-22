const db = require("../config/db");

exports.createQueue =
async(req,res)=>{

try{

const {
fullname,
phone,
service_type
}
=
req.body;

const queueNumber =
"A" +
Math.floor(
100 +
Math.random()*900
);

await db.execute(

`
INSERT INTO queues
(
queue_number,
fullname,
phone,
service_type
)
VALUES
(?,?,?,?)
`,

[
queueNumber,
fullname,
phone,
service_type
]

);

res.json({
queueNumber
});

}catch(error){

res.status(500).json(error);

}

};