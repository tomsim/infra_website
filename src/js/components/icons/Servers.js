// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

var React = require('react');
var uuid = require('node-uuid');

var IntlMixin = require('grommet/mixins/GrommetIntlMixin');

var CLASS_ROOT = "servers-icon";

var Servers = React.createClass({

  propTypes: {
    a11yTitle: React.PropTypes.string
  },

  mixins: [IntlMixin],

  getDefaultProps: function() {
    return { a11yTitle: 'Servers' };
  },

  render: function() {
    var classes = [CLASS_ROOT];

    if (this.props.className) {
      classes.push(this.props.className);
    }

    var logoTitleId = 'servers-title-' + uuid.v1();

    return (
      <svg className={classes.join(' ')} fill="#fff" viewBox="0 0 24 24"
        width="24px" version="1.1" role="img" aria-labelledby={logoTitleId}>
        <title id={logoTitleId}>{this.getGrommetIntlMessage(this.props.a11yTitle)}</title>
        <path d="M8,20L8,20c-0.6,0-1-0.4-1-1v0c0-0.6,0.4-1,1-1h0c0.6,0,1,0.4,1,1v0C9,19.6,8.6,20,8,20z"/>
        <path d="M19,20L19,20c-0.6,0-1-0.4-1-1v0c0-0.6,0.4-1,1-1h0c0.6,0,1,0.4,1,1v0C20,19.6,19.6,20,19,20z"/>
        <path fill="none" stroke="#FFFFFF" strokeWidth="2" d="M12,23H3c-1.1,0-2-0.9-2-2V3c0-1.1,0.9-2,2-2h9V23z
     M4,5h5 M4,9h5 M4,13h5 M21,1h-9v22h9c1.1,0,2-0.9,2-2V3C23,1.9,22.1,1,21,1z M15,5h5 M15,9h5 M15,13h5"/>
      </svg>
    );
  }

});

module.exports = Servers;
