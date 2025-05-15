const Todo = require('../models/todoModel');

exports.getTodos = (req, res) => {
    Todo.findAllByUserId(req.user.id, (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.json(results);
    });
};

exports.addTodo = (req, res) => {
    const todoData = { ...req.body, user_id: req.user.id };
    Todo.create(todoData, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.status(201).json({ id: result.insertId, ...todoData });
    });
};

exports.updateTodo = (req, res) => {
    Todo.update(req.params.id, req.body, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.json({ message: 'Todo updated' });
    });
};

exports.deleteTodo = (req, res) => {
    Todo.delete(req.params.id, (err) => {
        if (err) return res.status(500).json({ error: err });
        res.json({ message: 'Todo deleted' });
    });
};