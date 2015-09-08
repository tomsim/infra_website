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

          <Header colorIndex="neutral-1" menuMedia="lap-and-up" />

          <HomeSection colorIndex="accent-1">
            <Box direction="row">
              <Box pad="large" justify="center" align="center">
                <ConsoleIcon />
              </Box>
              <Box direction="column" justify="center" align="center">
                <Headline strong={true}>How do I Contribute?.</Headline>
                <p>
                  Aenean lacinia bibendum nulla sed consectetur. Nullam id dolor id nibh
                  ultricies vehicula elit. Sed posuere consectetur est at lobortis.
                </p>
                <Menu direction="row">
                  <Link to="documents/dev/howtocontribute">
                    <Button label="How do I Contribute?" onClick={this._onClick} primary={true} />
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
                <Headline strong={true}>Basic.</Headline>
                <p>
                  High level discussion on installation methods, link to hardware compatibility and links to pages on ONIE and containers
                </p>
                <Menu direction="row">
                  <Link to="documents/dev/basic">
                    <Button label="Basic" onClick={this._onClick} primary={true} />
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
                <Headline strong={true}>Architecture.</Headline>
                <p>
                  Aenean lacinia bibendum nulla sed consectetur. Nullam id dolor id nibh
                  ultricies vehicula elit. Sed posuere consectetur est at lobortis.
                </p>
                <Menu direction="row">
                  <Link to="documents/dev/architecture">
                    <Button label="Architecture" onClick={this._onClick} primary={true} />
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
                <Headline strong={true}>Porting.</Headline>
                <p>
                  High level discussion on installation methods, link to hardware compatibility and links to pages on ONIE and containers
                </p>
                <Menu direction="row">
                  <Link to="documents/porting">
                    <Button label="Porting" onClick={this._onClick} primary={true} />
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
                <Headline strong={true}>Testing.</Headline>
                <p>
                  Aenean lacinia bibendum nulla sed consectetur. Nullam id dolor id nibh
                  ultricies vehicula elit. Sed posuere consectetur est at lobortis.
                </p>
                <Menu direction="row">
                  <Link to="documents/dev/testing">
                    <Button label="Testing" onClick={this._onClick} primary={true} />
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
