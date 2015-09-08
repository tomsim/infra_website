var React = require('react');
var GrommetFooter = require('grommet/components/Footer');
var Box = require('grommet/components/Box');

var IntlMixin = require('grommet/mixins/GrommetIntlMixin');

var Footer = React.createClass({

  mixins: [IntlMixin],

  render: function() {
    var colorIndex = 'accent-2';
    if (this.props.float) {
      colorIndex += '-a';
    }

    return (
      <GrommetFooter appCentered={true} align="start" float={this.props.float}
        justify="between" pad={{ vertical: "small", horizontal: "large" }} colorIndex={colorIndex}>
        <Box direction="row">
          <p>This work is licensed under the <b><a href="http://creativecommons.org/licenses/by/4.0/legalcode">Creative Commons Attribution 4.0 International License</a></b>.</p>
          <p>© 2015 Hewlett Packard Enterprise Company, L.P.</p>
        </Box>
      </GrommetFooter>
    );
  }
});

module.exports = Footer;
