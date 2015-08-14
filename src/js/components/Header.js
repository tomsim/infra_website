var React = require('react');
var GrommetHeader = require('grommet/components/Header');
var Title = require('grommet/components/Title');
var Menu = require('grommet/components/Menu');
var Link = require('react-router').Link;
var OpenSwitchLogo = require('./icons/OpenSwitchLogo');

var IntlMixin = require('grommet/mixins/GrommetIntlMixin');

var Header = React.createClass({

  mixins: [IntlMixin],

  render: function() {
    return (
      <GrommetHeader {...this.props} fixed={false}
        float={this.props.float} large={true}
        appCentered={true} justify="between">
        <Title responsive={false}>
          <Link to="openSwitch">
            <OpenSwitchLogo small={true} />
          </Link>
          <Link to="openSwitch">
            <b>Open</b>Switch
          </Link>
        </Title>
        <Menu direction="row" responsive={false}>
          <Link to="documentation">{this.getGrommetIntlMessage('Documentation')}</Link>
          <Link to="develop">{this.getGrommetIntlMessage('Develop')}</Link>
          <Link to="community">{this.getGrommetIntlMessage('Community')}</Link>
        </Menu>
      </GrommetHeader>
    );
  }
});

module.exports = Header;

