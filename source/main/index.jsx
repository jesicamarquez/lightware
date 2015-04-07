'use strict'

require('../style/main.scss');
require('./style.scss');

window.location.hash = '';

/*
 * Temporary contect data.
 */
var context = require('../json/context');

var { Route, DefaultRoute, NotFoundRoute } = Router,
    App = require('./App.jsx'),
    Dashboard = require('./components/dashboard');

  var routes = (
    <Route name="app" path="/" handler={App}>
      <Route name="family" handler={Dashboard} />
      <Route name="friends" handler={Dashboard} />
      <Route name="bae" handler={Dashboard} />
      <DefaultRoute handler={Dashboard}/>
      <NotFoundRoute handler={Dashboard}/>
    </Route>
  );

  var router = Router.create({
    routes: routes,
    // location: Router.HistoryLocation
  });
  router.run((Handler, state) => {
    var params = state.params || {},
      name = state.path.split('/')[1];
    params.name = name;
    params.state = state;
    document.body.setAttribute('intro', name? 'false': 'true');
    React.render(<Handler params={params} />, document.getElementById('app'));
  });