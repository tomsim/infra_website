// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

var React = require('react');
var uuid = require('node-uuid');

var IntlMixin = require('grommet/mixins/GrommetIntlMixin');

var CLASS_ROOT = "slack-icon";

var Slack = React.createClass({

  mixins: [IntlMixin],

  propTypes: {
    a11yTitle: React.PropTypes.string
  },

  getDefaultProps: function() {
    return { a11yTitle: 'Slack' };
  },

  render: function() {
    var classes = [CLASS_ROOT];

    if (this.props.className) {
      classes.push(this.props.className);
    }

    var logoTitleId = 'slack-title-' + uuid.v1();

    return (
      <svg className={classes.join(' ')} viewBox="0 0 30 30"
        width="30px" version="1.1" role="img" aria-labelledby={logoTitleId}>
        <title id={logoTitleId}>{this.getGrommetIntlMessage(this.props.a11yTitle)}</title>
        <path fill="#84356D" d="M27.5,18.8h-3.8v-7.5h3.8c1.4,0,2.5-1.1,2.5-2.5s-1.1-2.5-2.5-2.5h-3.8V2.5c0-1.4-1.1-2.5-2.5-2.5
  c-1.4,0-2.5,1.1-2.5,2.5v3.8h-7.5V2.5c0-1.4-1.1-2.5-2.5-2.5C7.4,0,6.2,1.1,6.2,2.5v3.8H2.5C1.1,6.2,0,7.4,0,8.8s1.1,2.5,2.5,2.5
  h3.8v7.5H2.5c-1.4,0-2.5,1.1-2.5,2.5s1.1,2.5,2.5,2.5h3.8v3.8c0,1.4,1.1,2.5,2.5,2.5c1.4,0,2.5-1.1,2.5-2.5v-3.8h7.5v3.8
  c0,1.4,1.1,2.5,2.5,2.5c1.4,0,2.5-1.1,2.5-2.5v-3.8h3.8c1.4,0,2.5-1.1,2.5-2.5S28.9,18.8,27.5,18.8z M11.2,18.8v-7.5h7.5v7.5H11.2z"
  />
      </svg>
    );
  }

});

module.exports = Slack;
