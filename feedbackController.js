const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const fetch = require("node-fetch");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ======================
// ROUTES CŨ
// ======================
const chatbotRoutes = require("./src/routes/chatbotRoutes");
const procedureRoutes = require("./src/routes/procedureRoutes");
const ratingRoutes = require("./src/routes/ratingRoutes");
const feedbackRoutes = require("./src/routes/feedbackRoutes");
const queueRoutes = require("./src/routes/queueRoutes");

app.use("/api/chatbot", chatbotRoutes);
app.use("/api/procedures", procedureRoutes);
app.use("/api/ratings", ratingRoutes);
app.use("/api/feedbacks", feedbackRoutes);
app.use("/api/queues", queueRoutes);

// ======================
// AI CHATBOT ROUTE (MỚI)
// ======================
app.post("/api/chatbot/ai", async (req, res) => {

    const userMessage = req.body.message;

    if (!userMessage) {
        return res.json({ reply: "Vui lòng nhập nội dung" });
    }

    try {

        const response = await fetch(
            "https://api.openai.com/v1/chat/completions",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
                },
                body: JSON.stringify({
                    model: "gpt-4o-mini",
                    messages: [
                        {
                            role: "system",
                            content:
                                "Bạn là chatbot hành chính công xã Đăk Hà. Trả lời ngắn gọn, chính xác, dễ hiểu cho người dân Việt Nam."
                        },
                        {
                            role: "user",
                            content: userMessage
                        }
                    ]
                })
            }
        );

        const data = await response.json();

        const reply =
            data.choices?.[0]?.message?.content ||
            "Không có phản hồi từ AI";

        res.json({ reply });

    } catch (error) {

        res.json({
            reply: "Lỗi kết nối AI server"
        });
    }
});

// ======================
// TEST SERVER
// ======================
app.get("/", (req, res) => {
    res.send("HCC Đăk Hà API Running");
});

// ======================
// START SERVER
// ======================
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});
