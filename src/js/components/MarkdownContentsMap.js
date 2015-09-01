var Locale = require('grommet/utils/Locale');
var locale = Locale.getCurrentLocale();

function getComponent(pageSection, page) {
  var component;
  try {
    component = require('../../markdown/' + locale + '/' + pageSection + '/' + page);
  } catch (e) {
    component = require('../../markdown/en-US/' + pageSection + '/' + page);
  }
  return component;
}

var develop = [{route: 'develop/develop', label: 'Develop', routePath: 'develop', component: getComponent('develop', 'Develop.md')},{route: 'develop/howtocontribute', label: 'HowToContribute', routePath: 'howtocontribute', component: getComponent('develop', 'HowToContribute.md')},{route: 'develop/doc-contributor-setup-windows', label: 'doc contributor setup windows', routePath: 'doc-contributor-setup-windows', component: getComponent('develop', 'doc-contributor-setup-windows.md')},{route: 'develop/getting-started', label: 'getting started', routePath: 'getting-started', component: getComponent('develop', 'getting-started.md')},{route: 'develop/linux-setup', label: 'linux setup', routePath: 'linux-setup', component: getComponent('develop', 'linux-setup.md')}];
var participate = [{route: 'participate/participate', label: 'Participate', routePath: 'participate', component: getComponent('participate', 'Participate.md')}];
var use = [{route: 'use/use', label: 'Use', routePath: 'use', component: getComponent('use', 'Use.md')},{route: 'use/usesecond', label: 'UseSecond', routePath: 'usesecond', component: getComponent('use', 'UseSecond.md')}];

module.exports = { develop: develop, participate: participate, use: use};
