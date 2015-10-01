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
          <p><i className="fa fa-caret-right"></i><a href="#gettingstart" className="scroll">Getting Started</a></p>
          <p><i className="fa fa-caret-right"></i><a href="#architecture" className="scroll">Architecture</a></p>
          <p><i className="fa fa-caret-right"></i><a href="#testing" className="scroll">Testing</a></p>
          <p><i className="fa fa-caret-right"></i><a href="#management" className="scroll">Defect Management</a></p>
        </Menu>
        </Section>

        <Section justify="start" appCentered={true} pad={{vertical: "medium"}}>
          <a name="gettingstart"/>
          <Box direction="column">
            <Headline>Getting Started</Headline>
            <p><strong>
              Setup, Build and Run OpenSwitch</strong>
            </p>
            <Box direction="row">
              <Box direction="column" align="start" responsive={true}>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="documents/dev/prerequisites"><i className="fa fa-angle-right"></i>Pre-requisites</Link>
                  </Box>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="documents/dev/quick-start"><i className="fa fa-angle-right"></i>Quick Start Guide using Vagrant</Link>
                  </Box>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="documents/dev/step-by-step-guide"><i className="fa fa-angle-right"></i>Step-by-Step Guide</Link>
                  </Box>
                </Box>

            </Box>
          </Box>
          <Box direction="column">
            <p><strong>
              Develop on OpenSwitch</strong>
            </p>
            <Box direction="row">
              <Box direction="column" align="start" responsive={true}>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="documents/dev/changing-openswitch-code"><i className="fa fa-angle-right"></i>Changing OpenSwitch Code</Link>
                  </Box>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="documents/dev/ui-guidelines"><i className="fa fa-angle-right"></i>User Interface Guidelines</Link>
                  </Box>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="documents/dev/how-to-debug"><i className="fa fa-angle-right"></i>Debugging</Link>
                  </Box>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="documents/dev/code-repositories"><i className="fa fa-angle-right"></i>Code Repositories</Link>
                  </Box>
                </Box>
            </Box>
          </Box>

          <Box direction="column">
            <p><strong>
              Contribute to OpenSwitch</strong>
            </p>
            <Box direction="row">
              <Box direction="column" align="start" responsive={true}>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="documents/dev/contribute-code"><i className="fa fa-angle-right"></i>How to Contribute to the Code</Link>
                  </Box>
                </Box>
            </Box>
          </Box>


        </Section>

        <Section colorIndex="neutral-6" justify="start" appCentered={true} pad={{vertical: "medium"}}>
          <a name="architecture"/>
          <Box direction="column">
            <Headline>Architecture</Headline>
            <Box direction="row">
              <Box direction="column" align="start" responsive={true}>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/user/architecture"><i className="fa fa-angle-right"></i>OpenSwitch Architecture</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/user/porting"><i className="fa fa-angle-right"></i>Porting OpenSwitch</Link>
                </Box>
              </Box>
            </Box>
            <p></p>
            <b>Feature Design</b>
            <Box direction="row">
              <Box direction="column" align="start" responsive={true}>
                <Box pad={{ horizontal: "small" }}>
                    <span>Boot Up</span>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/user/interfaces_design"><i className="fa fa-angle-right"></i>PHY Interfaces</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <span>Temp and Fan Management</span>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/user/led_design"><i className="fa fa-angle-right"></i>LED</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <span>Power Management</span>
                </Box>
              </Box>
              <Box direction="column" align="start" responsive={true}>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/user/pluggable_modules_design"><i className="fa fa-angle-right"></i>Pluggable Modules</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <span>VLANs</span>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <span>LLDP</span>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <span>Link Aggregation</span>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <span>L3 Interfaces, Static Routes, ECMP</span>
                </Box>
              </Box>
              <Box direction="column" align="start" responsive={true}>
                <Box pad={{ horizontal: "small" }}>
                  <span>BGP</span>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                 <Link to="documents/user/mgmt_intf_design"><i className="fa fa-angle-right"></i>Management Interface</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <span>Authentication</span>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <span>Log Rotation</span>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <span>Configuration Persistence</span>
                </Box>
              </Box>
              <Box direction="column" align="start" responsive={true}>
                <Box pad={{ horizontal: "small" }}>
                  <span>Web UI</span>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <span>REST and Declarative Config</span>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <span>Zero Touch</span>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <span>Check_MK</span>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <span>DHCP/TFTP Server</span>
                </Box>
              </Box>
             </Box>
            <p></p>
            <b>Components Design</b>
            <Box direction="row">
              <Box direction="column" align="start" responsive={true}>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="/documents/dev/ops-aaa-utils/DESIGN"><i className="fa fa-angle-right"></i>AAA</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <span>ARP Manager Daemon</span>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <span>Buffer Monitor Daemon</span>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <span>Configuration Daemon</span>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <span>Check_MK</span>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <span>CLI Daemon</span>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <span>Configuration Files for AS5712</span>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <span>Configuration Files for Simulator</span>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="/documents/dev/ops-config-yaml/DESIGN"><i className="fa fa-angle-right"></i>Library to read config yaml files</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <span>DHCP/TFTP Server</span>
                </Box>
              </Box>
              <Box direction="column" align="start" responsive={true}>
                <Box pad={{ horizontal: "small" }}>
                  <span>Fan Daemon</span>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <span>Feature Test Framework</span>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/user/interfaces_design"><i className="fa fa-angle-right"></i>Interface Daemon</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <span>LACP Daemon</span>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <span>LED Daemon</span>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <span>LLDP Daemon</span>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <span>Management Interface</span>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="/documents/dev/ops-openvswitch/DESIGN"><i className="fa fa-angle-right"></i>OpenVswitch Daemon</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <span>Pluggable Module Daemon</span>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <span>Layer3 Port Daemon</span>
                </Box>
              </Box>
              <Box direction="column" align="start" responsive={true}>
                <Box pad={{ horizontal: "small" }}>
                  <span>Power Daemon</span>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <span>Quagga (BGP and Zebra)</span>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <span>REST Daemon</span>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <span>OpenNSL Daemon</span>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <span>Temperature Daemon</span>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <span>Utility Library</span>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <span>VLAN Daemon</span>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <span>Virtual Switch Image (Test Framework)</span>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <span>Web UI</span>
                </Box>
              </Box>
             </Box>
            </Box>

        </Section>

        <Section colorIndex="neutral-6" justify="start" appCentered={true} pad={{vertical: "medium"}}>
          <a name="testing"/>
          <Box direction="column">
            <Headline>Testing</Headline>
            <Box direction="row">
            <Box direction="column" align="start" responsive={true}>
              <Box pad={{ horizontal: "small" }}>
                <Link to="documents/dev/whitebox-and-feature-tests"><i className="fa fa-angle-right"></i>Whitebox and Feature Tests</Link>
              </Box>
              <Box pad={{ horizontal: "small" }}>
                <Link to="documents/dev/writing-a-feature-test-case"><i className="fa fa-angle-right"></i>How To: Write Tests using Virtual Testing Framework</Link>
              </Box>
              <Box pad={{ horizontal: "small" }}>
                <Link to="documents/dev/cit"><i className="fa fa-angle-right"></i>Continuous Integration Testing Infrastructure</Link>
              </Box>
            </Box>
            </Box>
            <p></p>
            <b>Feature Test Cases</b>
            <Box direction="row">
              <Box direction="column" align="start" responsive={true}>
                <Box pad={{ horizontal: "small" }}>
                  <span>ARP</span>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <span>Authentication (AAA CLI)</span>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <span>BGP</span>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <span>Boot Up</span>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <span>Configuration Persistence</span>
                </Box>
              </Box>
              <Box direction="column" align="start" responsive={true}>
                <Box pad={{ horizontal: "small" }}>
                  <span>DHCP/TFTP Server</span>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <span>ECMP</span>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <span>InterVLAN Routing</span>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                    <span>L3 Interfaces</span>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <span>Link Aggregation</span>
                </Box>
              </Box>
              <Box direction="column" align="start" responsive={true}>
                <Box pad={{ horizontal: "small" }}>
                  <span>LLDP</span>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <span>Log Rotation</span>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <span>Management Interface</span>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <span>Phy Interfaces</span>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <span>Pluggable Modules</span>
                </Box>
              </Box>
              <Box direction="column" align="start" responsive={true}>
                <Box pad={{ horizontal: "small" }}>
                  <span>Static Routes</span>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <span>VLANs</span>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <span>VRF</span>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <span>Web UI</span>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <span>Zero Touch</span>
                </Box>
              </Box>
             </Box>
            <p></p>
          </Box>
        </Section>
        <Section justify="start" appCentered={true} pad={{vertical: "medium"}}>
          <a name="management"/>
          <Box direction="column">
            <Headline>Defect Management</Headline>
            <Box direction="row">
            <Box direction="column" align="start" responsive={true}>
              <Box pad={{ horizontal: "small" }}>
                <a href="https://tree.taiga.io/project/openswitch/issues?page=1" target="_blank"><i className="fa fa-angle-right"></i>Defect management tool</a>
              </Box>
              <Box pad={{ horizontal: "small" }}>
                <Link to="documents/dev/defect-management"><i className="fa fa-angle-right"></i>Understanding OpenSwitch defect management process</Link>
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
