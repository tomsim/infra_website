var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var Article = require('grommet/components/Article');
var Section = require('grommet/components/Section');
var Box = require('grommet/components/Box');
var Menu = require('grommet/components/Menu');

var IntlMixin = require('grommet/mixins/GrommetIntlMixin');

var Header = require('./Header');
var Footer = require('./Footer');

var RoutedMenuUtils = require('../utils/RoutedMenuUtils');

module.exports = function (path, includeMenu) {

  var contents = require('./MarkdownContentsMap')[path];

  var GeneralBody = React.createClass({

    mixins: [IntlMixin],

    contextTypes: {
      router: React.PropTypes.func.isRequired
    },

    render: function() {

      var menu = RoutedMenuUtils.getMenuItems(contents, this.context.router);

      var documentationBody = (
        <Section appCentered={true} direction="row" className="document__body">
          <RouteHandler />
        </Section>
      );

      if (includeMenu) {
        documentationBody = (
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
        );
      }
      return (
        <Article>

          <Header colorIndex="neutral-1" menuMedia="lap-and-up" />

          {documentationBody}

          <Footer />

        </Article>
      );
    }
  });

  return {
    routes: [
      <Route key="docs" name={path} path={path} handler={GeneralBody}>
        {RoutedMenuUtils.getRoutes(contents, true)}
      </Route>
    ]
  };
};
