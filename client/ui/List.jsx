import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { createContainer } from 'meteor/react-meteor-data';
import { Items } from '/lib/collection.js';

// List component - represents a single todo List
class List extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    }
  }

  onAddItem() {
    const {
      list,
    } = this.props;
    // Find the text field via the React ref
    const title = ReactDOM.findDOMNode(this.refs.addItemTitle).value.trim();
    const description = ReactDOM.findDOMNode(this.refs.addItemDescription).value.trim();
    // insert Item
    Meteor.call('item.insert', {title, description, listId: list._id});
    // Clear form
    ReactDOM.findDOMNode(this.refs.addItemTitle).value = '';
    ReactDOM.findDOMNode(this.refs.addItemDescription).value = '';
  }

  render() {
    const {
      list,
      items,
    } = this.props;
    // define style
    const listStyle = {
      padding: 10,
      margin: 5,
    };
    const listTextStyle = {
      fontSize: 18,
      textAlign: 'center',
      textDecoration: 'underline',
    };
    const formStyle = {
      borderWidth: 0.5,
      borderStyle: 'solid',
      borderRadius: 4,
      padding: 10,
    };
    const ItemStyle = {
      padding: 15,
    };
    return (
      <div style={listStyle}>
        <div onClick={() => this.setState({isOpen: !this.state.isOpen})} style={listTextStyle}>
          {list.text}
        </div>
        {
          this.state.isOpen &&
          <div>
            {/*render form*/}
            <div style={formStyle} id="add-item-form">
              <input
                type="text"
                ref="addItemTitle"
                placeholder="Title"
              />
              <input
                type="text"
                ref="addItemDescription"
                placeholder="Description"
              />
            <button
              style={{backgroundColor: 'gray'}}
              onClick={() => this.onAddItem()}>Submit</button>

            </div>
            { // render Item
              items.map((item) => (
                <div key={item._id} style={ItemStyle}>
                  <div>title: {item.title}</div>
                  <div>description: {item.description}</div>
                </div>
              ))
            }
          </div>
        }
      </div>
    );
  }
}

List.propTypes = {
  list: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired,
};

export default createContainer(({list}) => {
  // subscribe items by listId
  Meteor.subscribe('items', list._id);
  return {
    items: Items.find({listId: list._id}, {sort: {createdAt: -1}}).fetch(),
  };
}, List);
