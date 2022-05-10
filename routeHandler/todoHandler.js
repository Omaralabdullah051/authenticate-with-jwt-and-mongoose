const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const todoSchema = require('../schemas/todoSchema');
const Todo = new mongoose.model("Todo", todoSchema)
const checkLogin = require('../middlewares/checkLogin');

//*GET ALL THE TODOS
router.get('/', checkLogin, async (req, res) => {
    console.log(req.userName);
    console.log(req.userId);
    try {
        const data = await Todo.find({});
        res.status(200).json({
            result: data,
            message: "Success"
        })
    }
    catch (err) {
        res.status(500).json({
            error: "There was a server side error"
        });
    }
});

module.exports = router;