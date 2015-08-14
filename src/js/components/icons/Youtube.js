// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

var React = require('react');
var uuid = require('node-uuid');

var IntlMixin = require('grommet/mixins/GrommetIntlMixin');

var CLASS_ROOT = "Youtube-icon";

var Youtube = React.createClass({

  mixins: [IntlMixin],

  propTypes: {
    a11yTitle: React.PropTypes.string
  },

  getDefaultProps: function() {
    return { a11yTitle: 'Youtube' };
  },

  render: function() {
    var classes = [CLASS_ROOT];

    if (this.props.className) {
      classes.push(this.props.className);
    }

    var logoTitleId = 'youtube-title-' + uuid.v1();

    return (
      <svg className={classes.join(' ')} viewBox="0 0 35 24.6"
        width="35px" version="1.1" role="img" aria-labelledby={logoTitleId}>
        <title id={logoTitleId}>{this.getGrommetIntlMessage(this.props.a11yTitle)}</title>
        <path fill="#EF4025" d="M34.7,5.3c0,0-0.3-2.4-1.4-3.5c-1.3-1.4-2.8-1.4-3.5-1.5C24.9,0,17.5,0,17.5,0h0c0,0-7.3,0-12.2,0.4
      C4.6,0.4,3.1,0.4,1.7,1.8c-1,1.1-1.4,3.5-1.4,3.5S0,8.1,0,11v2.7c0,2.8,0.4,5.7,0.4,5.7s0.3,2.4,1.4,3.5c1.3,1.4,3.1,1.4,3.9,1.5
      c2.8,0.3,11.9,0.4,11.9,0.4s7.4,0,12.3-0.4c0.7-0.1,2.2-0.1,3.5-1.5c1-1.1,1.4-3.5,1.4-3.5s0.3-2.8,0.3-5.7V11
      C35,8.1,34.7,5.3,34.7,5.3z M13.6,17.1l0-10.4l10,5.2L13.6,17.1z"/>
      </svg>
    );
  }

});

module.exports = Youtube;
