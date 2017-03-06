var React = require('react');
var Link = require('react-router').Link;

var Article = require('grommet/components/Article');
var Section = require('grommet/components/Section');
var Headline = require('grommet/components/Headline');
var Menu = require('grommet/components/Menu');
var Button = require('grommet/components/Button');
var Tiles = require('grommet/components/Tiles');
var Tile = require('grommet/components/Tile');
var Box = require('grommet/components/Box');
var IntlMixin = require('grommet/mixins/GrommetIntlMixin');

var OpenSwitchLogo = require('./icons/OpenSwitchLogo');
var StoryIcon = require('./icons/Story');
var ConsoleIcon = require('./icons/Console');
var CommunityIcon = require('./icons/Community');
var IntelIcon = require('./icons/Intel');
var HPEIcon = require('./icons/HPE');
var VMwareIcon = require('./icons/Vmware');
var BroadcomIcon = require('./icons/Broadcom');
var QosmosIcon = require('./icons/Qosmos');
var BarefootIcon = require('./icons/Barefoot');
var MellanoxIcon = require('./icons/Mellanox');
var QuattroIcon = require('./icons/Quattro');
var CaviumIcon = require('./icons/Cavium');
var LinkedInIcon = require('./icons/Linkedin');
var NephosIcon = require('./icons/Nephos');
var ExtremeIcon = require('./icons/Extreme');
var P4orgIcon = require('./icons/P4org');
var SnapRouteIcon = require('./icons/SnapRoute');
var EdgeNetworkIcon = require('./icons/EdgeNetwork');
var DellIcon = require('./icons/Dell');
var InnoviumIcon = require('./icons/Innovium');

var Header = require('./Header');
var Footer = require('./Footer');

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

var Home = React.createClass({

  mixins: [IntlMixin],

  _onClick: function () {
    //no-op
  },

  render: function() {
    return (
      <Article>

        <Header className="home" float={true} media="lap-and-up" />

        <HomeSection primary={true} full={true} className="openswitch-hero"
          backgroundImage={'url(img/openswitch-background.png)'}>
          <OpenSwitchLogo a11yTitle=""/>
          <Headline large={true}><b>OpenSwitch</b></Headline>
          <Headline small={true}>
            Community-Based, Open Source,
          </Headline>
          <Headline small={true}>
            Full-Featured Network Operating System
          </Headline>

        </HomeSection>

        <HomeSection colorIndex="neutral-3">
          <Box direction="row">
            <Box pad="large" justify="center" align="center">
              <CommunityIcon />
            </Box>
            <Box direction="column" justify="center" align="center">
              <Headline strong={true}>Open Source, Open Community</Headline>
              <p><strong>
                Become a part of the data center and networking revolution.</strong></p>
              <p>
                Ready to join a truly open community with standards that are modern and consistent? OpenSwitch provides versatile support for both traditional and cloud networking environments. We are excited to start working with you.
              </p>
              <Menu direction="row">
                <Link to="participate/participatehome">
                  <Button label="Join the community today" onClick={this._onClick} primary={true} />
                </Link>
              </Menu>
            </Box>
          </Box>
        </HomeSection>

        <HomeSection>
          <Box direction="row">
            <Box pad="large" justify="center" align="center">
              <StoryIcon />
            </Box>
            <Box direction="column" justify="center" align="center">
              <Headline strong={true}>Developers Welcome!</Headline>
              <p><strong>
                Ready to help drive the future of Networking?</strong></p>
              <p>OpenSwitch is a truly open and collaborative environment that helps developers innovate and produce modern and modular code. If you’re ready to be the innovator of the future (or maybe just want to tinker with the source code), get started today.  Take a look our documentation or Github site.
              </p>
            </Box>
          </Box>
        </HomeSection>

        <HomeSection colorIndex="neutral-6">
          <Box direction="row">
            <Box pad="large" justify="center" align="center">
              <ConsoleIcon />
            </Box>
            <Box direction="column" justify="center" align="center">
              <Headline strong={true}>Go Ahead, Use It</Headline>
              <p><strong>Introducing the open source NOS that tips traditional networking on its side.
              </strong></p>
              <p>OpenSwitch provides a fully-featured L2/L3 control plane stack, traditional and programmatic, declarative control plane.</p>
              <p>The 24x7 nature of global digital economy and the explosion of data have changed how we think about data center networking. It’s time for the separation of switch hardware and software—delivered through an open environment based on open source established practices and true community involvement from developers and users.
              </p>
              <Menu direction="row">
                <Link to="use/usehome">
                  <Button label="Start Using OpenSwitch Today" onClick={this._onClick} primary={true} />
                </Link>
              </Menu>
            </Box>
          </Box>
        </HomeSection>

        <HomeSection>
          <Headline large={true}>Members</Headline>
          <Headline small={true}>
            Premier
          </Headline>
          <hr style={{minWidth: '544px'}}/>
          <Tiles fill={true} flush={false}>
            <Tile justify="center" align="center" pad="small">
             <BarefootIcon />
            </Tile>
            <Tile justify="center" align="center" pad="small">
             <BroadcomIcon />
            </Tile>
            <Tile justify="center" align="center" pad="small">
              <CaviumIcon />
            </Tile>
            <Tile justify="center" align="center" pad="small">
              <DellIcon />
            </Tile>
            <Tile justify="center" align="center" pad="small">
              <ExtremeIcon />
            </Tile>
            <Tile justify="center" align="center" pad="small">
              <HPEIcon />
            </Tile>
            <Tile justify="center" align="center" pad="small">
              <MellanoxIcon />
            </Tile>
            <Tile justify="center" align="center" pad="small">
              <SnapRouteIcon />
            </Tile>
          </Tiles>
          <Headline small={true}>
            General
          </Headline>
          <hr style={{minWidth: '544px'}}/>
          <Tiles fill={true} flush={false}>
            <Tile justify="center" align="center" pad="small">
             <EdgeNetworkIcon />
            </Tile>
            <Tile justify="center" align="center" pad="small">
              <NephosIcon />
            </Tile>
            <Tile justify="center" align="center" pad="small">
              <QuattroIcon />
            </Tile>
            <Tile justify="center" align="center" pad="small">
              <InnoviumIcon />
            </Tile>
          </Tiles>
          <Headline small={true}>
            Associate
          </Headline>
          <hr style={{minWidth: '544px'}}/>
          <Tiles fill={true} flush={false}>
            <Tile justify="center" align="center" pad="small">
              <P4orgIcon />
            </Tile>
          </Tiles>
          <Headline small={true}>
            Operator
          </Headline>
          <hr style={{minWidth: '544px'}}/>
          <Tiles fill={true} flush={false}>
            <Tile justify="center" align="center" pad="small">
              <LinkedInIcon />
            </Tile>
          </Tiles>
        </HomeSection>

        <HomeSection colorIndex="neutral-6">
          <Headline small={true}>
            Industry Contributors
          </Headline>
          <hr style={{minWidth: '544px'}}/>
          <Tiles>
            <Tile justify="center" align="center" pad="small">
              <IntelIcon />
            </Tile>
            <Tile justify="center" align="center" pad="small">
              <VMwareIcon />
            </Tile>
            <Tile justify="center" align="center" pad="small">
              <QosmosIcon />
            </Tile>
          </Tiles>
        </HomeSection>

        <Section full={true} backgroundImage={'url(img/network-background.png)'}
          appCentered={true} justify="start" align="start">
          <Headline strong={true}>About The Project</Headline>
          <h4>Governance</h4>
          <Box direction="row">
            <Box direction="column" align="start" responsive={true}>
                <Box pad={{ horizontal: "small" }}>
                  <a href="https://wiki.openswitch.net/governance:board-members" target="_blank"><i className="fa fa-angle-right"></i>Board Members</a>
                </Box>
                <Box pad={{ horizontal: "small" }}>
                  <a href="https://wiki.openswitch.net/governance:charter" target="_blank"><i className="fa fa-angle-right"></i>Project Charter</a>
                </Box>
            </Box>
          </Box>
          <p> </p>
          <h4>Links</h4>
          <Menu direction="row" align="end" responsive={false}>
              <a href="http://github.com/open-switch" target="_blank"><i className="fa fa-github fa-2x"></i></a>
              <a href="http://lists.openswitch.net" target="_blank"><i className="fa fa-envelope fa-2x"></i></a>
              <a href="https://tree.taiga.io/project/openswitch/issues" target="_blank"><i className="fa fa-bug fa-2x"></i></a>
              <a href="http://webchat.freenode.net/?channels=#openswitch" target="_blank"><i className="fa fa-slack fa-2x"></i></a>
              <a href="https://www.youtube.com/c/OpenSwitchNOS" target="_blank"><i className="fa fa-youtube fa-2x"></i></a>
              <a href="https://twitter.com/OpenSwitchNOS" target="_blank"><i className="fa fa-twitter fa-2x"></i></a>
              <a href="https://www.linkedin.com/groups/8467572" target="_blank"><i className="fa fa-linkedin fa-2x"></i></a>
          </Menu>
        </Section>
        <Footer float={true} />
      </Article>
    );
  }
});

module.exports = Home;
