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

var StoryIcon = require('./icons/Story');
var Headline = require('grommet/components/Headline');
var Button = require('grommet/components/Button');
var Box = require('grommet/components/Box');
var ConsoleIcon = require('./icons/Console');

module.exports = function (path, includeMenu) {

  var contents = require('./MarkdownContentsMap')[path];

  var HomeSection = React.createClass({
    render: function () {
      return (
        <Section {...this.props}
          appCentered={true} justify="center" align="center"
          textCentered={true} pad={{vertical: "large"}}>
          {this.props.children}
        </Section>
      );
    }
  });

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
                <Link to="/"><i className="fa fa-angle-right"></i>Documentation</Link>
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
                <Link to="/"><i className="fa fa-angle-right"></i>Members</Link>
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
                <Link to="/"><i className="fa fa-angle-right"></i>Mailing lists</Link>
              </Box>
              <Box pad={{ horizontal: "small" }}>
                <Link to="/"><i className="fa fa-angle-right"></i>GitHub Discussions</Link>
              </Box>
              <Box pad={{ horizontal: "small" }}>
                <Link to="/"><i className="fa fa-angle-right"></i>Slack</Link>
              </Box>

            </Box>
            <Box direction="column" align="start" responsive={true}>
            <Box pad={{ horizontal: "small" }}>
              <Link to="/"><i className="fa fa-angle-right"></i>IRC Webchat</Link>
            </Box>
              <Box pad={{ horizontal: "small" }}>
                <Link to="/"><i className="fa fa-angle-right"></i>News</Link>
              </Box>
              <Box pad={{ horizontal: "small" }}>
                <Link to="/"><i className="fa fa-angle-right"></i>Blogs</Link>
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
