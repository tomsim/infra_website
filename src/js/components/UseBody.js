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
            <p><i className="fa fa-caret-right"></i><a href="#userguides" className="scroll">User Guides</a></p>
            <p><i className="fa fa-caret-right"></i><a href="#references" className="scroll">References</a></p>
            <p><i className="fa fa-caret-right"></i><a href="#downloads" className="scroll">Downloads</a></p>
          </Menu>
          </Section>

          <Section align="start" justify="start" appCentered={true} pad={{vertical: "medium"}}>
            <a name="installing"/>
            <Headline>Installing</Headline>
            <Box pad={{ horizontal: "small" }}>
              <Link to="documents/user/installing"><i className="fa fa-angle-right"></i>Installing and Booting OpenSwitch</Link>
            </Box>
          </Section>

          <Section colorIndex="neutral-6" justify="start" appCentered={true} pad={{vertical: "medium"}}>
            <a name="userguides"/>
            <Box direction="column">
              <Headline>User Guides</Headline>
              <Box direction="row">
                <Box direction="column" align="start" responsive={true}>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="documents/user/user-features-guides-place-holder"><i className="fa fa-angle-right"></i>Peripherals</Link>
                  </Box>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="documents/user/user-features-guides-place-holder"><i className="fa fa-angle-right"></i>Link Aggregation</Link>
                  </Box>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="documents/user/user-features-guides-place-holder"><i className="fa fa-angle-right"></i>Management Interface</Link>
                  </Box>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="documents/user/user-features-guides-place-holder"><i className="fa fa-angle-right"></i>Config Persistance</Link>
                  </Box>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="documents/user/user-features-guides-place-holder"><i className="fa fa-angle-right"></i>Automatic Provisioning</Link>
                  </Box>
                </Box>
                <Box direction="column" align="start" responsive={true}>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="documents/user/user-features-guides-place-holder"><i className="fa fa-angle-right"></i>VLANs</Link>
                  </Box>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="documents/user/user-features-guides-place-holder"><i className="fa fa-angle-right"></i>L3 support</Link>
                  </Box>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="documents/user/user-features-guides-place-holder"><i className="fa fa-angle-right"></i>Authentication</Link>
                  </Box>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="documents/user/user-features-guides-place-holder"><i className="fa fa-angle-right"></i>REST</Link>
                  </Box>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="documents/user/user-features-guides-place-holder"><i className="fa fa-angle-right"></i>Check_MK</Link>
                  </Box>
                </Box>
                <Box direction="column" align="start" responsive={true}>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="documents/user/user-features-guides-place-holder"><i className="fa fa-angle-right"></i>LLDP</Link>
                  </Box>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="documents/user/user-features-guides-place-holder"><i className="fa fa-angle-right"></i>BGP</Link>
                  </Box>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="documents/user/user-features-guides-place-holder"><i className="fa fa-angle-right"></i>Logging</Link>
                  </Box>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="documents/user/user-features-guides-place-holder"><i className="fa fa-angle-right"></i>DHCP/TFTP server</Link>
                  </Box>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="documents/user/user-features-guides-place-holder"><i className="fa fa-angle-right"></i>WebUI</Link>
                  </Box>

                </Box>
               </Box>
            </Box>
          </Section>

          <Section  justify="start" appCentered={true} pad={{vertical: "medium"}}>
            <a name="references"/>
            <Box direction="column">
              <Headline>References</Headline>
              <b>Command Reference</b>
              <Box direction="row">
                <Box direction="column" align="start" responsive={true}>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="documents/user/user-features-common-place-holder"><i className="fa fa-angle-right"></i>Peripherals</Link>
                  </Box>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="documents/user/user-features-common-place-holder"><i className="fa fa-angle-right"></i>Link Aggregation</Link>
                  </Box>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="documents/user/user-features-common-place-holder"><i className="fa fa-angle-right"></i>Management Interface</Link>
                  </Box>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="documents/user/user-features-common-place-holder"><i className="fa fa-angle-right"></i>Config Persistance</Link>
                  </Box>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="documents/user/user-features-common-place-holder"><i className="fa fa-angle-right"></i>Automatic Provisioning</Link>
                  </Box>
                </Box>
                <Box direction="column" align="start" responsive={true}>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="documents/user/user-features-common-place-holder"><i className="fa fa-angle-right"></i>VLANs</Link>
                  </Box>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="documents/user/user-features-common-place-holder"><i className="fa fa-angle-right"></i>L3 support</Link>
                  </Box>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="documents/user/user-features-common-place-holder"><i className="fa fa-angle-right"></i>Authentication</Link>
                  </Box>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="documents/user/user-features-common-place-holder"><i className="fa fa-angle-right"></i>REST</Link>
                  </Box>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="documents/user/user-features-common-place-holder"><i className="fa fa-angle-right"></i>Check_MK</Link>
                  </Box>
                </Box>
                <Box direction="column" align="start" responsive={true}>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="documents/user/user-features-common-place-holder"><i className="fa fa-angle-right"></i>LLDP</Link>
                  </Box>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="documents/user/user-features-common-place-holder"><i className="fa fa-angle-right"></i>BGP</Link>
                  </Box>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="documents/user/user-features-common-place-holder"><i className="fa fa-angle-right"></i>Logging</Link>
                  </Box>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="documents/user/user-features-common-place-holder"><i className="fa fa-angle-right"></i>DHCP/TFTP server</Link>
                  </Box>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="documents/user/user-features-common-place-holder"><i className="fa fa-angle-right"></i>WebUI</Link>
                  </Box>
                </Box>
                </Box>
                <p></p>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/user/rest-api-reference"><i className="fa fa-angle-right"></i>REST APIs</Link>
                </Box>
            </Box>
          </Section>

          <Section colorIndex="neutral-6" justify="start" appCentered={true} pad={{vertical: "medium"}}>
            <a name="downloads"/>
            <Box direction="column">
              <Headline>Downloads</Headline>
              <b>Download OpenSwitch for:</b>
              <Box direction="row" align="start" responsive={true}>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/user/downloads"><i className="fa fa-angle-right"></i>Accton AS5712</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/user/download-simulation"><i className="fa fa-angle-right"></i>Virtual Switch</Link>
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
