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

var develop = [{route: 'develop/develop', label: 'Develop', routePath: 'develop', component: getComponent('develop', 'Develop.md')}];
var documents = [{route: 'documents/documents', label: 'Documents', routePath: 'documents', component: getComponent('documents', 'Documents.md')},{route: 'documents/downloads', label: 'Downloads', routePath: 'downloads', component: getComponent('documents', 'Downloads.md')},{route: 'documents/feature', label: 'Feature', routePath: 'feature', component: getComponent('documents', 'Feature.md')},{route: 'documents/howtocontribute', label: 'HowToContribute', routePath: 'howtocontribute', component: getComponent('documents', 'HowToContribute.md')},{route: 'documents/installing', label: 'Installing', routePath: 'installing', component: getComponent('documents', 'Installing.md')},{route: 'documents/references', label: 'References', routePath: 'references', component: getComponent('documents', 'References.md')},{route: 'documents/doc-contributor-setup-windows', label: 'doc contributor setup windows', routePath: 'doc-contributor-setup-windows', component: getComponent('documents', 'doc-contributor-setup-windows.md')},{route: 'documents/getting-started', label: 'getting started', routePath: 'getting-started', component: getComponent('documents', 'getting-started.md')},{route: 'documents/linux-setup', label: 'linux setup', routePath: 'linux-setup', component: getComponent('documents', 'linux-setup.md')}];
var participate = [{route: 'participate/participate', label: 'Participate', routePath: 'participate', component: getComponent('participate', 'Participate.md')}];
var use = [{route: 'use/use', label: 'Use', routePath: 'use', component: getComponent('use', 'Use.md')},{route: 'use/usesecond', label: 'UseSecond', routePath: 'usesecond', component: getComponent('use', 'UseSecond.md')}];

module.exports = { develop: develop, documents: documents, participate: participate, use: use};
