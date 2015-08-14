// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

var React = require('react');
var uuid = require('node-uuid');

var IntlMixin = require('grommet/mixins/GrommetIntlMixin');

var Grommet = React.createClass({

  mixins: [IntlMixin],

  propTypes: {
    small: React.PropTypes.bool,
    a11yTitle: React.PropTypes.string
  },

  getDefaultProps: function() {
    return { a11yTitle: 'Open Switch' };
  },

  render: function() {

    var logoTitleId = 'openswitch-logo-title-' + uuid.v1();

    var logo = (
      <svg version="1.1" viewBox="0 0 196.203 220" fill="none"
        stroke="#fff" height="100%" width="120px"
        role="img" aria-labelledby={logoTitleId}>
        <title id={logoTitleId}>{this.getGrommetIntlMessage(this.props.a11yTitle)}</title>
        <path strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" d="
          M31.317,122.094l20.234-20.234l20.234,20.234 M51.551,190.888V101.86"
          dangerouslySetInnerHTML={{__html: '<animate attributeName="d" from="M31.317,161.094l20.234-20.234l20.234,20.234 M51.551,190.888v-44.514" to="M31.317,122.094l20.234-20.234l20.234,20.234 M51.551,190.888V101.86" dur="0.8s"/>'}}>
        </path>
        <path strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" d="
          M124.418,122.094l20.234-20.234l20.234,20.234 M144.652,101.86v89.028"
          dangerouslySetInnerHTML={{__html: '<animate attributeName="d" from="M124.418,161.094l20.234-20.234l20.234,20.234 M144.652,153.03v37.858" to="M124.418,122.094l20.234-20.234l20.234,20.234 M144.652,101.86v89.028" dur="0.8s"/>'}}>
        </path>
        <path strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" d="
          M77.868,159.357l20.234-20.234l20.234,20.234 M98.101,139.124V215"
          dangerouslySetInnerHTML={{__html: '<animate attributeName="d" from="M77.868,127.357l20.234-20.234l20.234,20.234 M98.101,107.874V215" to="M77.868,159.357l20.234-20.234l20.234,20.234 M98.101,139.124V215" dur="0.8s"/>'}}>
        </path>
        <path strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" d="M13.093,51.575L90.008,7.169
          c5.008-2.892,11.179-2.892,16.187,0l76.914,44.407c5.008,2.892,8.093,8.235,8.093,14.018v88.813c0,5.783-3.085,11.127-8.093,14.018
          l-76.914,44.407c-5.008,2.892-11.179,2.892-16.187,0l-76.914-44.407C8.085,165.533,5,160.19,5,154.407V65.593
          C5,59.81,8.085,54.467,13.093,51.575z"/>
        <circle strokeWidth="10" cx="98.335" cy="69.923" r="20"/>
      </svg>
    );

    if (this.props.small) {
      logo = (
        <svg version="1.1" viewBox="0 0 52 58.135" fill="none"
          stroke="#fff" height="100%" width="36px"
          role="img" aria-labelledby={logoTitleId}>
          <title id={logoTitleId}>{this.getGrommetIntlMessage(this.props.a11yTitle)}</title>
          <path strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" d="
            M8,28.458l6-6l6,6 M14,49.919V22.458"/>
          <path strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" d="
            M20,41.447l6-6l6,6 M26,35.447v20.687"/>
          <path strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" d="M4.086,14.006L23.914,2.559
            c1.291-0.745,2.882-0.745,4.173,0l19.827,11.447C49.205,14.752,50,16.129,50,17.62v22.895c0,1.491-0.795,2.868-2.086,3.614
            L28.086,55.576c-1.291,0.745-2.882,0.745-4.173,0L4.086,44.128C2.795,43.383,2,42.005,2,40.515V17.62
            C2,16.129,2.795,14.752,4.086,14.006z"/>
          <circle strokeWidth="4" cx="34.222" cy="23.231" r="6"/>
        </svg>
      );
    }

    return (
      <div>
        {logo}
      </div>
    );
  }

});

module.exports = Grommet;
