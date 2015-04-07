'use strict'

var Home = require('./components/home');
var {RouteHandler} = Router,

App = React.createClass({
  render() {
    return (
      <div>
        <Home />
        <RouteHandler {...this.props}/>
      </div>
    );
  }
});

module.exports = App;