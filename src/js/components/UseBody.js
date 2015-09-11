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

    _onClick: function () {
      //no-op
    },

    render: function() {
      return (
        <Article>

          <Header float={true} menuMedia="lap-and-up" />

          <Section backgroundImage={'url(img/openswitch-menu-background.png)'}
          appCentered={true} justify="center" align="center"
          textCentered={true} pad={{vertical: "medium"}}>
          <p></p>
          </Section>

          <Section colorIndex="neutral-3"
          appCentered={true} align="end"
          textCentered={true} pad={{vertical: "none"}}>
          <Menu direction="row" align="end" responsive={false} >
            <p><i className="fa fa-caret-right"></i><a href="#introduction" className="scroll">Introduction</a></p>
            <p><i className="fa fa-caret-right"></i><a href="#installing" className="scroll">Installing</a></p>
            <p><i className="fa fa-caret-right"></i><a href="#features" className="scroll">Features</a></p>
            <p><i className="fa fa-caret-right"></i><a href="#references" className="scroll">References</a></p>
            <p><i className="fa fa-caret-right"></i><a href="#downloads" className="scroll">Downloads</a></p>
          </Menu>
          </Section>

          <Section align="start" justify="left" appCentered={true} pad={{vertical: "medium"}}>
            <a name="introduction"/>
            <Headline>Using OpenSwitch</Headline>
            <p>
              Welcome to OpenSwitch, here you will learn how to use OpenSwitch.
            </p>
          </Section>

          <Section colorIndex="neutral-6" justify="left" appCentered={true} pad={{vertical: "medium"}}>
            <a name="installing"/>
            <Box direction="column">
              <Headline>Installing</Headline>
              <p>
                High level discussion on installation methods, link to hardware compatibility and links to pages on ONIE and containers
              </p>
              <b>More Information</b>
              <Box direction="row" align="start" responsive={true}>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/installing"><i className="fa fa-angle-right"></i>Installing on ONIE Switch</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/installing"><i className="fa fa-angle-right"></i>Running a container</Link>
                </Box>
              </Box>
            </Box>
          </Section>

          <Section justify="left" appCentered={true} pad={{vertical: "medium"}}>
            <a name="features"/>
            <Box direction="column">
              <Headline>Features</Headline>
              <p>
                "How-to" detailed usage/configuration instructions
              </p>
              <b>More Information</b>
              <Box direction="row">
              <Box direction="column" align="start" responsive={true}>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/installing"><i className="fa fa-angle-right"></i>Life Cycle</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/installing"><i className="fa fa-angle-right"></i>Out-of-band connectivity</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/installing"><i className="fa fa-angle-right"></i>Logging</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/installing"><i className="fa fa-angle-right"></i>Switch interfaces</Link>
                </Box>
              </Box>
              <Box direction="column" align="start" responsive={true}>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/installing"><i className="fa fa-angle-right"></i>VLANs</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/installing"><i className="fa fa-angle-right"></i>Link Aggregation</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/installing"><i className="fa fa-angle-right"></i>Rounting</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/installing"><i className="fa fa-angle-right"></i>BGP</Link>
                </Box>
              </Box>
              <Box direction="column" align="start" responsive={true}>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/installing"><i className="fa fa-angle-right"></i>LLDP</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/installing"><i className="fa fa-angle-right"></i>DHCP Server</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/installing"><i className="fa fa-angle-right"></i>TFTP Server</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/installing"><i className="fa fa-angle-right"></i>BGP</Link>
                </Box>
              </Box>
              </Box>
            </Box>
          </Section>

          <Section colorIndex="neutral-6" justify="left" appCentered={true} pad={{vertical: "medium"}}>
            <a name="references"/>
            <Box direction="column">
              <Headline>References</Headline>
              <p>
                Reference documentation
              </p>
              <b>More Information</b>
              <Box direction="row" align="start" responsive={true}>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/installing"><i className="fa fa-angle-right"></i>CLI Reference</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/installing"><i className="fa fa-angle-right"></i>REST API Reference</Link>
                </Box>
              </Box>
            </Box>
          </Section>

          <Section justify="left" appCentered={true} pad={{vertical: "medium"}}>
            <a name="downloads"/>
            <Box direction="column">
              <Headline>Downloads</Headline>
              <p>
                Downloads
              </p>
              <b>More Information</b>
              <Box direction="row" align="start" responsive={true}>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/installing"><i className="fa fa-angle-right"></i>Downloads for AS5712</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/installing"><i className="fa fa-angle-right"></i>Downloads for Simulation</Link>
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
