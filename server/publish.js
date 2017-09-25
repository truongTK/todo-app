import { Meteor } from 'meteor/meteor';
import {check, Match} from 'meteor/check';

import { Lists, Items } from '/lib/collection';

export default function() {
  // This is publish method, use with subscribe method in client
  // Publish array of list to client
  Meteor.publish('lists', () => {
    return Lists.find({});
  });
  // Publish array of items of list to client
  Meteor.publish('items', (listId) => {
    return Items.find({listId});
  });
}
