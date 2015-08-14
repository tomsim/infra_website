// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

var React = require('react');
var uuid = require('node-uuid');

var IntlMixin = require('grommet/mixins/GrommetIntlMixin');

var CLASS_ROOT = "database-icon";

var Database = React.createClass({

  mixins: [IntlMixin],

  propTypes: {
    a11yTitle: React.PropTypes.string
  },

  getDefaultProps: function() {
    return { a11yTitle: 'Database' };
  },

  render: function() {
    var classes = [CLASS_ROOT];

    if (this.props.className) {
      classes.push(this.props.className);
    }

    var logoTitleId = 'database-title-' + uuid.v1();

    return (
      <svg className={classes.join(' ')} fill="#fff" viewBox="0 0 24 24"
        width="24px" version="1.1" role="img" aria-labelledby={logoTitleId}>
        <title id={logoTitleId}>{this.getGrommetIntlMessage(this.props.a11yTitle)}</title>
        <path fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" d="M11.6,11.6L6.1,8.9
    C4.6,8.1,4.6,6,6.1,5.3l5.5-2.8c0.6-0.3,1.2-0.3,1.8,0L19,5.3c1.5,0.7,1.5,2.8,0,3.6l-5.5,2.8C12.9,11.9,12.2,11.9,11.6,11.6z
     M7.5,9.6l-1.4,0.7c-1.5,0.7-1.5,2.8,0,3.6l1.4,0.7l4.1,2.1c0.6,0.3,1.2,0.3,1.8,0l4.1-2.1l1.4-0.7c1.5-0.7,1.5-2.8,0-3.6l-1.4-0.7
     M7.5,14.6l-1.4,0.7c-1.5,0.7-1.5,2.8,0,3.6l5.5,2.8c0.6,0.3,1.2,0.3,1.8,0l5.5-2.8c1.5-0.7,1.5-2.8,0-3.6l-1.4-0.7"/>
      </svg>
    );
  }

});

module.exports = Database;
