import { Meteor } from 'meteor/meteor';
import {check, Match} from 'meteor/check';

import { Lists, Items } from '/lib/collection';

export default function() {
  Meteor.publish('lists', () => {
    return Lists.find({});
  });

  Meteor.publish('items', (listId) => {
    return Items.find({listId});
  });
}
