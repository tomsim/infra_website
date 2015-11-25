// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

var React = require('react');
//var uuid = require('node-uuid');

var IntlMixin = require('grommet/mixins/GrommetIntlMixin');

var CLASS_ROOT = "console-icon";

var Console = React.createClass({

  propTypes: {
    a11yTitle: React.PropTypes.string
  },

  mixins: [IntlMixin],

  getDefaultProps: function() {
    return { a11yTitle: 'Console' };
  },

  render: function() {
    var classes = [CLASS_ROOT];

    if (this.props.className) {
      classes.push(this.props.className);
    }

    var logoTitleId = 'console-title'; //+ uuid.v1();

    return (
      <svg className={classes.join(' ')} fill="#000"
        viewBox="0 0 220 220" width="144" version="1.1"
        role="img" aria-labelledby={logoTitleId}>
        <title id={logoTitleId}>{this.getGrommetIntlMessage(this.props.a11yTitle)}</title>
        <path fill="none" stroke="#000" strokeWidth="10" d="M215,36.2H5h183.1H215z M36.2,5v31.2 M199,176.8H21
  c-8.8,0-16-7.2-16-16V21c0-8.8,7.2-16,16-16h178c8.8,0,16,7.2,16,16v139.8C215,169.7,207.8,176.8,199,176.8z M43.2,215h133.6
   M48.3,126.3l23.4-23.4L48.3,79.5 M94.4,126.3h32.1 M174.4,102.9h-80 M94.4,79.5h53"/>
      </svg>
    );
  }

});

module.exports = Console;
