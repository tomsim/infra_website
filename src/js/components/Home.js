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
var ServersIcon = require('./icons/Servers');
var DatabaseIcon = require('./icons/Database');
var Storage = require('./icons/Storage');
var LaptopIcon = require('./icons/Laptop');
var MonitorIcon = require('./icons/Monitor');
var HostIcon = require('./icons/Host');
var AppIcon = require('./icons/App');
var ServerClusterIcon = require('./icons/ServerCluster');
var IntelIcon = require('./icons/Intel');
var HPEIcon = require('./icons/HPE');
var AcctonIcon = require('./icons/Accton');
var VMwareIcon = require('./icons/Vmware');
var BroadcomIcon = require('./icons/Broadcom');
var TwitterIcon = require('./icons/Twitter');
var FacebookIcon = require('./icons/Facebook');
var SlackIcon = require('./icons/Slack');
var YoutubeIcon = require('./icons/Youtube');

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
          <Headline large={true}><b>Open</b>Switch</Headline>
          <Headline small={true}>
            The first truly Open Source Network Operating System.
          </Headline>
          <Menu direction="row">
            <Button label="Download OpenSwitch" onClick={this._onClick} primary={true} />
          </Menu>
          <p>or <b><a href="https://github.com/open-switch" target="_blank">View Github Project</a></b></p>
        </HomeSection>

        <HomeSection colorIndex="neutral-1">
          <Box direction="row">
            <Box pad="large" justify="center" align="center">
              <CommunityIcon />
            </Box>
            <Box direction="column" justify="center" align="center">
              <Headline strong={true}>Open Source, Open Community.</Headline>
              <p>
                All the source code is available under Open Source licenses.
              </p>
              <p>
                Developers can join, contribute and guide the direction of the
                OpenSwitch community.
              </p>
              <Menu direction="row">
                <Link to="develop">
                  <Button label="Participate" onClick={this._onClick} primary={true} />
                </Link>
              </Menu>
            </Box>
          </Box>
        </HomeSection>

        <HomeSection colorIndex="neutral-2">
          <Box direction="row">
            <Box pad="large" justify="center" align="center">
              <StoryIcon />
            </Box>
            <Box direction="column" justify="center" align="center">
              <Headline strong={true}>Modern and Consistent.</Headline>
              <p>
                Versatile support for traditional and cloud networking
                environments.
              </p>
              <Menu direction="row">
                <Link to="participate">
                  <Button label="Learn more" onClick={this._onClick} primary={true} />
                </Link>
              </Menu>
            </Box>
          </Box>
        </HomeSection>

        <HomeSection colorIndex="neutral-3">
          <Box direction="row">
            <Box pad="large" justify="center" align="center">
              <ConsoleIcon />
            </Box>
            <Box direction="column" justify="center" align="center">
              <Headline strong={true}>Fully Featured NOS.</Headline>
              <p>
                Fully featured L2/L3 control plane stack, traditional and
                programmatic, declarative control plane.
              </p>
              <Menu direction="row">
                <Link to="participate">
                  <Button label="Learn more." onClick={this._onClick} primary={true} />
                </Link>
              </Menu>
            </Box>
          </Box>
        </HomeSection>

        <HomeSection colorIndex="neutral-4" direction="row">
            <Box separator="right" pad="large">
              <Headline small={true} strong={true}>
                Designed to work with any hardware and platform.
              </Headline>
              <p>
                Nullam id dolor ultricies vehicula ut id elit.
              </p>
              <p><b><a href="#" target="_blank">View Compatibility List...</a></b></p>
              <Tiles small={true} fill={true} flush={true}>
                <Tile justify="center" align="center">
                  <ServersIcon />
                </Tile>
                <Tile justify="center" align="center" pad={{"vertical": "small"}}>
                  <DatabaseIcon />
                </Tile>
                <Tile justify="center" align="center" pad={{"vertical": "small"}}>
                  <Storage />
                </Tile>
                <Tile justify="center" align="center" pad={{"vertical": "small"}}>
                  <LaptopIcon />
                </Tile>
                <Tile justify="center" align="center" pad={{"vertical": "small"}}>
                  <MonitorIcon />
                </Tile>
                <Tile justify="center" align="center" pad={{"vertical": "small"}}>
                  <HostIcon />
                </Tile>
                <Tile justify="center" align="center" pad={{"vertical": "small"}}>
                  <AppIcon />
                </Tile>
                <Tile justify="center" align="center" pad={{"vertical": "small"}}>
                  <ServerClusterIcon />
                </Tile>
              </Tiles>
            </Box>
            <Box pad="large">
              <Headline small={true} strong={true}>Experience our live network OS solution.</Headline>
              <p>
                Aenean lacinia bibendum nulla sed consectetur. Nullam id dolor id nibh
                ultricies vehicula elit. Sed posuere consectetur est at lobortis.
              </p>
              <Menu direction="row" justify="center" pad="large">
                <Button label="Launch OpenSwitch" onClick={this._onClick} />
              </Menu>
            </Box>
        </HomeSection>

        <HomeSection>
          <Headline large={true}>Contributing Members.</Headline>
          <p>
            OpenSwitch is supported by key players in the networking industry. <b><a href="#">See all...</a></b>
          </p>
          <Tiles fill={true} flush={false}>
            <Tile justify="center" align="center" pad={{"vertical": "small"}}>
              <HPEIcon />
            </Tile>
            <Tile justify="center" align="center" pad={{"vertical": "small"}}>
              <BroadcomIcon />
            </Tile>
            <Tile justify="center" align="center" pad={{"vertical": "small"}}>
              <AcctonIcon />
            </Tile>
            <Tile justify="center" align="center" pad={{"vertical": "small"}}>
              <IntelIcon />
            </Tile>
            <Tile justify="center" align="center" pad={{"vertical": "small"}}>
              <VMwareIcon />
            </Tile>
          </Tiles>
        </HomeSection>

        <Section full={true} backgroundImage={'url(img/network-background.png)'}
          appCentered={true} justify="start" align="start">
          <Headline small={true} strong={true}>Your NOS social network</Headline>
          <p>
            OpenSwitch is the open source solution to orchestrating your network.
          </p>
          <Menu direction="row" pad={{vertical: "small"}}>
            <Button label="The OpenSwitch Blog" onClick={this._onClick} primary={true} />
          </Menu>
          <Menu direction="row" responsive={false} pad={{ vertical: "small" }}>
            <TwitterIcon />
            <FacebookIcon />
            <SlackIcon />
            <YoutubeIcon />
          </Menu>
        </Section>

        <Footer float={true} />
      </Article>
    );
  }
});

module.exports = Home;
