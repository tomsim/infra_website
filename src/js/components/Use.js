var React = require('react');

var Article = require('grommet/components/Article');
var Header = require('./Header');
var Section = require('grommet/components/Section');

var IntlMixin = require('grommet/mixins/GrommetIntlMixin');

var Footer = require('./Footer');

var UseBody = require('./MarkdownContentsMap').use[0].component;

var Use = React.createClass({

  mixins: [IntlMixin],

  render: function() {
    return (
      <Article>

        <Header colorIndex="neutral-1" menuMedia="lap-and-up" />

        <Section appCentered={true}>
          <h1>{this.getGrommetIntlMessage('Use')}</h1>
          <UseBody />
        </Section>

        <Footer />
      </Article>
    );
  }
});

module.exports = Use;
