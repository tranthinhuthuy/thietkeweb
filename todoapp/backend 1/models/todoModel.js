const db = require('../config/db');

const Todo = {
    findAllByUserId: (userId, callback) => {
        const sql = 'SELECT * FROM todos WHERE user_id = ?';
        db.query(sql, [userId], callback);
    },

    create: (todoData, callback) => {
        const sql = 'INSERT INTO todos SET ?';
        db.query(sql, todoData, callback);
    },

    update: (id, updatedData, callback) => {
        const sql = 'UPDATE todos SET ? WHERE id = ?';
        db.query(sql, [updatedData, id], callback);
    },

    delete: (id, callback) => {
        const sql = 'DELETE FROM todos WHERE id = ?';
        db.query(sql, [id], callback);
    }
};

module.exports = Todo;