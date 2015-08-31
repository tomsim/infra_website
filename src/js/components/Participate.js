var React = require('react');

var Article = require('grommet/components/Article');
var Header = require('./Header');
var Section = require('grommet/components/Section');

var IntlMixin = require('grommet/mixins/GrommetIntlMixin');

var Footer = require('./Footer');

var ParticipateBody = require('./MarkdownContentsMap').participate[0].component;

var Participate = React.createClass({

  mixins: [IntlMixin],

  render: function() {
    return (
      <Article>

        <Header colorIndex="neutral-1" menuMedia="lap-and-up" />

        <Section appCentered={true}>
          <h1>{this.getGrommetIntlMessage('Participate')}</h1>
          <ParticipateBody />
        </Section>

        <Footer />
      </Article>
    );
  }
});

module.exports = Participate;
