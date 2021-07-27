const models = require('../models/listModels');

const listController = {};

listController.getLists = async (req, res, next) => {
  try {
    res.locals.lists = await models.List.find({})
    return next();
  } catch (err) {
    return next({ log: `getLists controller encountered error: ${err}`, message: err });
  }
}

listController.addList = async (req, res, next) => {
  try {
    const { listName, items } = req.body;
    console.log('name', listName);
    console.log('items: ', items)
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