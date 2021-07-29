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

listController.deleteList = async (req, res, next) => {
  try {
    const { id } = req.body;
    await models.List.deleteOne({ _id: id });
    return next();
  } catch (err) {
    return next({ log: `deleteList controller encountered error: ${err}`, message: err });
  }
}
listController.getListforEditing = async (req, res, next) => {
  try {
    const id = req.body.id;
    const list = await models.List.find({ _id: id });
    res.locals.list = list[0];
    return next();
  } catch (err) {
    return next({ log: `getListforEditing controller encountered error: ${err}`, message: err });
  }
}

listController.editListItems = async (req, res, next) => {
  try {
    const { items } = req.body;
    const refItems = res.locals.list.items;
    const ids = [];
    refItems.forEach((ref) => {
      ids.push(ref._id);
    })
    const newItems = [];
    for (let i = 0; i < items.length - 1; i++) {
      const id = ids[i];

      const newTitle = items[i];

      const newItem = await models.List_Item.findOneAndUpdate({ _id: id }, { title: newTitle })
      newItems.push(newItem);
    }
    res.locals.newItems = newItems;
    return next();
  } catch (err) {
    return next({ log: `editListItems controller encountered error: ${err}`, message: err });
  }
}

listController.editList = async (req, res, next) => {
  try {
    const { id, title } = req.body;

    await models.List.updateOne({ _id: id }, { title: title, items: res.locals.newItems });
    return next();
  } catch (err) {
    return next({ log: `editList controller encountered error: ${err}`, message: err });
  }
}

listController.getListById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const list = await models.List.find({ _id: id })
    res.locals.list = list;
    return next();
  } catch (err) {
    return next({ log: `getLists controller encountered error: ${err}`, message: err });
  }
}




module.exports = listController;