import { Meteor } from 'meteor/meteor';
import {check, Match} from 'meteor/check';

import { Lists, Items } from '/lib/collection';

export default function() {
  Meteor.methods({
    'list.insert'(text) {
      check(text, String);
      Lists.insert({
        text,
        createdAt: new Date(), // current time
      });
    },
    'item.insert'(data) {
      check(data, {
        title: String,
        description: String,
        listId: String,
      });
      Items.insert({
        listId: data.listId,
        title: data.title,
        description: data.description,
        createdAt: new Date(), // current time
      });
    }
  });
}
