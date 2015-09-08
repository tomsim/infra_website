// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

var React = require('react');
var uuid = require('node-uuid');

var IntlMixin = require('grommet/mixins/GrommetIntlMixin');

var CLASS_ROOT = "server-cluster-icon";

var ServerCluster = React.createClass({

  propTypes: {
    a11yTitle: React.PropTypes.string
  },

  mixins: [IntlMixin],

  getDefaultProps: function() {
    return { a11yTitle: 'Server Cluster' };
  },

  render: function() {
    var classes = [CLASS_ROOT];

    if (this.props.className) {
      classes.push(this.props.className);
    }

    var logoTitleId = 'server-cluster-title-' + uuid.v1();

    return (
      <svg className={classes.join(' ')} fill="#fff" viewBox="0 0 24 23"
        width="24px" version="1.1" role="img" aria-labelledby={logoTitleId}>
        <title id={logoTitleId}>{this.getGrommetIntlMessage(this.props.a11yTitle)}</title>
        <path fill="none" stroke="#FFFFFF" strokeWidth="2" d="M21,8H3C1.9,8,1,7.1,1,6V3c0-1.1,0.9-2,2-2h18
    c1.1,0,2,0.9,2,2v3C23,7.1,22.1,8,21,8z"/>
        <path fill="none" stroke="#FFFFFF" strokeWidth="2" d="M21,15H3c-1.1,0-2-0.9-2-2v-3c0-1.1,0.9-2,2-2h18
          c1.1,0,2,0.9,2,2v3C23,14.1,22.1,15,21,15z"/>
        <path fill="none" stroke="#FFFFFF" strokeWidth="2" d="M21,22H3c-1.1,0-2-0.9-2-2v-3c0-1.1,0.9-2,2-2h18
          c1.1,0,2,0.9,2,2v3C23,21.1,22.1,22,21,22z"/>
        <rect x="3.5" y="3.5" fill="#FFFFFF" width="2" height="2"/>
        <rect x="3.5" y="10.5" fill="#FFFFFF" width="2" height="2"/>
        <rect x="3.5" y="17.5" fill="#FFFFFF" width="2" height="2"/>
      </svg>
    );
  }

});

module.exports = ServerCluster;
