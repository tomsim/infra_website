var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var NotFoundRoute = Router.NotFoundRoute;

var Article = require('grommet/components/Article');
var Section = require('grommet/components/Section');
var Box = require('grommet/components/Box');
var Menu = require('grommet/components/Menu');

var IntlMixin = require('grommet/mixins/GrommetIntlMixin');

var Header = require('./Header');
var Footer = require('./Footer');

var RoutedMenuUtils = require('../utils/RoutedMenuUtils');
var documentationContents = require('./MarkdownContentsMap').documentation;

var Documentation = React.createClass({

  mixins: [IntlMixin],

  contextTypes: {
    router: React.PropTypes.func.isRequired
  },

  render: function() {

    var menu = RoutedMenuUtils.getMenuItems(documentationContents, this.context.router);

    return (
      <Article>

        <Header colorIndex="neutral-1" menuMedia="lap-and-up" />

        <Section appCentered={true} separator="bottom">
          <h1>{this.getGrommetIntlMessage('Documentation')}</h1>
          <p>
            Reference implementation for Open Switch!
          </p>
        </Section>

        <Section appCentered={true} direction="row">
          <Box>
            <Menu>
              {menu}
            </Menu>
          </Box>
          <Box pad={{vertical: 'small', horizontal: 'large'}} className="document__body">
            <RouteHandler />
          </Box>
        </Section>

        <Footer />
      </Article>
    );
  }
});

Documentation.routes = function () {
  var DefaultRedirect = React.createClass({
    statics: {
      willTransitionTo: function(transition, params) {
        console.log(documentationContents[0].route);
        transition.redirect(documentationContents[0].route, params);
      }
    },
    render: function () {}
  });

  var routes = RoutedMenuUtils.createContentRoutes(documentationContents);
  return [
    <Route key="docs" name="documentation" path='/documentation' handler={Documentation}>
      <Route path="" handler={DefaultRedirect} />
      <Route path="/" handler={DefaultRedirect} />
      <NotFoundRoute handler={DefaultRedirect}/>
      {routes}
    </Route>
  ];
};

module.exports = Documentation;
