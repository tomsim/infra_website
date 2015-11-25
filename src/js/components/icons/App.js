// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

var React = require('react');
//var uuid = require('node-uuid');

var IntlMixin = require('grommet/mixins/GrommetIntlMixin');

var CLASS_ROOT = "app-icon";

var App = React.createClass({

  propTypes: {
    a11yTitle: React.PropTypes.string
  },

  mixins: [IntlMixin],

  getDefaultProps: function() {
    return { a11yTitle: 'App' };
  },

  render: function() {
    var classes = [CLASS_ROOT];

    if (this.props.className) {
      classes.push(this.props.className);
    }

    var logoTitleId = 'app-title';// + uuid.v1();

    return (
      <svg className={classes.join(' ')} fill="#fff" viewBox="0 0 24 20"
        width="24px" version="1.1" role="img" aria-labelledby={logoTitleId}>
        <title id={logoTitleId}>{this.getGrommetIntlMessage(this.props.a11yTitle)}</title>
        <path fill="none" stroke="#FFFFFF" strokeWidth="2" d="M21,19H3c-1.1,0-2-0.9-2-2V3c0-1.1,0.9-2,2-2h18
    c1.1,0,2,0.9,2,2v14C23,18.1,22.1,19,21,19z M1,5h21 M5,1v3 M9,1v3 M13,1v3"/>
      </svg>
    );
  }

});

module.exports = App;
