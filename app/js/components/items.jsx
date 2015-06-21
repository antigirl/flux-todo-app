var React = require('react');
var appActions = require('../actions/appActions');
var appStore = require('../stores/appStore.js')
var css = require('../../styles/app.scss');

var Items = React.createClass({
  getInitialState: function() {
    return {
      items: appStore.getItems()
    };
  },
  completeItem: function(itemKey) {
    appActions.completeItem(itemKey)
  },
  removeItem: function(itemKey) {
    appActions.removeItem(itemKey)
  },
  componentWillMount:function(){
    var _this = this;
    //set up listener before render function
    //any time change is emitted, make sure to update state
    //updating state will re-render then
    appStore.addChangeListener( function() {
      _this.setState(appStore.getItems())
    });
  },
  render: function() {
    return (
      <ul id="todo-list">
        {this.state.items.map(function (item, i) {
          var completedClass = '';
          if(item.done) {
            completedClass = 'completed';
          }
            return <li className={completedClass}><div className="view"><input className="toggle" type="checkbox" onClick={this.completeItem.bind(this, item.key)}></input><label>{item.txt}</label><button className="destroy" onClick={this.removeItem.bind(this, item.key)}></button></div></li>
        }, this)}
      </ul>
    );
  }
});

module.exports = Items;
