// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

var React = require('react');
var uuid = require('node-uuid');

var IntlMixin = require('grommet/mixins/GrommetIntlMixin');

var CLASS_ROOT = "host-icon";

var Host = React.createClass({

  mixins: [IntlMixin],

  propTypes: {
    a11yTitle: React.PropTypes.string
  },

  getDefaultProps: function() {
    return { a11yTitle: 'Host' };
  },

  render: function() {
    var classes = [CLASS_ROOT];

    if (this.props.className) {
      classes.push(this.props.className);
    }

    var logoTitleId = 'host-title-' + uuid.v1();

    return (
      <svg className={classes.join(' ')} fill="#fff" viewBox="0 0 20 24"
        width="24px" version="1.1" role="img" aria-labelledby={logoTitleId}>
        <title id={logoTitleId}>{this.getGrommetIntlMessage(this.props.a11yTitle)}</title>
        <path fill="none" stroke="#FFFFFF" strokeWidth="2" d="M17,23H3c-1.1,0-2-0.9-2-2V3c0-1.1,0.9-2,2-2h14
    c1.1,0,2,0.9,2,2v18C19,22.1,18.1,23,17,23z M2,8h16 M2,13h16 M2,18h16"/>
        <rect x="14.5" y="3.5" fill="#FFFFFF" width="2" height="2"/>
      </svg>
    );
  }

});

module.exports = Host;
