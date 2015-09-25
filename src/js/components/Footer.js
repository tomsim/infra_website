var React = require('react');
var GrommetFooter = require('grommet/components/Footer');
var Box = require('grommet/components/Box');
var Menu = require('grommet/components/Menu');

var IntlMixin = require('grommet/mixins/GrommetIntlMixin');

var Footer = React.createClass({

  mixins: [IntlMixin],

  render: function() {
    var colorIndex = 'neutral-3';
    if (this.props.float) {
      colorIndex += '-a';
    }

    return (
      <GrommetFooter appCentered={true} align="start" float={this.props.float}
         pad={{ vertical: "none", horizontal: "large" }} justify="between" colorIndex={colorIndex}>
        <Box direction="row">

        </Box>
        <Menu direction="row" align="end" responsive={false} pad={{ vertical: "small" }}>
            <a href="http://lists.openswitch.net" target="_blank"><i className="fa fa-envelope fa-2x"></i></a>
            <a href="https://tree.taiga.io/project/openswitch/issues" target="_blank"><i className="fa fa-bug fa-2x"></i></a>
            <a href="http://openswitch.slack.com" target="_blank"><i className="fa fa-slack fa-2x"></i></a>
            <a href="http://git.openswitch.net/" target="_blank"><i className="fa fa-git fa-2x"></i></a>
            <a href="http://github.com/open-switch" target="_blank"><i className="fa fa-github fa-2x"></i></a>
        </Menu>
      </GrommetFooter>
    );
  }
});

module.exports = Footer;
