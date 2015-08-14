var React = require('react');
var GrommetFooter = require('grommet/components/Footer');

var IntlMixin = require('grommet/mixins/GrommetIntlMixin');

var Footer = React.createClass({

  mixins: [IntlMixin],

  render: function() {
    return (
      <GrommetFooter appCentered={true} align="start"
        justify="between" pad="small" colorIndex="neutral-2" tag="aside">
        <div style={{ paddingRight: '30px' }}>
          This work is licensed under the <b><a href="http://creativecommons.org/licenses/by/4.0/legalcode">Creative Commons Attribution 4.0 International License</a></b>.
        </div>
        <div>
          © 2015 Hewlett Packard Enterprise Company, L.P.
        </div>
      </GrommetFooter>
    );
  }
});

module.exports = Footer;

