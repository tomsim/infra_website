var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var Link = require('react-router').Link;

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
          <p><i className="fa fa-caret-right"></i><a href="#participate" className="scroll">Participate</a></p>
          <p><i className="fa fa-caret-right"></i><a href="#communication" className="scroll">Communication</a></p>
        </Menu>
        </Section>

        <Section justify="start" appCentered={true} pad={{vertical: "medium"}}>
          <a name="participate"/>
          <Box direction="column">
            <Headline>How to Participate</Headline>
            <p>
              Join the community and become more involved.
            </p>
            <b>More Information</b>
            <Box direction="row" align="start" responsive={true}>
              <Box pad={{ horizontal: "small" }}>
                <Link to="documents/user/openswitch_overview"><i className="fa fa-angle-right"></i>Overview</Link>
                <Link to="documents/user/openswitch_faq"><i className="fa fa-angle-right"></i>FAQ</Link>
                <Link to="documents/user/participatehome"><i className="fa fa-angle-right"></i>Getting Started</Link>
                <Link to="documents/dev/ops-release-process"><i className="fa fa-angle-right"></i>Release Management</Link>
                <a href="http://governance.openswitch.net/" target="_blank"><i className="fa fa-angle-right"></i>Governance Documentation</a>
                <a href="https://archive.openswitch.net/website/OpenSwitchProject-ParticipationAgreementandCharter_v5_2016.12.12.pdf" target="_blank"><i className="fa fa-angle-right"></i>Become a Member</a>
              </Box>
            </Box>
          </Box>
        </Section>

        <Section justify="start" appCentered={true} pad={{vertical: "medium"}}>
          <a name="communication"/>
          <Box direction="column">
            <Headline>Communication</Headline>
            <b>More Information</b>
            <Box direction="row">
            <Box direction="column" align="start" responsive={true}>
              <Box pad={{ horizontal: "small" }}>
                <a href="http://lists.openswitch.net" target="_blank"><i className="fa fa-angle-right"></i>Mailing lists</a>
              </Box>
              <Box pad={{ horizontal: "small" }}>
		<a href="https://github.com/open-switch/opx-docs/wiki">OpenSwitch Docs</a>
              </Box>
            </Box>
            <Box direction="column" align="start" responsive={true}>
            <Box pad={{ horizontal: "small" }}>
              <a href="http://webchat.freenode.net/?channels=#openswitch" target="_blank"><i className="fa fa-angle-right"></i>IRC Webchat</a>
            </Box>
              <Box pad={{ horizontal: "small" }}>
                <Link to="documents/user/news"><i className="fa fa-angle-right"></i>News</Link>
              </Box>
            </Box>
            </Box>
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
