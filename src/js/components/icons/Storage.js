// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

var React = require('react');
var uuid = require('node-uuid');

var IntlMixin = require('grommet/mixins/GrommetIntlMixin');

var CLASS_ROOT = "storage-icon";

var Storage = React.createClass({

  mixins: [IntlMixin],

  propTypes: {
    a11yTitle: React.PropTypes.string
  },

  getDefaultProps: function() {
    return { a11yTitle: 'Storage' };
  },

  render: function() {
    var classes = [CLASS_ROOT];

    if (this.props.className) {
      classes.push(this.props.className);
    }

    var logoTitleId = 'storage-title-' + uuid.v1();

    return (
      <svg className={classes.join(' ')} fill="#fff" viewBox="0 0 20 24"
        width="24px" version="1.1" role="img" aria-labelledby={logoTitleId}>
        <title id={logoTitleId}>{this.getGrommetIntlMessage(this.props.a11yTitle)}</title>
        <path fill="none" stroke="#FFFFFF" strokeWidth="2" d="M19,21H1V3c0-1.1,0.9-2,2-2h14c1.1,0,2,0.9,2,2V21
      z M18,11H1 M1,22v2 M19,22v2"/>
        <line fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" x1="7" y1="16" x2="13" y2="16"/>
        <line fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" x1="7" y1="6" x2="13" y2="6"/>
      </svg>
    );
  }

});

module.exports = Storage;
