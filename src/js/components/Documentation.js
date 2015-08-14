var React = require('react');

var Article = require('grommet/components/Article');
var Section = require('grommet/components/Section');
var Box = require('grommet/components/Box');
var Menu = require('grommet/components/Menu');
var Anchor = require('grommet/components/Anchor');

var IntlMixin = require('grommet/mixins/GrommetIntlMixin');

var DocumentationBody = require('../../markdown/en-US/Documentation');

var Header = require('./Header');
var Footer = require('./Footer');

var Documentation = React.createClass({

  mixins: [IntlMixin],

  _onClick: function () {
    //no-op
  },

  render: function() {

    return (
      <Article>

        <Header colorIndex="neutral-1" />

        <Section appCentered={true} separator="bottom">
          <h1>{this.getGrommetIntlMessage('Documentation')}</h1>
          <p>
            Reference implementation for Open Switch!
          </p>
        </Section>

        <Section appCentered={true} direction="row">
          <Box>
            <Menu>
              <Anchor onClick={this._onClick}>Introduction</Anchor>
              <Anchor primary={true} onClick={this._onClick}>Overview</Anchor>
              <Anchor onClick={this._onClick}>Getting Started</Anchor>
              <Anchor onClick={this._onClick}>Principles</Anchor>
              <Anchor onClick={this._onClick}>Architecture</Anchor>
              <Anchor onClick={this._onClick}>The rules</Anchor>
              <Anchor onClick={this._onClick}>FAQ</Anchor>
            </Menu>
          </Box>
          <Box pad={{vertical: 'small', horizontal: 'large'}} className="document__body">
            <DocumentationBody />
          </Box>
        </Section>

        <Footer />
      </Article>
    );
  }
});

module.exports = Documentation;
