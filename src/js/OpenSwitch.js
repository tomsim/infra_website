var React = require('react');
var App = require('grommet/components/App');
var RouteHandler = require('react-router').RouteHandler;

var IntlMixin = require('grommet/mixins/GrommetIntlMixin');

var OpenSwitch = React.createClass({

  contextTypes: {
    router: React.PropTypes.func.isRequired
  },

  mixins: [IntlMixin],

  render: function() {
    return (
      <App className="openswitch">
        <RouteHandler />
      </App>
    );
  }
});

module.exports = OpenSwitch;
