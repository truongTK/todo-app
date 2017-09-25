import { Meteor } from 'meteor/meteor';

import methods from './methods';
import publish from './publish';

Meteor.startup(() => {
  // code to run on server at startup
  methods();
  publish();
});
