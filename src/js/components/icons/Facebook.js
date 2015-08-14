// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

var React = require('react');
var uuid = require('node-uuid');

var IntlMixin = require('grommet/mixins/GrommetIntlMixin');

var CLASS_ROOT = "facebook-icon";

var Facebook = React.createClass({

  mixins: [IntlMixin],

  propTypes: {
    a11yTitle: React.PropTypes.string
  },

  getDefaultProps: function() {
    return { a11yTitle: 'Facebook' };
  },

  render: function() {
    var classes = [CLASS_ROOT];

    if (this.props.className) {
      classes.push(this.props.className);
    }

    var logoTitleId = 'facebook-title-' + uuid.v1();

    return (
      <svg className={classes.join(' ')} width="15px" viewBox="0 0 14.3 27.5"
        version="1.1" role="img" aria-labelledby={logoTitleId}>
        <title id={logoTitleId}>{this.getGrommetIntlMessage(this.props.a11yTitle)}</title>
        <path fill="#2460AD" d="M9.3,27.5V15h4.2l0.6-4.9H9.3V6.9c0-1.4,0.4-2.4,2.4-2.4l2.6,0V0.2c-0.4-0.1-2-0.2-3.8-0.2
  C6.8,0,4.2,2.3,4.2,6.5v3.6H0V15h4.2v12.5H9.3z"/>
      </svg>
    );
  }

});

module.exports = Facebook;
