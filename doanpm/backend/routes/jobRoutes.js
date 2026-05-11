const express = require("express");
const router = express.Router();
const db = require("../config/db");

// GET jobs
router.get("/", (req, res) => {
    db.query("SELECT * FROM jobs", (err, result) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.json(result);
        }
    });
});

// Lấy 1 công việc theo id
router.get("/:id", (req, res) => {
    const id = req.params.id;

    db.query("SELECT * FROM jobs WHERE id = ?", [id], (err, result) => {
        if (err) return res.status(500).json(err);

        if (result.length === 0) {
            return res.json({ message: "Không tìm thấy job" });
        }

        res.json(result[0]);
    });
});// Lấy 1 công việc theo id
router.get("/:id", (req, res) => {
    const id = req.params.id;

    db.query("SELECT * FROM jobs WHERE id = ?", [id], (err, result) => {
        if (err) return res.status(500).json(err);

        if (result.length === 0) {
            return res.json({ message: "Không tìm thấy job" });
        }

        res.json(result[0]);
    });
});

// POST jobs
router.post("/", (req, res) => {
    const { title, location, quantity, salary } = req.body;

    const sql = "INSERT INTO jobs(title, location, quantity, salary) VALUES (?,?,?,?)";

    db.query(sql, [title, location, quantity, salary], (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }
        res.json({
            message: "Thêm công việc thành công",
            id: result.insertId
        });
    });
});

module.exports = router;
router.put("/:id", (req, res) => {
    const id = req.params.id;
    const { title, location, quantity, salary } = req.body;

    const sql = "UPDATE jobs SET title=?, location=?, quantity=?, salary=? WHERE id=?";

    db.query(sql, [title, location, quantity, salary, id], (err, result) => {
        if (err) return res.status(500).json(err);

        res.json({
            message: "Cập nhật thành công"
        });
    });
});
router.delete("/:id", (req, res) => {
    const id = req.params.id;

    db.query("DELETE FROM jobs WHERE id = ?", [id], (err, result) => {
        if (err) return res.status(500).json(err);

        res.json({
            message: "Xóa thành công"
        });
    });
});
