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
var documents = [{route: 'documents/architecture', label: 'Architecture', routePath: 'architecture', component: getComponent('documents', 'Architecture.md')},{route: 'documents/basic', label: 'Basic', routePath: 'basic', component: getComponent('documents', 'Basic.md')},{route: 'documents/documents', label: 'Documents', routePath: 'documents', component: getComponent('documents', 'Documents.md')},{route: 'documents/downloads', label: 'Downloads', routePath: 'downloads', component: getComponent('documents', 'Downloads.md')},{route: 'documents/feature', label: 'Feature', routePath: 'feature', component: getComponent('documents', 'Feature.md')},{route: 'documents/howtocontribute', label: 'HowToContribute', routePath: 'howtocontribute', component: getComponent('documents', 'HowToContribute.md')},{route: 'documents/installing', label: 'Installing', routePath: 'installing', component: getComponent('documents', 'Installing.md')},{route: 'documents/introduction', label: 'Introduction', routePath: 'introduction', component: getComponent('documents', 'Introduction.md')},{route: 'documents/porting', label: 'Porting', routePath: 'porting', component: getComponent('documents', 'Porting.md')},{route: 'documents/references', label: 'References', routePath: 'references', component: getComponent('documents', 'References.md')},{route: 'documents/testing', label: 'Testing', routePath: 'testing', component: getComponent('documents', 'Testing.md')},{route: 'documents/doc-contributor-setup-windows', label: 'doc contributor setup windows', routePath: 'doc-contributor-setup-windows', component: getComponent('documents', 'doc-contributor-setup-windows.md')},{route: 'documents/getting-started', label: 'getting started', routePath: 'getting-started', component: getComponent('documents', 'getting-started.md')},{route: 'documents/linux-setup', label: 'linux setup', routePath: 'linux-setup', component: getComponent('documents', 'linux-setup.md')}];
var participate = [{route: 'participate/participate', label: 'Participate', routePath: 'participate', component: getComponent('participate', 'Participate.md')}];
var use = [{route: 'use/use', label: 'Use', routePath: 'use', component: getComponent('use', 'Use.md')}];

module.exports = { develop: develop, documents: documents, participate: participate, use: use};
