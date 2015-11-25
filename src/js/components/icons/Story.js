// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

var React = require('react');
//var uuid = require('node-uuid');

var IntlMixin = require('grommet/mixins/GrommetIntlMixin');

var CLASS_ROOT = "story-icon";

var Story = React.createClass({

  propTypes: {
    a11yTitle: React.PropTypes.string
  },

  mixins: [IntlMixin],

  getDefaultProps: function() {
    return { a11yTitle: 'Story' };
  },

  render: function() {
    var classes = [CLASS_ROOT];

    if (this.props.className) {
      classes.push(this.props.className);
    }

    var logoTitleId = 'story-title';// + uuid.v1();

    return (
      <svg className={classes.join(' ')} fill="#000" viewBox="0 0 154 180.9"
        width="144" version="1.1" role="img" aria-labelledby={logoTitleId}>
        <title id={logoTitleId}>{this.getGrommetIntlMessage(this.props.a11yTitle)}</title>
        <path fill="none" stroke="#000" strokeWidth="10" d="M113,150.9H16.1c-6.1,0-11.1-5-11.1-11.1V16.1
  C5,10,10,5,16.1,5h68.3l19.8,19.9l19.8,19.9v95C124.1,145.9,119.1,150.9,113,150.9z M109.8,30h28.1c6.1,0,11.1,5,11.1,11.1v123.7
  c0,6.1-5,11.1-11.1,11.1H41c-6.1,0-11.1-5-11.1-11.1v-13.5 M83.4,45.7 M77.8,5v46.4h46.3 M24.8,51.4h33.1 M24.8,78h79.4 M24.8,104.5
  H91"/>
      </svg>
    );
  }

});

module.exports = Story;
