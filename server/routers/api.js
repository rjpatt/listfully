const express = require('express');

const listController = require('../controllers/listController');
const userController = require('../controllers/userController');

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

router.post('/signup', userController.createUser, (req, res) => {
  return res.status(200);
})

router.post('/login', userController.login, (req, res) => {
  return res.status(200).json(res.locals.userPassed);
})


router.delete('/delete', listController.deleteList, (req, res) => {
  return res.status(200);
})

router.put('/edit', listController.getListforEditing, listController.editListItems, listController.editList, (req, res) => {
  return res.status(200).json(res.locals.list);
})

module.exports = router;