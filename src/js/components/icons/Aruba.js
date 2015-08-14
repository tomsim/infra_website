// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

var React = require('react');
var uuid = require('node-uuid');

var IntlMixin = require('grommet/mixins/GrommetIntlMixin');

var CLASS_ROOT = "aruba-icon";

var Aruba = React.createClass({

  mixins: [IntlMixin],

  propTypes: {
    a11yTitle: React.PropTypes.string
  },

  getDefaultProps: function() {
    return { a11yTitle: 'Aruba' };
  },

  render: function() {
    var classes = [CLASS_ROOT];

    if (this.props.className) {
      classes.push(this.props.className);
    }

    var logoTitleId = 'aruba-title-' + uuid.v1();

    return (
      <svg className={classes.join(' ')} width="115px" viewBox="0 0 115.3 30"
        version="1.1" role="img" aria-labelledby={logoTitleId}>
        <title id={logoTitleId}>{this.getGrommetIntlMessage(this.props.a11yTitle)}</title>
        <path fill="#F79421" d="M65.4,12.5V5.8h-0.1c-1,0.5-5,2-5.2,6.9v-0.1v0v5.7c0,3.5-2.6,6.3-5.8,6.3c-3.2,0-5.8-2.8-5.8-6.3v-2.7
  c-0.1-5.8-5.3-7.1-5.3-7.1v9.9h0c0,6.4,5,11.6,11.1,11.6c6.1,0,11-5.2,11.1-11.6h0L65.4,12.5L65.4,12.5z M37,6.8c-3.1,0-6,1.2-8,3.2
  c-1.4-1-3.6-1.1-3.6-1.1v9.5v0.2v11.3h5.3l0-11.5c0-3.5,2.8-6.3,6.3-6.3c1.6,0,3,0.6,4.1,1.6V7.5C39.8,7,38.4,6.8,37,6.8z M11.6,6.8
  C5.2,6.8,0,11.9,0,18.3c0,6.4,5.2,11.6,11.6,11.6c2.6,0,5.1-0.9,7-2.4c1.2,2,4.5,2.4,4.5,2.4V28v-9.2v-0.5
  C23.1,11.9,17.9,6.8,11.6,6.8z M11.6,24.7c-3.5,0-6.4-2.9-6.4-6.4s2.9-6.4,6.4-6.4c3.5,0,6.4,2.9,6.4,6.4
  C18,21.8,15.1,24.7,11.6,24.7z M103.8,6.8c-6.4,0-11.6,5.2-11.6,11.6c0,6.4,5.2,11.6,11.6,11.6c2.6,0,5.1-0.9,7-2.4
  c1.2,2,4.5,2.4,4.5,2.4V28v-9.2v-0.5C115.3,11.9,110.2,6.8,103.8,6.8z M103.8,24.7c-3.5,0-6.4-2.9-6.4-6.4s2.9-6.4,6.4-6.4
  c3.5,0,6.4,2.9,6.4,6.4C110.2,21.8,107.3,24.7,103.8,24.7z M79.3,6.8c-2.4,0-4.5,0.7-6.4,1.9V6.9C72.7,2,68.9,0.5,67.9,0h-0.1v18.3
  v0.7v9V30c0,0,3.5-0.4,4.8-2.3c1.9,1.4,4.3,2.2,6.8,2.2c6.4,0,11.6-5.2,11.6-11.6C90.9,11.9,85.7,6.8,79.3,6.8z M79.3,24.7
  c-3.5,0-6.4-2.9-6.4-6.4s2.9-6.4,6.4-6.4c3.5,0,6.4,2.9,6.4,6.4C85.7,21.8,82.9,24.7,79.3,24.7z"/>
      </svg>
    );
  }

});

module.exports = Aruba;
