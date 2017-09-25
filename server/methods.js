import { Meteor } from 'meteor/meteor';
import {check, Match} from 'meteor/check';

import { Lists, Items } from '/lib/collection';

export default function() {
  Meteor.methods({
    // create List
    'list.insert'(text) {
      check(text, String);
      // Insert to Mongodb
      Lists.insert({
        text,
        createdAt: new Date(), // current time
      });
    },
    // create Item
    'item.insert'(data) {
      check(data, {
        title: String,
        description: String,
        listId: String,
      });
      // Insert to Mongodb
      Items.insert({
        listId: data.listId,
        title: data.title,
        description: data.description,
        createdAt: new Date(), // current time
      });
    }
  });
}
