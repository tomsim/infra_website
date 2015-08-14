// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

var React = require('react');
var uuid = require('node-uuid');

var IntlMixin = require('grommet/mixins/GrommetIntlMixin');

var CLASS_ROOT = "twitter-icon";

var Twitter = React.createClass({

  mixins: [IntlMixin],

  propTypes: {
    a11yTitle: React.PropTypes.string
  },

  getDefaultProps: function() {
    return { a11yTitle: 'Twitter' };
  },

  render: function() {
    var classes = [CLASS_ROOT];

    if (this.props.className) {
      classes.push(this.props.className);
    }

    var logoTitleId = 'twitter-title-' + uuid.v1();

    return (
      <svg className={classes.join(' ')} width="36px" viewBox="0 0 30 24.4"
        version="1.1" role="img" aria-labelledby={logoTitleId}>
        <title id={logoTitleId}>{this.getGrommetIntlMessage(this.props.a11yTitle)}</title>
        <path fill="#4999D4" d="M30,2.9c-1.1,0.5-2.3,0.8-3.5,1c1.3-0.8,2.2-2,2.7-3.4c-1.2,0.7-2.5,1.2-3.9,1.5C24.1,0.7,22.5,0,20.8,0
  c-3.4,0-6.2,2.8-6.2,6.2c0,0.5,0.1,1,0.2,1.4C9.7,7.3,5.1,4.9,2.1,1.1C1.6,2,1.3,3.1,1.3,4.2c0,2.1,1.1,4,2.7,5.1C3,9.3,2,9,1.2,8.6
  c0,0,0,0.1,0,0.1c0,3,2.1,5.5,4.9,6c-0.5,0.1-1.1,0.2-1.6,0.2c-0.4,0-0.8,0-1.2-0.1c0.8,2.4,3.1,4.2,5.7,4.3
  c-2.1,1.7-4.8,2.6-7.6,2.6c-0.5,0-1,0-1.5-0.1c2.7,1.7,6,2.8,9.4,2.8c11.3,0,17.5-9.4,17.5-17.5c0-0.3,0-0.5,0-0.8
  C28.1,5.2,29.2,4.1,30,2.9z"/>
      </svg>
    );
  }

});

module.exports = Twitter;
