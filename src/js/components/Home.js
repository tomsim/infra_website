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
var ServersIcon = require('./icons/Servers');
var DatabaseIcon = require('./icons/Database');
var Storage = require('./icons/Storage');
var LaptopIcon = require('./icons/Laptop');
var MonitorIcon = require('./icons/Monitor');
var HostIcon = require('./icons/Host');
var AppIcon = require('./icons/App');
var ServerClusterIcon = require('./icons/ServerCluster');
var ThreeParIcon = require('./icons/ThreePar');
var IntelIcon = require('./icons/Intel');
var HPEIcon = require('./icons/HPE');
var ArubaIcon = require('./icons/Aruba');
var NetworkIcon = require('./icons/Network');
var CasioIcon = require('./icons/Casio');
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
            OpenSwitch is the open source solution to orchestrating your network.
          </Headline>
          <Menu direction="row">
            <Button label="Download OpenSwitch" onClick={this._onClick} primary={true} />
          </Menu>
          <p>or <b><a href="#" target="_blank">View Github Project</a></b></p>
        </HomeSection>

        <HomeSection colorIndex="accent-2">
          <Box direction="row">
            <Box pad="large" justify="center" align="center">
              <StoryIcon />
            </Box>
            <Box direction="column" justify="center" align="center">
              <Headline strong={true}>Every network has a story.</Headline>
              <p>
                Aenean lacinia bibendum nulla sed consectetur. Nullam id dolor id nibh
                ultricies vehicula elit. Sed posuere consectetur est at lobortis.
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
              <Headline strong={true}>You make it, it’s your network.</Headline>
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

        <HomeSection colorIndex="accent-1">
          <Box direction="row">
            <Box pad="large" justify="center" align="center">
              <ConsoleIcon />
            </Box>
            <Box direction="column" justify="center" align="center">
              <Headline strong={true}>You make it, it’s your network.</Headline>
              <p>
                Aenean lacinia bibendum nulla sed consectetur. Nullam id dolor id nibh
                ultricies vehicula elit. Sed posuere consectetur est at lobortis.
              </p>
              <Menu direction="row">
                <Link to="participate">
                  <Button label="Participate" onClick={this._onClick} primary={true} />
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
              <Headline strong={true}>You make it, it’s your network.</Headline>
              <p>
                Aenean lacinia bibendum nulla sed consectetur. Nullam id dolor id nibh
                ultricies vehicula elit. Sed posuere consectetur est at lobortis.
              </p>
              <Menu direction="row">
                <Link to="use">
                  <Button label="Use" onClick={this._onClick} primary={true} />
                </Link>
              </Menu>
            </Box>
          </Box>
        </HomeSection>

        <HomeSection colorIndex="neutral-3" direction="row">
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
          <Headline large={true}>Our partner networks.</Headline>
          <p>
            Nullam id dolor ultricies vehicula ut id elit. Sed posuere consectetur est at lobortis. <b><a href="#">See all...</a></b>
          </p>
          <Tiles fill={true} flush={false}>
            <Tile justify="center" align="center" pad={{"vertical": "small"}}>
              <ThreeParIcon />
            </Tile>
            <Tile justify="center" align="center" pad={{"vertical": "small"}}>
              <IntelIcon />
            </Tile>
            <Tile justify="center" align="center" pad={{"vertical": "small"}}>
              <HPEIcon />
            </Tile>
            <Tile justify="center" align="center" pad={{"vertical": "small"}}>
              <ArubaIcon />
            </Tile>
            <Tile justify="center" align="center" pad={{"vertical": "small"}}>
              <NetworkIcon />
            </Tile>
            <Tile justify="center" align="center" pad={{"vertical": "small"}}>
              <CasioIcon />
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
