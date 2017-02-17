var React = require('react');

var IntlMixin = require('grommet/mixins/GrommetIntlMixin');

var Footer = React.createClass({

  mixins: [IntlMixin],

  render: function() {
    var colorIndex = 'neutral-3';
    if (this.props.float) {
      colorIndex += '-a';
    }

    var lfFooterString = `
    <div id="lfcollabprojects-footer">
      <div class="gray-diagonal">
        <div class="footer-inner">
          <p>&copy; 2016 Linux Foundation</p>
          <p>&copy; 2015-2016 Hewlett Packard Enterprise Development LP</p>
          <p>&copy; 2016-2017 DellEMC</p>
          <p>Linux Foundation is a registered trademark of The Linux Foundation.</p>
          <p>Linux is a registered <a href="http://www.linuxfoundation.org/programs/legal/trademark" title="Linux Mark Institute">trademark</a> of Linus Torvalds.</p>
          <p><a href="http://www8.hp.com/us/en/hpe/legal/terms-of-use.html" className="scroll">Terms of use</a> | <a href="https://www.hpe.com/us/en/legal/privacy.html" className="scroll">Privacy</a></p>
        </div>
      </div>
    </div>`;

    return (
      <div>
      <div dangerouslySetInnerHTML={{ __html: lfFooterString }} />
      </div>
    );
  }
});

module.exports = Footer;
