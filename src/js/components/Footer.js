var React = require('react');
var GrommetFooter = require('grommet/components/Footer');
var Box = require('grommet/components/Box');
var Menu = require('grommet/components/Menu');

var IntlMixin = require('grommet/mixins/GrommetIntlMixin');

var TwitterIcon = require('./icons/Twitter');
var FacebookIcon = require('./icons/Facebook');
var SlackIcon = require('./icons/Slack');
var YoutubeIcon = require('./icons/Youtube');


var Footer = React.createClass({

  mixins: [IntlMixin],

  render: function() {
    var colorIndex = 'accent-2';
    if (this.props.float) {
      colorIndex += '-a';
    }

    return (
      <GrommetFooter appCentered={true} align="start" float={this.props.float}
         pad={{ vertical: "none", horizontal: "large" }} justify="between" colorIndex={colorIndex}>
        <Box direction="row">
          <p>This work is licensed under the <b><a href="http://creativecommons.org/licenses/by/4.0/legalcode">Creative Commons Attribution 4.0 International License</a></b>.</p>
        </Box>
        <Menu direction="row" align="end" responsive={false} pad={{ vertical: "small" }}>
            <a href="http://openswitch.slack.com" target="_blank"><SlackIcon /></a>
            <a href="#" target="_blank"><FacebookIcon /></a>
            <a href="#" target="_blank"><TwitterIcon /></a>
            <a href="#" target="_blank"><YoutubeIcon /></a>
        </Menu>
      </GrommetFooter>
    );
  }
});

module.exports = Footer;
