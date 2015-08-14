var React = require('react');

var Article = require('grommet/components/Article');
var Header = require('./Header');
var Section = require('grommet/components/Section');
var TBD = require('grommet/components/TBD');

var IntlMixin = require('grommet/mixins/GrommetIntlMixin');

var Footer = require('./Footer');

var Develop = React.createClass({

  mixins: [IntlMixin],

  render: function() {
    return (
      <Article>

        <Header colorIndex="neutral-1" />

        <Section appCentered={true}>
          <h1>{this.getGrommetIntlMessage('Develop')}</h1>
          <p>
            Reference implementation for Open Switch!
          </p>
        </Section>

        <Section>
          <TBD />
        </Section>

        <Footer />
      </Article>
    );
  }
});

module.exports = Develop;
