var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;


var Article = require('grommet/components/Article');
var Header = require('./Header');
var Section = require('grommet/components/Section');
var RoutedMenuUtils = require('../utils/RoutedMenuUtils');
var IntlMixin = require('grommet/mixins/GrommetIntlMixin');

var Footer = require('./Footer');


var useContents = require('./MarkdownContentsMap').use;

var Use = React.createClass({

  mixins: [IntlMixin],

  render: function() {
    return (
      <Article>

        <Header colorIndex="neutral-1" menuMedia="lap-and-up" />

        <Section appCentered={true}>
          <h1>{this.getGrommetIntlMessage('Use')}</h1>
          <RouteHandler />
        </Section>

        <Footer />
      </Article>
    );
  }
});

Use.routes = function () {
  var routes = RoutedMenuUtils.getRoutes(useContents);
  console.log(routes);
  return [
    <Route key="docs" name="use" path='use' handler={Use}>
      {routes}
    </Route>
  ];
};

module.exports = Use;
