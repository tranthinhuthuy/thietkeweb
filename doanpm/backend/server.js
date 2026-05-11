const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const authRoutes = require("./routes/authRoutes");
const jobRoutes = require("./routes/jobRoutes");
const candidateRoutes = require("./routes/candidateRoutes");

const app = express();

app.use(cors());
app.use(bodyParser.json());

/* ===== THÊM: middleware kiểm tra trạng thái job ===== */
function checkJobStatus(req, res, next) {

    if (global.jobs && Array.isArray(global.jobs)) {
        const today = new Date();

        global.jobs.forEach(job => {
            const deadline = new Date(job.deadline);

            if (job.applied >= job.quantity) {
                job.status = "closed"; // đủ hồ sơ
            } else if (today > deadline) {
                job.status = "expired"; // hết hạn
            } else {
                job.status = "open";
            }
        });
    }

    next();
}
/* ===== KẾT THÚC THÊM ===== */

app.get("/", (req, res) => {
    res.send("Server running");
});

app.use("/api/auth", authRoutes);

/* ===== THÊM middleware vào jobs ===== */
app.use("/api/jobs", checkJobStatus, jobRoutes);
/* ===== KẾT THÚC ===== */

app.use("/api/candidates", candidateRoutes);

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});