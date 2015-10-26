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
              <Link to="documents/dev/deploy-to-physical-switch"><i className="fa fa-angle-right"></i>Installing and Booting OpenSwitch</Link>
            </Box>
          </Section>

          <Section colorIndex="neutral-6" justify="start" appCentered={true} pad={{vertical: "medium"}}>
            <a name="userguides"/>
            <Box direction="column">
              <Headline>User Guides</Headline>
              <Box direction="row">
                <Box direction="column" align="start" responsive={true}>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="documents/user/aaa_user_guide"><i className="fa fa-angle-right"><i>Authentication (AAA CLI)</Link>
                  </Box>
                  <Box pad={{ horizontal: "small" }}>
                    <span>BGP</span>
                  </Box>
                  <Box pad={{ horizontal: "small" }}>
                    <span>Boot Up</span>
                  </Box>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="documents/user/config_persistence_user_guide"><i className="fa fa-angle-right"></i>Configuration Persistence</Link>
                  </Box>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="documents/user/dhcp_tftp_user_guide"><i className="fa fa-angle-right"></i>DHCP/TFTP Server</Link>
                  </Box>
                </Box>
                <Box direction="column" align="start" responsive={true}>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="documents/user/layer3_user_guide"><i className="fa fa-angle-right"></i>L3 Interfaces, Static Routes, ECMP</Link>
                  </Box>
                  <Box pad={{ horizontal: "small" }}>
                    <span>Link Aggregation</span>
                  </Box>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="documents/user/lldp_user_guide"><i className="fa fa-angle-right"></i>LLDP</Link>
                  </Box>
                  <Box pad={{ horizontal: "small" }}>
                    <span>Log Rotation</span>
                  </Box>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="documents/user/mgmt_intf_user_guide"><i className="fa fa-angle-right"></i>Management Interface</Link>
                  </Box>
                </Box>
                <Box direction="column" align="start" responsive={true}>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="documents/user/interface_user_guide"><i className="fa fa-angle-right"></i>Phy Interfaces</Link>
                  </Box>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="documents/user/pluggable_modules_user_guide"><i className="fa fa-angle-right"></i>Pluggable Modules</Link>
                  </Box>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="documents/user/rest_api_user_guide"><i className="fa fa-angle-right"></i>REST API</Link>
                  </Box>
                  <Box pad={{ horizontal: "small" }}>
                    <span>System</span>
                  </Box>
                  <Box pad={{ horizontal: "small" }}>
                    <span>VLANs</span>
                  </Box>
                </Box>
                <Box direction="column" align="start" responsive={true}>
                  <Box pad={{ horizontal: "small" }}>
                    <span>VRF</span>
                  </Box>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="documents/user/webui_user_guide"><i className="fa fa-angle-right"></i>Web UI</Link>
                  </Box>
                  <Box pad={{ horizontal: "small" }}>
                    <span>Zero Touch</span>
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
                    <Link to="/documents/user/arp_cli"><i className="fa fa-angle-right"></i>ARP</Link>
                  </Box>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="/documents/user/AAA_cli"><i className="fa fa-angle-right"></i>Authentication (AAA CLI)</Link>
                  </Box>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="/documents/user/bgp_cli"><i className="fa fa-angle-right"></i>BGP</Link>
                  </Box>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="/documents/user/config_persistence_CLI"><i className="fa fa-angle-right"></i>Configuration Persistence</Link>
                  </Box>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="/documents/user/dhcp_tftp_cli"><i className="fa fa-angle-right"></i>DHCP/TFTP Server</Link>
                  </Box>
                </Box>
                <Box direction="column" align="start" responsive={true}>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="/documents/user/layer3_ecmp_cli"><i className="fa fa-angle-right"></i>ECMP</Link>
                  </Box>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="/documents/user/layer3_interface_cli"><i className="fa fa-angle-right"></i>L3 Interfaces</Link>
                  </Box>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="/documents/user/lacp_cli"><i className="fa fa-angle-right"></i>Link Aggregation</Link>
                  </Box>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="/documents/user/lldp_cli"><i className="fa fa-angle-right"></i>LLDP</Link>
                  </Box>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="/documents/user/Logrotate_cli"><i className="fa fa-angle-right"></i>Log Rotation</Link>
                  </Box>
                </Box>
                <Box direction="column" align="start" responsive={true}>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="/documents/user/mgmt_intf_cli"><i className="fa fa-angle-right"></i>Management Interface</Link>
                  </Box>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="/documents/user/interface_cli"><i className="fa fa-angle-right"></i>Phy Interfaces</Link>
                  </Box>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="/documents/user/static-routes_cli"><i className="fa fa-angle-right"></i>Static Routes</Link>
                  </Box>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="/documents/user/system_cli"><i className="fa fa-angle-right"></i>System</Link>
                  </Box>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="/documents/user/VLAN_cli"><i className="fa fa-angle-right"></i>VLANs</Link>
                  </Box>
                </Box>
                <Box direction="column" align="start" responsive={true}>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="/documents/user/vrf_cli"><i className="fa fa-angle-right"></i>VRF</Link>
                  </Box>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="/documents/user/autoprovision_CLI"><i className="fa fa-angle-right"></i>Zero Touch</Link>
                  </Box>
                </Box>
                </Box>
                <p></p>
                <Box pad={{ horizontal: "small" }}>
                  <a href="http://api.openswitch.net/rest/dist/index.html" target="_blank"><i className="fa fa-angle-right"></i>REST APIs</a>
                </Box>
            </Box>
          </Section>

          <Section colorIndex="neutral-6" justify="start" appCentered={true} pad={{vertical: "medium"}}>
            <a name="downloads"/>
            <Box direction="column">
              <Headline>Downloads</Headline>
              <Box direction="row">
                <Box direction="column" align="start" responsive={true}>
                  <Box direction="column" align="start" responsive={true}>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/user/hardware-compatibility"><i className="fa fa-angle-right"></i>Hardware Compatibility</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <a href="http://archive.openswitch.net/artifacts/" target="_blank"><i className="fa fa-angle-right"></i>OpenSwitch Download Archive</a>
                </Box>
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
