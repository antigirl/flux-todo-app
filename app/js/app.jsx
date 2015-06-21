var React = require('react');
var Items = require('./components/Items');
var Header = require('./components/Header');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <section id="todoapp">
          <Header/>
        </section>
        <section id="main">
          <Items/>
        </section>
      </div>
    );
  }
});

React.render(<App/>, document.body);
