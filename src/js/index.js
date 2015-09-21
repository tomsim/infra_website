require('../scss/index.scss');
require("!style!css!highlight.js/styles/github.css");

var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var Locale = require('grommet/utils/Locale');

var OpenSwitch = require('./OpenSwitch');
var Home = require('./components/Home');
var Use = require('./components/UseBody')('use');
var Participate = require('./components/ParticipateBody')('participate');
var Develop = require('./components/DevelopBody')('develop');
var Documents = require('./components/GeneralBody')('documents');

var rootPath = '/';
if (__DEV_MODE__) {
  rootPath = '/'; // webpack-dev-server
}

var routes = (
  <Route name="openSwitch" path={rootPath} handler={OpenSwitch}>
    <Route name="home" path={rootPath} handler={Home} />
    {Develop.routes}
    {Participate.routes}
    {Use.routes}
    {Documents.routes}
  </Route>
);

//var router = Router.create({routes: routes, location: Router.HistoryLocation});
var router = Router.create({
  routes: routes,
  location: Router.HistoryLocation,
  scrollBehavior: {
    updateScrollPosition: function updateScrollPosition() {
      var hash = window.location.hash;
      if (hash) {
        var element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView();
        }
      } else {
        window.scrollTo(0, 0);
      }
    }
  }
});

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
