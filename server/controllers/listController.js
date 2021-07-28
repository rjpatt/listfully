const models = require('../models/listModels');

const listController = {};

listController.getLists = async (req, res, next) => {
  try {
    const lists = await models.List.find({})
    res.locals.lists = lists;
    return next();
  } catch (err) {
    return next({ log: `getLists controller encountered error: ${err}`, message: err });
  }
}

listController.addList = async (req, res, next) => {
  try {
    const { listName, items } = req.body;
    if (!listName) {
      return next({ log: 'Error: list name must be entered', message: 'Please enter a list name' });
    }
    const dataItems = [];
    for (let i = 0; i < items.length; i++) {
      const item = await models.List_Item.create({ index: i, title: items[i] })
      dataItems.push(item);
    }
    res.locals.list = await models.List.create({ title: listName, items: dataItems });
  } catch (err) {
    return next({ log: `addList controller encountered error: ${err}`, message: err });
  }
}

module.exports = listController;