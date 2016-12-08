// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var React = require('react');
//var uuid = require('node-uuid');

var IntlMixin = require('grommet/mixins/GrommetIntlMixin');

var CLASS_ROOT = "dell-icon";

var Dell = React.createClass({

  propTypes: {
    a11yTitle: React.PropTypes.string
  },

  mixins: [IntlMixin],

  getDefaultProps: function() {
    return { a11yTitle: 'Cavium' };
  },

  render: function() {
    var classes = [CLASS_ROOT];

    if (this.props.className) {
      classes.push(this.props.className);
    }

    var svgString = `<svg
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xml:space="preserve"
   viewBox="0 0 453 146"
   width="120 px"
   id="svg2"
   version="1.1"><metadata
     id="metadata8"><rdf:RDF><cc:Work
         rdf:about=""><dc:format>image/svg+xml</dc:format><dc:type
           rdf:resource="http://purl.org/dc/dcmitype/StillImage" /></cc:Work></rdf:RDF></metadata><defs
     id="defs6"><clipPath
       id="clipPath18"
       clipPathUnits="userSpaceOnUse"><path
         id="path16"
         d="M 0,110 H 617 V 0 H 0 Z" /></clipPath></defs><g
     transform="matrix(1.3333333,0,0,-1.3333333,0,146.66667)"
     id="g10"><g
       id="g12"><g
         clip-path="url(#clipPath18)"
         id="g14"><g
           transform="translate(404.9356,8.8136)"
           id="g20"><path
             id="path22"
             style="fill:#808080;fill-opacity:1;fill-rule:nonzero;stroke:none"
             d="m 0,0 v 4.071 l -1.363,1.363 h -50.261 l -1.363,1.357 v 35.321 l 1.363,1.357 h 47.547 l 1.357,1.363 v 4.072 l -1.357,1.363 h -47.547 l -1.363,1.357 v 33.964 l 1.363,1.357 H -1.363 L 0,88.302 v 4.077 l -1.363,1.357 h -58.41 l -1.363,-1.357 V 0 l 1.363,-1.363 h 58.41 z m 114.111,0 v 92.379 l -1.351,1.357 h -9.512 L 101.891,92.379 66.564,9.512 H 65.207 L 29.886,92.379 28.523,93.736 H 19.018 L 17.655,92.379 V 0 l 1.363,-1.363 h 5.434 L 25.809,0 v 78.79 h 1.363 L 61.13,0 62.493,-1.363 h 6.792 L 70.642,0 104.605,78.79 h 1.358 V 0 l 1.363,-1.363 h 5.434 z m 59.779,-2.72 c 19.023,0 33.964,9.511 36.678,29.886 l -1.351,1.363 h -5.435 l -1.363,-1.363 C 199.705,12.232 190.193,4.071 173.89,4.071 c -20.375,0 -35.321,14.947 -35.321,42.119 0,27.172 14.946,42.112 35.321,42.112 16.303,0 25.815,-8.149 28.529,-21.732 l 1.363,-1.363 h 5.435 l 1.351,1.363 c -2.714,19.018 -17.655,28.523 -36.678,28.523 -23.095,0 -43.475,-16.303 -43.475,-48.903 0,-32.607 20.38,-48.91 43.475,-48.91" /></g><g
           transform="translate(21.6,26.35)"
           id="g24"><path
             id="path26"
             style="fill:#007db8;fill-opacity:1;fill-rule:nonzero;stroke:none"
             d="M 0,0 V 57.3 H 16.95 C 31.282,57.3 42.9,44.473 42.9,28.65 42.9,12.827 31.282,0 16.95,0 Z m 16.95,-18.9 c 22.128,0 40.725,15.115 46.031,35.584 L 116.782,-25.35 170.55,16.658 V -18.9 H 231.9 V 0 h -39.75 v 76.2 h -21.6 V 40.642 L 118.975,0.348 107.441,9.359 132.132,28.65 159.016,49.654 143.666,61.646 92.091,21.352 80.557,30.363 132.132,70.658 116.782,82.65 62.981,40.616 C 57.675,61.085 39.078,76.2 16.95,76.2 H -21.6 v -95.1 z m 222.3,95.1 h 21.6 M 300.6,0 v -18.9 h -61.35 v 95.1 h 21.6 V 0 Z" /></g></g></g></g></svg>`;
    return (
        <div dangerouslySetInnerHTML={{ __html: svgString }} />
    );
  }

});

module.exports = Dell;
