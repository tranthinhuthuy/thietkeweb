const express = require("express");
const router = express.Router();
const db = require("../config/db");

// Lấy danh sách ứng viên
router.get("/", (req, res) => {
    const sql = "SELECT * FROM candidates";

    db.query(sql, (err, result) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.json(result);
        }
    });
});

// Ứng tuyển công việc
router.post("/apply", (req, res) => {

    const { name, phone, email, address, job_id } = req.body;

    const sql = "INSERT INTO candidates (name, phone, email, address, job_id, status) VALUES (?,?,?,?,?, 'pending')";

    db.query(sql, [name, phone, email, address, job_id], (err, result) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.json({
                message: "Ứng tuyển thành công"
            });
        }

    });

});

// DUYỆT HỒ SƠ
router.put("/approve/:id", (req, res) => {
    const id = req.params.id;
    const sql = "UPDATE candidates SET status='approved' WHERE id=?";

    db.query(sql, [id], (err, result) => {

        if (err) {
            res.status(500).json(err);
        } else {
            res.json({
                message: "Đã duyệt hồ sơ"
            });
        }

    });

});

// TỪ CHỐI HỒ SƠ
router.put("/reject/:id", (req, res) => {

    const id = req.params.id;
    const sql = "UPDATE candidates SET status='rejected' WHERE id=?";
    db.query(sql, [id], (err, result) => {

        if (err) {
            res.status(500).json(err);
        } else {
            res.json({
                message: "Đã từ chối hồ sơ"
            });
        }
    });

});

module.exports = router;