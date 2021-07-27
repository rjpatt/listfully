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
    const { listName, item1, item2, item3, item4, item5, item6 } = req.body;
    if (!listName) {
      return next({ log: 'Error: list name must be entered', message: 'Please enter a list name' });
    }
    const items = [item1, item2, item3, item4, item5, item6];
    const dBItems = [];
    for (let i = 0; i < items.length; i++) {
      const item = await models.List_Item.create({ index: i, title: items[i] })
      dbItems.push(item);
    }
    await models.List.create({ title: listName, items: dbItems });
  } catch (err) {
    return next({ log: `addList controller encountered error: ${err}`, message: err });
  }
}

module.exports = listController;