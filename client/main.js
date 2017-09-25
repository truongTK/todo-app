import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import App from './ui/App.jsx';

Meteor.startup(function() {
  // Render App Component to layout
  render(<App />, document.getElementById('render-target'));
});
