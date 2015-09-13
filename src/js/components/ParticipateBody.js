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
          <p><i className="fa fa-caret-right"></i><a href="#governance" className="scroll">Introduction</a></p>
          <p><i className="fa fa-caret-right"></i><a href="#members" className="scroll">Installing</a></p>
          <p><i className="fa fa-caret-right"></i><a href="#communication" className="scroll">Features</a></p>
        </Menu>
        </Section>

        <Section justify="start" appCentered={true} pad={{vertical: "medium"}}>
          <a name="governance"/>
          <Box direction="column">
            <Headline>Governance</Headline>
            <p>
              How the community governs itself
            </p>
            <b>More Information</b>
            <Box direction="row" align="start" responsive={true}>
              <Box pad={{ horizontal: "small" }}>
                <a href="http://governance.openswitch.net/" target="_blank"><i className="fa fa-angle-right"></i>Documentation</a>
              </Box>
            </Box>
          </Box>
        </Section>

        <Section colorIndex="neutral-6" justify="start" appCentered={true} pad={{vertical: "medium"}}>
          <a name="members"/>
          <Box direction="column">
            <Headline>Members</Headline>
            <p>
              Founding companies & partners.
            </p>
            <b>More Information</b>
            <Box direction="row" align="start" responsive={true}>

              <Box pad={{ horizontal: "small" }}>
                <Link to="documents/user/members"><i className="fa fa-angle-right"></i>Members</Link>
              </Box>
            </Box>
          </Box>
        </Section>

        <Section justify="start" appCentered={true} pad={{vertical: "medium"}}>
          <a name="communication"/>
          <Box direction="column">
            <Headline>Communication</Headline>
            <p>
              Communication
            </p>
            <b>More Information</b>
            <Box direction="row">
            <Box direction="column" align="start" responsive={true}>
              <Box pad={{ horizontal: "small" }}>
                <a href="https://groups.google.com/forum/#!forum/openswitch" target="_blank"><i className="fa fa-angle-right"></i>Mailing lists</a>
              </Box>
              <Box pad={{ horizontal: "small" }}>
                <a href="https://github.com/open-switch" target="_blank"><i className="fa fa-angle-right"></i>GitHub Discussions</a>
              </Box>
              <Box pad={{ horizontal: "small" }}>
                <a href="https://openswitch.slack.com/" target="_blank"><i className="fa fa-angle-right"></i>Slack</a>
              </Box>

            </Box>
            <Box direction="column" align="start" responsive={true}>
            <Box pad={{ horizontal: "small" }}>
              <a href="http://webchat.freenode.net/?channels=#openswitch" target="_blank"><i className="fa fa-angle-right"></i>IRC Webchat</a>
            </Box>
              <Box pad={{ horizontal: "small" }}>
                <Link to="documents/user/news"><i className="fa fa-angle-right"></i>News</Link>
              </Box>
              <Box pad={{ horizontal: "small" }}>
                <Link to="documents/user/blogs"><i className="fa fa-angle-right"></i>Blogs</Link>
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
