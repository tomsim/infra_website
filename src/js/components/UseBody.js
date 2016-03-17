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
            <p><i className="fa fa-caret-right"></i><a href="#downloads" className="scroll">Downloads</a></p>
            <p><i className="fa fa-caret-right"></i><a href="#userguides" className="scroll">User Guides</a></p>
            <p><i className="fa fa-caret-right"></i><a href="#references" className="scroll">References</a></p>
          </Menu>
          </Section>

          <Section align="start" justify="start" appCentered={true} >
            <a name="installing"/>
            <Headline>Installing</Headline>
            <p>OpenSwitch supports hardware based on <a href="http://onie.org">ONIE</a>. Below you will find the installation guide.
            OpenSwitch also provides an appliance Virtual Machine that is useful for testing and demo purposes.
            </p>
            <Box pad={{ horizontal: "small" }}>
              <Link to="documents/dev/quick-start-physical"><i className="fa fa-angle-right"></i>Quick Start Guide for Physical Switches</Link>
            </Box>
            <Box pad={{ horizontal: "small" }}>
              <Link to="documents/dev/quick-start-virtual"><i className="fa fa-angle-right"></i>Quick Start Guide for Virtual Appliance</Link>
            </Box>
          </Section>

          <Section colorIndex="neutral-6" justify="start" appCentered={true} pad={{vertical: "medium"}}>
            <a name="downloads"/>
            <Headline>Downloads</Headline>
            OpenSwitch is still on development, but you can download pre-release images from our archive:
            <ul>
              <li> Periodic images are built every 6 hours with the latest code from the master and release branches. </li>
              <li> Release images are tagged development check points. </li>
            </ul>
            <Box pad={{ horizontal: "small" }}>
              <a href="http://archive.openswitch.net/artifacts/" target="_blank"><i className="fa fa-angle-right"></i>OpenSwitch Download Archive</a>
            </Box>
          </Section>

          <Section justify="start" appCentered={true} pad={{vertical: "medium"}}>
            <a name="userguides"/>
            <Box direction="column">
              <Headline>User Guides</Headline>
              <Box direction="row">
                <Box direction="column" align="start" responsive={true}>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="documents/user/aaa_user_guide"><i className="fa fa-angle-right"></i>Authentication (AAA CLI)</Link>
                  </Box>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="documents/user/bgp_user_guide"><i className="fa fa-angle-right"></i>BGP</Link>
                  </Box>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="documents/user/config_persistence_user_guide"><i className="fa fa-angle-right"></i>Configuration Persistence</Link>
                  </Box>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="documents/user/dhcp_tftp_user_guide"><i className="fa fa-angle-right"></i>DHCP/TFTP Server</Link>
                  </Box>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="documents/user/layer3_user_guide"><i className="fa fa-angle-right"></i>L3 Interfaces, Static Routes, ECMP</Link>
                  </Box>
                </Box>
                <Box direction="column" align="start" responsive={true}>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="documents/user/lacp_user_guide"><i className="fa fa-angle-right"></i>Link Aggregation</Link>
                  </Box>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="documents/user/lldp_user_guide"><i className="fa fa-angle-right"></i>LLDP</Link>
                  </Box>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="documents/user/logrotate_user_guide"><i className="fa fa-angle-right"></i>Log Rotation</Link>
                  </Box>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="documents/user/mgmt_intf_user_guide"><i className="fa fa-angle-right"></i>Management Interface</Link>
                  </Box>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="documents/user/ntp_user_guide"><i className="fa fa-angle-right"></i>NTP</Link>
                  </Box>
                </Box>
                <Box direction="column" align="start" responsive={true}>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="documents/user/interface_user_guide"><i className="fa fa-angle-right"></i>Phy Interfaces</Link>
                  </Box>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="documents/user/ping_user_guide"><i className="fa fa-angle-right"></i>PING</Link>
                  </Box>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="documents/user/pluggable_modules_user_guide"><i className="fa fa-angle-right"></i>Pluggable Modules</Link>
                  </Box>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="documents/user/rest_api_user_guide"><i className="fa fa-angle-right"></i>REST API</Link>
                  </Box>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="documents/user/sftp_user_guide"><i className="fa fa-angle-right"></i>SFTP</Link>
                  </Box>
                </Box>
                <Box direction="column" align="start" responsive={true}>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="documents/user/system_user_guide"><i className="fa fa-angle-right"></i>System</Link>
                  </Box>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="documents/user/traceroute_user_guide"><i className="fa fa-angle-right"></i>Traceroute</Link>
                  </Box>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="documents/user/vlan_user_guide"><i className="fa fa-angle-right"></i>VLANs</Link>
                  </Box>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="documents/user/webui_user_guide"><i className="fa fa-angle-right"></i>Web UI</Link>
                  </Box>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="documents/user/autoprovision_user_guide"><i className="fa fa-angle-right"></i>Zero Touch</Link>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Section>

          <Section colorIndex="neutral-6" justify="start" appCentered={true} pad={{vertical: "medium"}}>
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
                    <Link to="/documents/user/ntp_cli"><i className="fa fa-angle-right"></i>NTP</Link>
                  </Box>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="/documents/user/interface_cli"><i className="fa fa-angle-right"></i>Phy Interfaces</Link>
                  </Box>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="/documents/user/ping_cli"><i className="fa fa-angle-right"></i>PING</Link>
                  </Box>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="/documents/user/sftp_cli"><i className="fa fa-angle-right"></i>SFTP</Link>
                  </Box>
                </Box>
                <Box direction="column" align="start" responsive={true}>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="/documents/user/static-routes_cli"><i className="fa fa-angle-right"></i>Static Routes</Link>
                  </Box>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="/documents/user/system_cli"><i className="fa fa-angle-right"></i>System</Link>
                  </Box>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="/documents/user/traceroute_cli"><i className="fa fa-angle-right"></i>Traceroute</Link>
                  </Box>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="/documents/user/VLAN_cli"><i className="fa fa-angle-right"></i>VLANs</Link>
                  </Box>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="/documents/user/vrf_cli"><i className="fa fa-angle-right"></i>VRF</Link>
                  </Box>
                </Box>
                <Box direction="column" align="start" responsive={true}>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="/documents/user/autoprovision_CLI"><i className="fa fa-angle-right"></i>Zero Touch</Link>
                  </Box>
                </Box>
                </Box>

                <b>REST API</b>
                <Box pad={{ horizontal: "small" }}>
                  <a href="http://api.openswitch.net/rest/dist/index.html" target="_blank"><i className="fa fa-angle-right"></i>REST APIs</a>
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
