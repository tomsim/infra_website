require('../scss/index.scss');
require("!style!css!highlight.js/styles/github.css");

var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var Locale = require('grommet/utils/Locale');

var OpenSwitch = require('./OpenSwitch');
var Home = require('./components/Home');
var Use = require('./components/UseBody')('use');
var Participate = require('./components/GeneralBody')('participate');
var Develop = require('./components/GeneralBody')('develop');

var rootPath = '/open-switch/';
if (__DEV_MODE__) {
  rootPath = '/'; // webpack-dev-server
}

var routes = (
  <Route name="openSwitch" path={rootPath} handler={OpenSwitch}>
    <Route name="home" path={rootPath} handler={Home} />
    {Develop.routes}
    {Participate.routes}
    {Use.routes}
  </Route>
);

var router = Router.create({routes: routes, location: Router.HistoryLocation});

router.run(function (Handler) {
  var element = document.getElementById('content');
  var locale = Locale.getCurrentLocale();
  var localeData;
  try {
    localeData = Locale.getLocaleData(require('../messages/' + locale));
  } catch (e) {
    localeData = Locale.getLocaleData(require('../messages/en-US'));
  }
  React.render(
    <Handler locales={localeData.locale} messages={localeData.messages} />,
    element
  );
  document.querySelectorAll('.openswitch')[0].scrollTop = 0;
});

document.body.classList.remove('loading');
