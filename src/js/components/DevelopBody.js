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
                    <Link to="documents/dev/prerequisites"><i className="fa fa-angle-right"></i>Prerequisites</Link>
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
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="documents/dev/platform_porting_guide"><i className="fa fa-angle-right"></i>Porting a new platform to OpenSwitch</Link>
                  </Box>
                </Box>
            </Box>
          </Box>

          <Box direction="column">
            <p><strong>
              System Infrastructure How-to Guides for Development</strong>
            </p>
            <Box direction="row">
              <Box direction="column" align="start" responsive={true}>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="documents/user/auditloghowtoguide"><i className="fa fa-angle-right"></i>Audit Log</Link>
                  </Box>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="documents/user/cli_developer_guide"><i className="fa fa-angle-right"></i>CLI</Link>
                  </Box>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="documents/user/custom_validators_design"><i className="fa fa-angle-right"></i>Custom Validators</Link>
                  </Box>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="documents/user/diagnostic_dev_guide"><i className="fa fa-angle-right"></i>Diagnostics</Link>
                  </Box>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="documents/user/event_logs_dev_guide"><i className="fa fa-angle-right"></i>Event Log</Link>
                  </Box>
                </Box>
                <Box direction="column" align="start" responsive={true}>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="documents/user/ovsdb_improvements_how_to_guide"><i className="fa fa-angle-right"></i>OVSDB Improvements</Link>
                  </Box>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="documents/dev/how-to-process-isolation"><i className="fa fa-angle-right"></i>Process Isolation</Link>
                  </Box>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="documents/user/rbachowtoguide"><i className="fa fa-angle-right"></i>RBAC</Link>
                  </Box>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="documents/user/show-tech_dev_guide"><i className="fa fa-angle-right"></i>Show Tech</Link>
                  </Box>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="documents/user/how_to_support_a_mib"><i className="fa fa-angle-right"></i>SNMP</Link>
                  </Box>
                </Box>
                <Box direction="column" align="start" responsive={true}>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="documents/user/source_interface_design"><i className="fa fa-angle-right"></i>Source IP selection</Link>
                  </Box>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="documents/user/show_vlog_dev_guide"><i className="fa fa-angle-right"></i>Vlog</Link>
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
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="documents/user/ops-openvswitch-how-to-contribute"><i className="fa fa-angle-right"></i>Contributing to Open vSwitch inside OpenSwitch</Link>
                  </Box>
                  <Box pad={{ horizontal: "small" }}>
                    <Link to="documents/dev/adding-web-ui-content"><i className="fa fa-angle-right"></i>Adding Web UI Content</Link>
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
                  <Link to="documents/user/access_list_design"><i className="fa fa-angle-right"></i>Access Control Lists (ACL)</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/user/bgp_feature_design"><i className="fa fa-angle-right"></i>BGP</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/user/broadview_design"><i className="fa fa-angle-right"></i>BroadView</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/user/checkmk-agent-design"><i className="fa fa-angle-right"></i>Check_MK Agent</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/user/copp_design"><i className="fa fa-angle-right"></i>Control Plane Policing (COPP)</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/user/copy_core-dump_design_doc"><i className="fa fa-angle-right"></i>Core Dump</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/user/daemon_coredump_design"><i className="fa fa-angle-right"></i>Daemon Core Dump</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/user/dhcp_tftp_design"><i className="fa fa-angle-right"></i>DHCP/TFTP Server</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/user/diagnostic_design"><i className="fa fa-angle-right"></i>Diagnostics</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/user/event_logging_design"><i className="fa fa-angle-right"></i>Event Log</Link>
                </Box>
              </Box>
              <Box direction="column" align="start" responsive={true}>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/user/kernel_coredump_design"><i className="fa fa-angle-right"></i>Kernel Core Dump</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/user/layer3_design"><i className="fa fa-angle-right"></i>L3 Interfaces, Static Routes, ECMP</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/user/led_design"><i className="fa fa-angle-right"></i>LED</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/user/link_aggregation_design"><i className="fa fa-angle-right"></i>Link Aggregation</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/user/lldp_design"><i className="fa fa-angle-right"></i>LLDP</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/user/logrotate_design"><i className="fa fa-angle-right"></i>Log Rotation</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/user/loopback_interface_design"><i className="fa fa-angle-right"></i>Loopback Interface</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/user/mgmt_intf_design"><i className="fa fa-angle-right"></i>Management Interface</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/user/mstpd_design"><i className="fa fa-angle-right"></i>MSTP</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/user/ospfv2_design"><i className="fa fa-angle-right"></i>OSPF</Link>
                </Box>
              </Box>
              <Box direction="column" align="start" responsive={true}>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/user/ovsdb_improvements_design"><i className="fa fa-angle-right"></i>OVSDB Improvements</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/user/interface_design"><i className="fa fa-angle-right"></i>Phy Interfaces</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/user/ping_design"><i className="fa fa-angle-right"></i>PING</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/user/pluggable_modules_design"><i className="fa fa-angle-right"></i>Pluggable Modules</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/user/power_management_design"><i className="fa fa-angle-right"></i>Power Management</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/user/ofdpa_hybrid_design"><i className="fa fa-angle-right"></i>OF-DPA OpenFlow Hybrid Switch</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/user/qos_design"><i className="fa fa-angle-right"></i>Quality of Service (QoS)</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/user/syslog_remote_design"><i className="fa fa-angle-right"></i>Remote Syslog</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/user/rest_api_design"><i className="fa fa-angle-right"></i>REST and Declarative Config</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/user/sflow_design"><i className="fa fa-angle-right"></i>Sflow</Link>
                </Box>
              </Box>
              <Box direction="column" align="start" responsive={true}>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/user/sftp_design"><i className="fa fa-angle-right"></i>SFTP</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/user/show_core-dump_design_doc"><i className="fa fa-angle-right"></i>Show Core</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/user/show_tech_design"><i className="fa fa-angle-right"></i>Show Tech</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/user/sub-interface_design"><i className="fa fa-angle-right"></i>Sub Interfaces</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/user/thermal_management_design"><i className="fa fa-angle-right"></i>Temp and Fan Management</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/user/traceroute_design"><i className="fa fa-angle-right"></i>Traceroute</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/user/version_design"><i className="fa fa-angle-right"></i>Versioning</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/user/vlan_design"><i className="fa fa-angle-right"></i>VLANS</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/user/show_vlog_design"><i className="fa fa-angle-right"></i>Vlog</Link>
                </Box>
              </Box>
             </Box>
            <p></p>
            <b>Components Design</b>
            <Box direction="row">
              <Box direction="column" align="start" responsive={true}>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/ops-aaa-utils/design"><i className="fa fa-angle-right"></i>AAA</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/ops-ansible/design"><i className="fa fa-angle-right"></i>Ansible</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/ops-arpmgrd/design"><i className="fa fa-angle-right"></i>ARP Manager Daemon</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/ops-bufmond/design"><i className="fa fa-angle-right"></i>Buffer Monitor Daemon</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/user/checkmk-agent-design"><i className="fa fa-angle-right"></i>Check_MK Agent</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/ops-cli/design"><i className="fa fa-angle-right"></i>CLI Daemon</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/ops-cfgd/design"><i className="fa fa-angle-right"></i>Configuration Daemon</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/ops-switchd-container-plugin/design"><i className="fa fa-angle-right"></i>Container Plugin</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/ops-dhcp-tftp/design"><i className="fa fa-angle-right"></i>DHCP/TFTP Server</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/ops-fand/design"><i className="fa fa-angle-right"></i>Fan Daemon</Link>
                </Box>
              </Box>
              <Box direction="column" align="start" responsive={true}>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/ops-intfd/design"><i className="fa fa-angle-right"></i>Interface Daemon</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/ops-lacpd/design"><i className="fa fa-angle-right"></i>LACP Daemon</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/ops-portd/design"><i className="fa fa-angle-right"></i>Layer3 Port Daemon</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/ops-ledd/design"><i className="fa fa-angle-right"></i>LED Daemon</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/ops-lldpd/design"><i className="fa fa-angle-right"></i>LLDP Daemon</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/ops-mgmt-intf/design"><i className="fa fa-angle-right"></i>Management Interface</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/ops-ntpd/design"><i className="fa fa-angle-right"></i>NTP</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/ops-switchd-opennsl-plugin/design"><i className="fa fa-angle-right"></i>OpenNSL Plugin</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/ops-snmpd/design"><i className="fa fa-angle-right"></i>OpenSwitch SNMP Service Daemon</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/ops-openvswitch/design"><i className="fa fa-angle-right"></i>OpenVswitch Daemon</Link>
                </Box>
              </Box>
              <Box direction="column" align="start" responsive={true}>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/ops-pmd/design"><i className="fa fa-angle-right"></i>Pluggable Module Daemon</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/ops-powerd/design"><i className="fa fa-angle-right"></i>Power Daemon</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/ops-quagga/design"><i className="fa fa-angle-right"></i>Quagga (BGP and Zebra)</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/ops-rbac/design"><i className="fa fa-angle-right"></i>RBAC</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/ops-restd/design"><i className="fa fa-angle-right"></i>REST Daemon</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/plugins_extensions_design"><i className="fa fa-angle-right"></i>Switched Feature Plugins Extensions</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/ops-sysd/design"><i className="fa fa-angle-right"></i>System Daemon</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/ops-tempd/design"><i className="fa fa-angle-right"></i>Temperature Daemon</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/ops-utils/design"><i className="fa fa-angle-right"></i>Utility Library</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/ops-vsi/design"><i className="fa fa-angle-right"></i>Virtual Switch Image (Test Framework)</Link>
                </Box>
              </Box>
              <Box direction="column" align="start" responsive={true}>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/ops-vland/design"><i className="fa fa-angle-right"></i>VLAN Daemon</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/dev/ops-webui/design"><i className="fa fa-angle-right"></i>Web UI</Link>
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
                  <Link to="documents/user/aaa_test"><i className="fa fa-angle-right"></i>Authentication (AAA CLI)</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/user/bgp_test"><i className="fa fa-angle-right"></i>BGP</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/user/bootup_test"><i className="fa fa-angle-right"></i>Boot Up</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/user/checkmk-agent-test"><i className="fa fa-angle-right"></i>Check_MK Agent</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/user/test_cfgd_ft_case"><i className="fa fa-angle-right"></i>Configuration Persistence</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/user/dhcp_tftp_test"><i className="fa fa-angle-right"></i>DHCP/TFTP Server</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/user/diagnostic_test"><i className="fa fa-angle-right"></i>Diagnostics</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/user/show_events_test"><i className="fa fa-angle-right"></i>Event Log</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/user/kernel_coredump_test"><i className="fa fa-angle-right"></i>Kernel Core Dump</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/user/layer3_test"><i className="fa fa-angle-right"></i>L3 Interfaces, Static Routes, ECMP</Link>
                </Box>
              </Box>
              <Box direction="column" align="start" responsive={true}>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/user/lag_test"><i className="fa fa-angle-right"></i>Link Aggregation</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/user/lldp_test"><i className="fa fa-angle-right"></i>LLDP</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/user/logrotate_test"><i className="fa fa-angle-right"></i>Log Rotation</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/user/loopback-interface_test"><i className="fa fa-angle-right"></i>Loopback Interface</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/user/mgmt_intf_test"><i className="fa fa-angle-right"></i>Management Interface</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/user/mirror_feature_test"><i className="fa fa-angle-right"></i>Mirror</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/user/ntp_test"><i className="fa fa-angle-right"></i>NTP</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/user/phy_interface_test"><i className="fa fa-angle-right"></i>Phy Interfaces</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/user/ping_ft_test"><i className="fa fa-angle-right"></i>PING</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/user/pluggable_modules_test"><i className="fa fa-angle-right"></i>Pluggable Modules</Link>
                </Box>
              </Box>
              <Box direction="column" align="start" responsive={true}>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/user/qos_feature_test"><i className="fa fa-angle-right"></i>Quality of Service (QOS)</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/user/syslog_remote_test"><i className="fa fa-angle-right"></i>Remote Syslog</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/user/rest_test"><i className="fa fa-angle-right"></i>REST API</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/user/sflow_test"><i className="fa fa-angle-right"></i>Sflow</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/user/sftp_ft_test"><i className="fa fa-angle-right"></i>SFTP</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/user/show_core-dump_test"><i className="fa fa-angle-right"></i>Show Core</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/user/show_tech_test"><i className="fa fa-angle-right"></i>Show Tech</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/user/sub-interface_test"><i className="fa fa-angle-right"></i>Sub Interface</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/user/traceroute_ft_test"><i className="fa fa-angle-right"></i>Traceroute</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/user/vlan_modes_ft"><i className="fa fa-angle-right"></i>VLANs</Link>
                </Box>
              </Box>
              <Box direction="column" align="start" responsive={true}>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/user/show_version_detail_cli_feature_test"><i className="fa fa-angle-right"></i>Versioning</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/user/show_vlog_test"><i className="fa fa-angle-right"></i>Vlog</Link>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <Link to="documents/user/webui_test"><i className="fa fa-angle-right"></i>Web UI</Link>
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
