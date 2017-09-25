import { Mongo } from 'meteor/mongo';

export const Lists = new Mongo.Collection('lists');
export const Items = new Mongo.Collection('items');
