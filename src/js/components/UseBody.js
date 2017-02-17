var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var Article = require('grommet/components/Article');
var Section = require('grommet/components/Section');
var Box = require('grommet/components/Box');
var Menu = require('grommet/components/Menu');

var IntlMixin = require('grommet/mixins/GrommetIntlMixin');

var Header = require('./Header');
var Footer = require('./Footer');

var RoutedMenuUtils = require('../utils/RoutedMenuUtils');

var Headline = require('grommet/components/Headline');
var Box = require('grommet/components/Box');

module.exports = function (path, includeMenu) {

  var contents = require('./MarkdownContentsMap')[path];

  var GeneralBody = React.createClass({

    contextTypes: {
      router: React.PropTypes.func.isRequired
    },

    mixins: [IntlMixin],

    _onClick: function () {
      //no-op
    },

    render: function() {
      return (
        <Article>

          <Header float={true} menuMedia="lap-and-up" />

          <Section backgroundImage={'url(/img/openswitch-menu-background.png)'}
          appCentered={true} justify="center" align="center"
          textCentered={true} pad={{vertical: "medium"}}>
          <p></p>
          </Section>

          <Section colorIndex="neutral-3"
          appCentered={true} align="end"
          textCentered={true} pad={{vertical: "none"}}>
          <Menu direction="row" align="end" responsive={false} >
            <p><i className="fa fa-caret-right"></i><a href="#installing" className="scroll">Installing</a></p>
          </Menu>
          </Section>

          <Section align="start" justify="start" appCentered={true} >
            <a name="installing"/>
            <Headline>Installing</Headline>
            <p>OpenSwitch supports hardware based on <a href="http://onie.org">ONIE</a>. Below you will find the installation guide.
            OpenSwitch is also developing a Virtual Machine that is useful for testing and demo purposes.
            </p>
            <Box pad={{ horizontal: "small" }}>
	      <a href="https://github.com/open-switch/opx-build">Learn how to build OPX Base</a>
	      <a href="https://github.com/open-switch/opx-docs/wiki">OPX Base Documentation</a>
            </Box>
          </Section>
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
