var React = require('react');
var appActions = require('../actions/appActions');

var itemControls = React.createClass({
  addItem: function(e) {
    if (e.keyCode === 13) {
      var item = this.refs.item.getDOMNode().value;
      appActions.addItem(item);
    }
  },
  render: function() {
    return (
      <div>
        <input ref="item" type="text" id="new-todo" placeholder="What needs to be done?" onKeyUp={this.addItem}></input>
      </div>
    );
  }
});

module.exports = itemControls;
