import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import { Lists } from '/lib/collection.js';

import List from './List.jsx';

// App component - represents the whole app
class App extends Component {
  onAddList(event) {
    event.preventDefault();
    // Find the text field via the React ref
    const text = ReactDOM.findDOMNode(this.refs.addList).value.trim();
    // Insert List
    // Meteor call is a method to call server api
    Meteor.call('list.insert', text);
    // Clear form
    ReactDOM.findDOMNode(this.refs.addList).value = '';
  }

  render() {
    const {
      lists,
    } = this.props;
    return (
      <div>
        <form onSubmit={(e) => this.onAddList(e)} >
          <input
            type="text"
            ref="addList"
            placeholder="Add new List"
          />
        </form>
        { // render list of list
          lists.map((list) => (
            <List key={list._id} list={list} />
          ))
        }
      </div>

    );
  }
}
// Define props style
App.propTypes = {
  lists: PropTypes.array.isRequired,
};

export default createContainer(() => {
  // subscribe lists from server
  Meteor.subscribe('lists');
  return {
    lists: Lists.find({}, {sort: {createdAt: -1}}).fetch(),
  };
}, App);
