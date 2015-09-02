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
var OpenSwitchLogo = require('./icons/OpenSwitchLogo');

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

    mixins: [IntlMixin],

    contextTypes: {
      router: React.PropTypes.func.isRequired
    },

    render: function() {
      return (
        <Article>

          <Header colorIndex="neutral-1" menuMedia="lap-and-up" />

          <HomeSection primary={true} full={true} className="openswitch-hero"
            backgroundImage={'url(img/black-background.png)'}>
            <OpenSwitchLogo a11yTitle=""/>
            <Headline large={true}><b>Open</b>Switch</Headline>
            <Headline small={true}>
              Participate.
            </Headline>
            <Menu direction="row">
              <Link to="documents/how-to-participate">
                <Button label="How to Participate?" onClick={this._onClick} primary={true} />
                </Link>

            </Menu>
          </HomeSection>

          <HomeSection colorIndex="accent-2">
            <Box direction="row">
              <Box pad="large" justify="center" align="center">
                <StoryIcon />
              </Box>
              <Box direction="column" justify="center" align="center">
                <Headline strong={true}>Governance.</Headline>
                <p>
                  High level discussion on installation methods, link to hardware compatibility and links to pages on ONIE and containers
                </p>
                <Menu direction="row">
                  <Link to="documents/governance">
                    <Button label="Governance" onClick={this._onClick} primary={true} />
                  </Link>
                </Menu>
              </Box>
            </Box>
          </HomeSection>

          <HomeSection colorIndex="accent-1">
            <Box direction="row">
              <Box pad="large" justify="center" align="center">
                <ConsoleIcon />
              </Box>
              <Box direction="column" justify="center" align="center">
                <Headline strong={true}>Members.</Headline>
                <p>
                  Aenean lacinia bibendum nulla sed consectetur. Nullam id dolor id nibh
                  ultricies vehicula elit. Sed posuere consectetur est at lobortis.
                </p>
                <Menu direction="row">
                  <Link to="documents/members">
                    <Button label="Members" onClick={this._onClick} primary={true} />
                  </Link>
                </Menu>
              </Box>
            </Box>
          </HomeSection>

          <HomeSection colorIndex="accent-2">
            <Box direction="row">
              <Box pad="large" justify="center" align="center">
                <StoryIcon />
              </Box>
              <Box direction="column" justify="center" align="center">
                <Headline strong={true}>Communication.</Headline>
                <p>
                  High level discussion on installation methods, link to hardware compatibility and links to pages on ONIE and containers
                </p>
                <Menu direction="row">
                  <Link to="documents/communication">
                    <Button label="Communication" onClick={this._onClick} primary={true} />
                  </Link>
                </Menu>
              </Box>
            </Box>
          </HomeSection>

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