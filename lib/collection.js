import { Mongo } from 'meteor/mongo';

const Lists = new Mongo.Collection('lists');
const Items = new Mongo.Collection('items');

var Schemas = {};

Schemas.Lists = new SimpleSchema({
  text: {
    type: String,
    label: 'name of list',
  },
  createdAt: {
    type: Date,
    label: 'create_at',
  },
});

Schemas.Items = new SimpleSchema({
  listId: {
    type: String,
    label: 'item list id',
  },
  title: {
    type: String,
    label: 'title of item',
  },
  description: {
    type: String,
    label: 'description of item',
  },
  createdAt: {
    type: Date,
    label: 'create_at',
  },
});

// attach schema for collection
// This will be secure schema of collection
Lists.attachSchema(Schemas.Lists);
Items.attachSchema(Schemas.Items);

export {
  Lists,
  Items,
};
