const db = require("../config/db");

exports.askQuestion = async (req, res) => {

    try {

        const { message } = req.body;

        const [rows] = await db.execute(
            "SELECT * FROM faq WHERE question LIKE ?",
            [`%${message}%`]
        );

        if (rows.length > 0) {
            return res.json({
                reply: rows[0].answer
            });
        }

        return res.json({
            reply:
                "Xin lỗi, hiện tôi chưa có dữ liệu cho câu hỏi này."
        });

    } catch (error) {

        res.status(500).json(error);
    }
};
