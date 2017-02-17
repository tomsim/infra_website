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
    var lfString = `
      <div id="lfcollabprojects-header">
        <div class="gray-diagonal">
          <div class="header-inner">
            <a id="lfcollabprojects-logo" href="http://collabprojects.linuxfoundation.org">Linux Foundation Collaborative Projects</a>
          </div>
        </div>
      </div>`;

    return (
      <div>
      <div dangerouslySetInnerHTML={{ __html: lfString }} />
      <GrommetHeader {...this.props} media={this.props.media} fixed={false}
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
        <Menu direction="row" responsive={false} media={this.props.menuMedia}>
          <Link to="use">{this.getGrommetIntlMessage('Use')}</Link>
          <Link to="participate">{this.getGrommetIntlMessage('Participate')}</Link>
          <a href="https://github.com/open-switch">Github</a>
          <a href="https://github.com/open-switch/opx-docs/wiki">Docs</a>
        </Menu>
      </GrommetHeader>
      </div>
    );
  }
});

module.exports = Header;
