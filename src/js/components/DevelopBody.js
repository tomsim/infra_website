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
          <p><i className="fa fa-caret-right"></i><a href="#basics" className="scroll">Basics</a></p>
          <p><i className="fa fa-caret-right"></i><a href="#architecture" className="scroll">Architecture</a></p>
          <p><i className="fa fa-caret-right"></i><a href="#porting" className="scroll">Porting</a></p>
          <p><i className="fa fa-caret-right"></i><a href="#testing" className="scroll">Testing</a></p>
        </Menu>
        </Section>

        <Section justify="start" appCentered={true} pad={{vertical: "medium"}}>
          <a name="basics"/>
          <Box direction="column">
            <Headline>Basics</Headline>
            <p>
              High level landing page explain the contents of Getting started section with appropriate links
            </p>
            <b>More Information</b>
            <Box direction="row">
            <Box direction="column" align="start" responsive={true}>
              <Box pad={{ horizontal: "small" }}>
                <Link to="documents/dev/development-environment"><i className="fa fa-angle-right"></i>Developer Environment</Link>
              </Box>
              <Box pad={{ horizontal: "small" }}>
                <Link to="documents/dev/how-to-debug"><i className="fa fa-angle-right"></i>Debugging</Link>
              </Box>
              <Box pad={{ horizontal: "small" }}>
                <Link to="documents/dev/commit-code"><i className="fa fa-angle-right"></i>Commiting Code</Link>
              </Box>
            </Box>
            <Box direction="column" align="start" responsive={true}>
              <Box pad={{ horizontal: "small" }}>
                <Link to="documents/dev/quick-start"><i className="fa fa-angle-right"></i>Vagrant</Link>
              </Box>
              <Box pad={{ horizontal: "small" }}>
                <Link to="documents/dev/linux-setup"><i className="fa fa-angle-right"></i>Custom Linux</Link>
              </Box>
              <Box pad={{ horizontal: "small" }}>
                <Link to="documents/dev/contribute-code"><i className="fa fa-angle-right"></i>Code Repository</Link>
              </Box>
            </Box>
          </Box>
          </Box>
        </Section>

        <Section colorIndex="neutral-6" justify="start" appCentered={true} pad={{vertical: "medium"}}>
          <a name="architecture"/>
          <Box direction="column">
            <Headline>Architecture</Headline>
            <p>
              High-level architecture, components, detailed feature & design information
            </p>
            <b>More Information</b>
            <Box direction="row">
              <Box direction="column" align="start" responsive={true}>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/common-component"><i className="fa fa-angle-right"></i>Projects configuration (gerrit, zuul, jenkins, etc)</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/common-component"><i className="fa fa-angle-right"></i>Puppet Gerrit Module</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/common-component"><i className="fa fa-angle-right"></i>Puppet Iptables Module</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/common-component"><i className="fa fa-angle-right"></i>Puppet Jenkins Module</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/common-component"><i className="fa fa-angle-right"></i>Puppet SSH Module</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/common-component"><i className="fa fa-angle-right"></i>Infrastructure System Configuration</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/common-component"><i className="fa fa-angle-right"></i>AAA</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/common-component"><i className="fa fa-angle-right"></i>ARP Manager Daemon</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/common-component"><i className="fa fa-angle-right"></i>Configuration files for AS5712</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/common-component"><i className="fa fa-angle-right"></i>Buffer Monitor Daemon</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/common-component"><i className="fa fa-angle-right"></i>Configuration Daemon</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/common-component"><i className="fa fa-angle-right"></i>CLI daemon</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/common-component"><i className="fa fa-angle-right"></i>Library to read config yaml files</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/common-component"><i className="fa fa-angle-right"></i>Dhcp and tftp server</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/common-component"><i className="fa fa-angle-right"></i>Fan Daemon</Link>
                </Box>

              </Box>
              <Box direction="column" align="start" responsive={true}>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/common-component"><i className="fa fa-angle-right"></i>OpenHalon Governance</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/common-component"><i className="fa fa-angle-right"></i>OpenHalon Utility Library</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/common-component"><i className="fa fa-angle-right"></i>Interface Daemon</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/common-component"><i className="fa fa-angle-right"></i>Layer3 Port Daemon</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/common-component"><i className="fa fa-angle-right"></i>LACP Daemon</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/common-component"><i className="fa fa-angle-right"></i>LED Daemon</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/common-component"><i className="fa fa-angle-right"></i>LLDP Daemon</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/common-component"><i className="fa fa-angle-right"></i>OpenHalon Project</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/common-component"><i className="fa fa-angle-right"></i>OpenVswitch Daemon</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/common-component"><i className="fa fa-angle-right"></i>OVSDB IDL</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/common-component"><i className="fa fa-angle-right"></i>Halon Broadcom OVS Plugin</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/common-component"><i className="fa fa-angle-right"></i>Halon Simulator OVS Plugin L2</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/common-component"><i className="fa fa-angle-right"></i>Pluggable Module Daemon</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/common-component"><i className="fa fa-angle-right"></i>Power Daemon</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/common-component"><i className="fa fa-angle-right"></i>REST Daemon</Link>
                </Box>

              </Box>
              <Box direction="column" align="start" responsive={true}>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/common-component"><i className="fa fa-angle-right"></i>Configuration files for Simulator</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/common-component"><i className="fa fa-angle-right"></i>System Daemon</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/common-component"><i className="fa fa-angle-right"></i>Temparature Daemon</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/common-component"><i className="fa fa-angle-right"></i>VLAN Daemon</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/common-component"><i className="fa fa-angle-right"></i>LACP Daemon</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/common-component"><i className="fa fa-angle-right"></i>Virtual Switch Image (Test Framework)</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/common-component"><i className="fa fa-angle-right"></i>LLDP Daemon</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/common-component"><i className="fa fa-angle-right"></i>Web UI</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/common-component"><i className="fa fa-angle-right"></i>Zero touch components</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/common-component"><i className="fa fa-angle-right"></i>Check_MK</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/common-component"><i className="fa fa-angle-right"></i>DHCP/TFTP server</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/common-component"><i className="fa fa-angle-right"></i>Quagga - BGP</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/common-component"><i className="fa fa-angle-right"></i>Quagga - Zebra</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/common-component"><i className="fa fa-angle-right"></i>Feature Test Framework</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/common-component"><i className="fa fa-angle-right"></i>CLI daemon</Link>
                </Box>
              </Box>
             </Box>
            </Box>

        </Section>

        <Section justify="start" appCentered={true} pad={{vertical: "medium"}}>
          <a name="porting"/>
          <Box direction="column">
            <Headline>Porting</Headline>
            <p>
              Lorem ipsum.
            </p>
            <b>More Information</b>
            <Box direction="row" align="start" responsive={true}>
              <Box pad={{ horizontal: "small" }}>
                <Link to="documents/dev/porting-new-platform"><i className="fa fa-angle-right"></i>Porting to a new platform</Link>
              </Box>
              <Box pad={{ horizontal: "small" }}>
                <Link to="documents/dev/porting-new-asic"><i className="fa fa-angle-right"></i>Porting to a new ASIC</Link>
              </Box>
            </Box>
          </Box>
        </Section>

        <Section colorIndex="neutral-6" justify="start" appCentered={true} pad={{vertical: "medium"}}>
          <a name="testing"/>
          <Box direction="column">
            <Headline>Testing</Headline>
            <p>
              Testing
            </p>
            <b>More Information</b>
            <Box direction="row" align="start" responsive={true}>
              <Box pad={{ horizontal: "small" }}>
                <Link to="documents/dev/testing-framework"><i className="fa fa-angle-right"></i>Testing Framework</Link>
              </Box>
              <Box pad={{ horizontal: "small" }}>
                <Link to="documents/dev/cit"><i className="fa fa-angle-right"></i>CIT</Link>
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
