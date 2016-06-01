// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

var React = require('react');
//var uuid = require('node-uuid');

var IntlMixin = require('grommet/mixins/GrommetIntlMixin');

var CLASS_ROOT = "intel-icon";

var Intel = React.createClass({

  propTypes: {
    a11yTitle: React.PropTypes.string
  },

  mixins: [IntlMixin],

  getDefaultProps: function() {
    return { a11yTitle: 'Intel' };
  },

  render: function() {
    var classes = [CLASS_ROOT];

    if (this.props.className) {
      classes.push(this.props.className);
    }

    var logoTitleId = 'intel-title';// + uuid.v1();

    return (
      <svg className={classes.join(' ')} width="55px" viewBox="0 0 73.8 48.8"
        version="1.1" role="img" aria-labelledby={logoTitleId}>
        <title id={logoTitleId}>{this.getGrommetIntlMessage(this.props.a11yTitle)}</title>
        <path fill="#197DC1" d="M73.5,13.9C70-3.1,37.2-4.1,16.1,8.8v1.4C37.2-0.7,67.1-0.6,69.9,15c0.9,5.2-2,10.5-7.2,13.6v4
    C69,30.4,75.3,23,73.5,13.9 M35.1,43.5C20.5,44.9,5.3,42.8,3.2,31.3C2.1,25.7,4.7,19.7,8.1,16v-2c-6.1,5.4-9.4,12.2-7.5,20.2
    C3,44.6,16,50.4,35.9,48.5c7.9-0.8,18.2-3.3,25.4-7.3v-5.6C54.8,39.5,44,42.7,35.1,43.5z"/>
        <path fill="#197DC1" d="M60.1,11.4h-3.8v17.1c0,2,1,3.8,3.8,4"/>
        <path fill="#197DC1" d="M14.6,17.7h-3.8v11.2c0,2,1,3.8,3.8,4"/>
        <rect x="10.8" y="11.9" fill="#197DC1" width="3.8" height="3.6"/>
        <path fill="#197DC1" d="M37.5,32.7c-3.1,0-4.4-2.2-4.4-4.3V13.6h3.8v4.1h2.9v3.1h-2.9v7.4c0,0.9,0.4,1.4,1.3,1.4h1.5
          v3.2H37.5"/>
        <path fill="#197DC1" d="M47.5,20.6c-1.3,0-2.3,0.7-2.7,1.6c-0.3,0.5-0.3,1-0.4,1.6h5.9C50.2,22.1,49.5,20.6,47.5,20.6
           M44.5,26.4c0,1.9,1.2,3.4,3.4,3.4c1.7,0,2.5-0.5,3.5-1.4l2.3,2.3c-1.5,1.5-3.1,2.4-5.9,2.4c-3.6,0-7.1-2-7.1-7.8c0-5,3-7.8,7-7.8
          c4,0,6.4,3.3,6.4,7.6v1.4L44.5,26.4"/>
        <path fill="#197DC1" d="M24.9,20.7c1.1,0,1.6,0.5,1.6,1.4v10.5h3.8V22.2c0-2.1-1.1-4.5-4.5-4.5H18v15h3.8v-12"/>
        <text transform="matrix(1.0217 0 0 1 62.294 13.9187)" fill="#197DC1" fontFamily="'ArialMT'" fontSize="3.502">®</text>
      </svg>
    );
  }

});

module.exports = Intel;
