// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var React = require('react');
//var uuid = require('node-uuid');

var IntlMixin = require('grommet/mixins/GrommetIntlMixin');

var CLASS_ROOT = "innovium-icon";

var Innovium = React.createClass({

  propTypes: {
    a11yTitle: React.PropTypes.string
  },

  mixins: [IntlMixin],

  getDefaultProps: function() {
    return { a11yTitle: 'Innovium' };
  },

  render: function() {
    var classes = [CLASS_ROOT];

    if (this.props.className) {
      classes.push(this.props.className);
    }

    var svgString = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="196" height="47" enable-background="new 0 0 1190.55 841.89" xml:space="preserve"><rect id="backgroundrect" width="100%" height="100%" x="0" y="0" fill="none" stroke="none" class=""/>


<g class="currentLayer"><title>Layer 1</title><path fill="#00C0F3" d="M116.61925867797362,11.735176302215407 c0,-2.0860194554512472 0.5924055242580266,-3.99233287851903 1.5826182464916454,-5.517792039774125 l-105.0756337198244,5.517792039774125 l105.0756337198244,5.5256201434574965 C117.21166420223167,15.735337284417753 116.61925867797362,13.819153643662311 116.61925867797362,11.735176302215407 z" id="svg_1" class=""/><g id="svg_2" class="">
        <g id="svg_3">
                <path fill="#0054A6" d="M125.30119248919141,4.845214967437158 c-2.812618370907505,0 -5.073847164625962,2.4288750948331663 -5.073847164625962,5.423840807958118 c0,2.9931742871176996 2.261228793718457,5.4202579559436135 5.073847164625962,5.4202579559436135 c2.8033865819439123,0 5.070769901638099,-2.427083668825913 5.070769901638099,-5.4202579559436135 C130.37196239082937,7.274090062270346 128.10457907113528,4.845214967437158 125.30119248919141,4.845214967437158 zM190.65022905064757,22.094855991271373 c-1.4955498121018027,-1.4071651286968296 -3.934980107935645,-2.1120912625506842 -7.318850389862954,-2.1120912625506842 h-23.318939419670382 v24.545522009371176 h6.107248026186765 V25.36868701952534 h7.1095965066882165 v19.15989828956778 h6.1995659158226815 V25.36868701952534 h3.412964404721659 c1.5912247159062953,0 2.650362686092869,0.2994667142124192 3.1564325720061057,0.8655573325041847 c0.5077483929975588,0.5816163103546622 0.7704347516888079,1.771123179170294 0.7704347516888079,3.5753877394747575 v14.718953217588865 H192.88879799872802 v-15.565700577016873 C192.88879799872802,25.801614971277957 192.13766607850857,23.50769396899119 190.65022905064757,22.094855991271373 zM61.49666219646201,22.060221755131124 c-1.4810027507046284,-1.3814880225928774 -3.945051150441381,-2.0774570264104697 -7.401656739354563,-2.0774570264104697 h-11.422520459769679 v24.545522009371176 h6.076195645127413 V25.36868701952534 h4.883896112920552 c1.5979387442434527,0 2.674980789995779,0.2737896081084433 3.2020320144626337,0.8240559633361447 c0.5466338071169039,0.5505649262289463 0.8112784240732,1.738280369037331 0.8112784240732,3.566430609438496 v14.769411716793142 h6.069761367970971 v-15.565700577016873 C63.71564856189275,25.75145504307494 62.97598644008235,23.448875481753078 61.49666219646201,22.060221755131124 zM148.47270303662492,39.12176304820383 h-4.883896112920552 c-1.5912247159062953,0 -2.648963930189294,-0.2821495961422858 -3.1939192302218995,-0.8243545343373535 c-0.5320867457196956,-0.5469820742144262 -0.7967313626760256,-1.6373633706287753 -0.7967313626760256,-3.2836838712938112 v-15.030959913852007 h-6.0538155506702225 v15.562416296003576 c0,3.1388769357075685 0.7477749060509424,5.423840807958118 2.2517172535741503,6.845337344712968 c1.495829563282518,1.4316479507959472 3.928545830779203,2.138066939655845 7.3073805914536445,2.138066939655845 h11.447138563672587 v-24.545522009371176 H148.47270303662492 V39.12176304820383 zM3.6726526450557913,44.5285853090931 h6.885795562116306 V10.218895847192243 h-6.885795562116306 V44.5285853090931 zM35.30020213195837,22.060221755131124 c-1.4826812577889175,-1.3814880225928774 -3.9416941362728037,-2.0774570264104697 -7.403055495258137,-2.0774570264104697 h-11.437347272347568 v24.545522009371176 h6.084588180548861 V25.36868701952534 h4.885574620004841 c1.6074502843877585,0 2.6733022829114903,0.2737896081084433 3.211823305787654,0.8240559633361447 c0.5304082386354596,0.5505649262289463 0.7930945973267167,1.738280369037331 0.7930945973267167,3.566430609438496 v14.769411716793142 h6.079832410476707 v-15.565700577016873 C37.51415297613596,25.75145504307494 36.7728123472416,23.448875481753078 35.30020213195837,22.060221755131124 zM122.10447574716238,44.5285853090931 h6.382523188010217 v-24.545522009371176 h-6.382523188010217 V44.5285853090931 zM106.07781035518701,37.407965501265664 l-6.373011647865912,-17.425200772544958 H92.87775089315483 l9.758280685696798,24.545522009371176 h6.533868576776975 l10.217352373249934,-24.545522009371176 H112.8435926607765 L106.07781035518701,37.407965501265664 zM79.57810001078826,19.546552495954643 c-3.722648961773043,0 -6.691088740338743,1.1599483396959869 -8.901962321528519,3.4762621670734544 c-2.222063628418371,2.3058638423351616 -3.3365923323864934,5.390997997825156 -3.3365923323864934,9.247639620438553 c0,3.842310214555379 1.1142489527874075,6.901468692940211 3.3365923323864934,9.214199668303175 c2.2108735811897775,2.3043709873291176 5.179313359755476,3.461035046011808 8.901962321528519,3.461035046011808 c3.726005975941622,0 6.689410233254453,-1.1497969256548888 8.876225212902748,-3.4520779159755444 c2.1994037827804664,-2.3058638423351616 3.3024626883392783,-5.371889453747795 3.3024626883392783,-9.223156798339438 c0,-3.856641622613404 -1.103058905558812,-6.941775778103392 -3.3170097497364517,-9.247639620438553 C86.22358930867063,20.706500835650672 83.27976763400784,19.546552495954643 79.57810001078826,19.546552495954643 zM83.82612168994388,37.72474933354812 c-1.0445909087894003,1.307143843291899 -2.468804169808905,1.9634029039487273 -4.283829830287113,1.9634029039487273 c-1.8410425202846918,0 -3.2652557813041976,-0.6562590606568808 -4.285508337371402,-1.9634029039487273 c-1.0300438473922258,-1.2966938582495928 -1.5475835317147721,-3.1266355246580098 -1.5475835317147721,-5.45429505008141 c0,-2.3243752444101036 0.5175396843225465,-4.140582644762918 1.5556963159555046,-5.444143636040313 c1.026686833223647,-1.3053524172846473 2.454257108411731,-1.956237199919718 4.2773955531306695,-1.956237199919718 c1.829572721875381,0 3.262178518316334,0.6508847826351623 4.283829830287113,1.9457872148774116 c1.0431921528858252,1.2966938582495928 1.5604520860276572,3.1096169775891123 1.5604520860276572,5.454593621082617 C85.3868535271522,34.598113808890105 84.86287956567321,36.42805547529852 83.82612168994388,37.72474933354812 z" id="svg_4"/>
        </g>
</g></g></svg>`;

    return (
        <div dangerouslySetInnerHTML={{ __html: svgString }} />
    );
  }

});

module.exports = Innovium;
