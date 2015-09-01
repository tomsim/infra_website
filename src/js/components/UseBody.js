var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
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

          <HomeSection colorIndex="accent-2">
            <Box direction="row">
              <Box pad="large" justify="center" align="center">
                <StoryIcon />
              </Box>
              <Box direction="column" justify="center" align="center">
                <Headline strong={true}>Installing.</Headline>
                <p>
                  High level discussion on installation methods, link to hardware compatibility and links to pages on ONIE and containers
                </p>
                <Menu direction="row">
                  <Link to="develop/howtocontribute">
                    <Button label="Read Documentation" onClick={this._onClick} primary={true} />
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
                <Headline strong={true}>Features.</Headline>
                <p>
                  Aenean lacinia bibendum nulla sed consectetur. Nullam id dolor id nibh
                  ultricies vehicula elit. Sed posuere consectetur est at lobortis.
                </p>
                <Menu direction="row">
                  <Link to="develop">
                    <Button label="Start Development" onClick={this._onClick} primary={true} />
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
                <Headline strong={true}>References.</Headline>
                <p>
                  High level discussion on installation methods, link to hardware compatibility and links to pages on ONIE and containers
                </p>
                <Menu direction="row">
                  <Link to="develop">
                    <Button label="Read Documentation" onClick={this._onClick} primary={true} />
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
                <Headline strong={true}>Downloads.</Headline>
                <p>
                  Aenean lacinia bibendum nulla sed consectetur. Nullam id dolor id nibh
                  ultricies vehicula elit. Sed posuere consectetur est at lobortis.
                </p>
                <Menu direction="row">
                  <Link to="develop">
                    <Button label="Start Development" onClick={this._onClick} primary={true} />
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
