var React = require('react');

var Article = require('grommet/components/Article');
var Section = require('grommet/components/Section');
var IntlMixin = require('grommet/mixins/GrommetIntlMixin');
var Locale = require('grommet/utils/Locale');

var Header = require('./Header');
var Footer = require('./Footer');

var locale = Locale.getCurrentLocale();
var CommunityBody;
try {
  CommunityBody = require('../../markdown/' + locale + '/Community');
} catch (e) {
  CommunityBody = require('../../markdown/en-US/Community');
}

var Community = React.createClass({

  mixins: [IntlMixin],

  render: function() {
    return (
      <Article>

        <Header colorIndex="neutral-1" />

        <Section appCentered={true}>
          <h1>{this.getGrommetIntlMessage('Community')}</h1>
          <CommunityBody />
        </Section>

        <Footer />
      </Article>
    );
  }
});

module.exports = Community;
