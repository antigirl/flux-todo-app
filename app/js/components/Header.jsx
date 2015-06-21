var React = require('react');
var TextInput = require('./TextInput');

var Header = React.createClass({
  render: function() {
    return (
      <header id="header">
       <h1>todos</h1>
       <TextInput/>
       </header>
    );
  }
});

module.exports = Header;
