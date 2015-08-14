// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

var React = require('react');
var uuid = require('node-uuid');

var IntlMixin = require('grommet/mixins/GrommetIntlMixin');

var CLASS_ROOT = "network-icon";

var Network = React.createClass({

  mixins: [IntlMixin],

  propTypes: {
    a11yTitle: React.PropTypes.string
  },

  getDefaultProps: function() {
    return { a11yTitle: 'Network' };
  },

  render: function() {
    var classes = [CLASS_ROOT];

    if (this.props.className) {
      classes.push(this.props.className);
    }

    var logoTitleId = 'network-title-' + uuid.v1();

    return (
      <svg className={classes.join(' ')} viewBox="0 0 46.9 46.9"
        width="47px" version="1.1" role="img" aria-labelledby={logoTitleId}>
        <title id={logoTitleId}>{this.getGrommetIntlMessage(this.props.a11yTitle)}</title>
        <path fill="#ED2224" d="M0,0v46.9h46.9V0H0z M35.1,37.7L16.6,20.6v15.7h-4.8v-27l18.5,17.1V9.7h4.8V37.7z"/>
      </svg>
    );
  }

});

module.exports = Network;
