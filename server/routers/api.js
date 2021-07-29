const express = require('express');

const listController = require('../controllers/listController');

const router = express.Router();

router.post('/add', listController.addList, (req, res) => {
  return res.status(200).json(res.locals.list);
})
router.get('/getLists/:id', listController.getListById, (req, res) => {
  return res.status(200).json(res.locals.list)
})
router.get('/getLists', listController.getLists, (req, res) => {
  return res.status(200).json(res.locals.lists)
})



router.delete('/delete', listController.deleteList, (req, res) => {
  return res.status(200);
})

router.put('/edit', listController.getListforEditing, listController.editListItems, listController.editList, (req, res) => {
  return res.status(200).json(res.locals.list);
})

module.exports = router;