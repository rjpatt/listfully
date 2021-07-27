const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://rjpatt:A915sekANJPB87Lm@cluster0.tz1wg.mongodb.net/listfully?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
  userNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'listfully'
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err => console.log(err)));

const Schema = mongoose.Schema;

//set a schema for the 'user' collection
const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

const User = mongoose.model('user', userSchema);

//set a schema for the 'list item' collection

const listItemSchema = new Schema({
  index: { type: Number, required: true },
  title: { type: String, required: true },
  description: String,
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  }
});

const List_Item = mongoose.model('list_item', listItemSchema)

//set a schema for the 'list' collection

const listSchema = new Schema({
  title: { type: String, required: true },
  intro: String,
  timestamp: { type: Date, defaut: Date.now },
  items: [listItemSchema],
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  }
});

const List = mongoose.model('list', listSchema);



module.exports = {
  User,
  List,
  List_Item
}