var React = require('react');

var Article = require('grommet/components/Article');
var Section = require('grommet/components/Section');
var IntlMixin = require('grommet/mixins/GrommetIntlMixin');

var Header = require('./Header');
var Footer = require('./Footer');

var CommunityBody = require('./MarkdownContentsMap').community[0].component;

var Community = React.createClass({

  mixins: [IntlMixin],

  render: function() {
    return (
      <Article>

        <Header colorIndex="neutral-1" menuMedia="lap-and-up" />

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
