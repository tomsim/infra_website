// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

var React = require('react');
//var uuid = require('node-uuid');

var IntlMixin = require('grommet/mixins/GrommetIntlMixin');

var CLASS_ROOT = "community-icon";

var Community = React.createClass({

  propTypes: {
    a11yTitle: React.PropTypes.string
  },

  mixins: [IntlMixin],

  getDefaultProps: function() {
    return { a11yTitle: 'Community' };
  },

  render: function() {
    var classes = [CLASS_ROOT];

    if (this.props.className) {
      classes.push(this.props.className);
    }

    var logoTitleId = 'community-title';// + uuid.v1();

    return (
      <svg className={classes.join(' ')} fill="#fff"
        viewBox="0 0 258 216.7" width="144" version="1.1"
        role="img" aria-labelledby={logoTitleId}>
        <title id={logoTitleId}>{this.getGrommetIntlMessage(this.props.a11yTitle)}</title>
        <path fill="none" stroke="#fff" strokeWidth="10" d="M170.3,77.3c0,22.8-18.5,41.3-41.3,41.3
      s-41.3-18.5-41.3-41.3S106.2,36,129,36S170.3,54.5,170.3,77.3z M191,179.7c0-35.3-27.2-61.1-62.5-61.1h1.4
      c-35.3,0-62.9,25.8-62.9,61.1v15.9c0,8.8,7.2,16,16,16h92c8.8,0,16-7.2,16-16V179.7z M169.9,81.8c0.1,0,0.1,0.1,0.2,0.1
      c6,3.6,13,5.7,20.4,5.8c0.2,0,0.3,0,0.5,0c22.8,0,41.3-18.5,41.3-41.3S213.8,5,191,5c-21.3,0-38.9,16.1-41,36.8 M191,180.7h46
      c8.8,0,16-7.2,16-16v-15.9c0-35.3-27.2-61.1-62.5-61.1h0.5 M108,41.8C105.9,21.1,88.3,5,67,5C44.2,5,25.7,23.5,25.7,46.3
      S44.2,87.7,67,87.7c0.2,0,0.3,0,0.5,0c7.3-0.1,14.4-2.2,20.4-5.8c0.1,0,0.1-0.1,0.2-0.1 M67,87.7h0.5C32.2,87.7,5,113.4,5,148.7
      v15.9c0,8.8,7.2,16,16,16h46"/>
      </svg>
    );
  }

});

module.exports = Community;
