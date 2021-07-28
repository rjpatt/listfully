const express = require('express');

const listController = require('../controllers/listController');

const router = express.Router();

router.post('/add', listController.addList, (req, res) => {
  return res.status(200).json(res.locals.list);
})

router.get('/getLists', listController.getLists, (req, res) => {
  return res.status(200).json(res.locals.lists)
})

module.exports = router;