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
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   viewBox="0 0 147.66669 40.66667"
   height="40.666672"
   width="147.66669"
   xml:space="preserve"
   id="svg2"
   version="1.1"
   inkscape:version="0.91 r13725"
   sodipodi:docname="DellEMC_Logo_Prm_Blue_Gry_rgb[76].svg"><sodipodi:namedview
     pagecolor="#ffffff"
     bordercolor="#666666"
     borderopacity="1"
     objecttolerance="10"
     gridtolerance="10"
     guidetolerance="10"
     inkscape:pageopacity="0"
     inkscape:pageshadow="2"
     inkscape:window-width="1337"
     inkscape:window-height="788"
     id="namedview3348"
     showgrid="false"
     inkscape:zoom="1.5388979"
     inkscape:cx="336.27963"
     inkscape:cy="73.333336"
     inkscape:window-x="0"
     inkscape:window-y="300"
     inkscape:window-maximized="0"
     inkscape:current-layer="g14" /><metadata
     id="metadata8"><rdf:RDF><cc:Work
         rdf:about=""><dc:format>image/svg+xml</dc:format><dc:type
           rdf:resource="http://purl.org/dc/dcmitype/StillImage" /><dc:title></dc:title></cc:Work></rdf:RDF></metadata><defs
     id="defs6"><clipPath
       id="clipPath18"
       clipPathUnits="userSpaceOnUse"><path
         id="path16"
         d="M 0,110 617,110 617,0 0,0 Z"
         inkscape:connector-curvature="0" /></clipPath></defs><g
     transform="matrix(0.18995995,0,0,-0.32250887,556.89207,9.1143182)"
     id="g10"><g
       id="g12"
       transform="translate(3.4208037,-336.48446)"><g
         clip-path="url(#clipPath18)"
         id="g14"
         transform="translate(-2784.5342,247.82988)"><g
           transform="translate(404.9356,8.8136)"
           id="g20"><path
             id="path22"
             style="fill:#808080;fill-opacity:1;fill-rule:nonzero;stroke:none"
             d="m 0,0 0,4.071 -1.363,1.363 -50.261,0 -1.363,1.357 0,35.321 1.363,1.357 47.547,0 1.357,1.363 0,4.072 -1.357,1.363 -47.547,0 -1.363,1.357 0,33.964 1.363,1.357 50.261,0 1.363,1.357 0,4.077 -1.363,1.357 -58.41,0 -1.363,-1.357 0,-92.379 1.363,-1.363 58.41,0 z m 114.111,0 0,92.379 -1.351,1.357 -9.512,0 -1.357,-1.357 -35.327,-82.867 -1.357,0 -35.321,82.867 -1.363,1.357 -9.505,0 -1.363,-1.357 0,-92.379 1.363,-1.363 5.434,0 1.357,1.363 0,78.79 1.363,0 L 61.13,0 l 1.363,-1.363 6.792,0 1.357,1.363 33.963,78.79 1.358,0 0,-78.79 1.363,-1.363 5.434,0 z m 59.779,-2.72 c 19.023,0 33.964,9.511 36.678,29.886 l -1.351,1.363 -5.435,0 -1.363,-1.363 C 199.705,12.232 190.193,4.071 173.89,4.071 c -20.375,0 -35.321,14.947 -35.321,42.119 0,27.172 14.946,42.112 35.321,42.112 16.303,0 25.815,-8.149 28.529,-21.732 l 1.363,-1.363 5.435,0 1.351,1.363 c -2.714,19.018 -17.655,28.523 -36.678,28.523 -23.095,0 -43.475,-16.303 -43.475,-48.903 0,-32.607 20.38,-48.91 43.475,-48.91"
             inkscape:connector-curvature="0" /></g><g
           transform="translate(21.6,26.35)"
           id="g24"><path
             id="path26"
             style="fill:#007db8;fill-opacity:1;fill-rule:nonzero;stroke:none"
             d="m 0,0 0,57.3 16.95,0 C 31.282,57.3 42.9,44.473 42.9,28.65 42.9,12.827 31.282,0 16.95,0 Z m 16.95,-18.9 c 22.128,0 40.725,15.115 46.031,35.584 l 53.801,-42.034 53.768,42.008 0,-35.558 61.35,0 0,18.9 -39.75,0 0,76.2 -21.6,0 0,-35.558 L 118.975,0.348 107.441,9.359 132.132,28.65 159.016,49.654 143.666,61.646 92.091,21.352 80.557,30.363 132.132,70.658 116.782,82.65 62.981,40.616 C 57.675,61.085 39.078,76.2 16.95,76.2 l -38.55,0 0,-95.1 z m 222.3,95.1 21.6,0 M 300.6,0 l 0,-18.9 -61.35,0 0,95.1 21.6,0 0,-76.2 z"
             inkscape:connector-curvature="0" /></g></g></g></g></svg>`;
    return (
        <div dangerouslySetInnerHTML={{ __html: svgString }} />
    );
  }

});

module.exports = Dell;
