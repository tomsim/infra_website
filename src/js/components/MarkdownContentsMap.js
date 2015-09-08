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

var develop = [{route: 'develop/develophome', label: 'DevelopHome', routePath: 'develophome', component: getComponent('develop', 'DevelopHome.md')}];
var documents = [{label: 'dev', contents: [{route: 'documents/dev/architecture', label: 'Architecture', routePath: 'dev/architecture', component: getComponent('documents/dev', 'Architecture.md')},{route: 'documents/dev/basic', label: 'Basic', routePath: 'dev/basic', component: getComponent('documents/dev', 'Basic.md')},{route: 'documents/dev/communication', label: 'Communication', routePath: 'dev/communication', component: getComponent('documents/dev', 'Communication.md')},{route: 'documents/dev/documents', label: 'Documents', routePath: 'dev/documents', component: getComponent('documents/dev', 'Documents.md')},{route: 'documents/dev/downloads', label: 'Downloads', routePath: 'dev/downloads', component: getComponent('documents/dev', 'Downloads.md')},{route: 'documents/dev/feature', label: 'Feature', routePath: 'dev/feature', component: getComponent('documents/dev', 'Feature.md')},{route: 'documents/dev/governance', label: 'Governance', routePath: 'dev/governance', component: getComponent('documents/dev', 'Governance.md')},{route: 'documents/dev/how-to-participate', label: 'How to Participate', routePath: 'dev/how-to-participate', component: getComponent('documents/dev', 'How-to-Participate.md')},{route: 'documents/dev/howtocontribute', label: 'HowToContribute', routePath: 'dev/howtocontribute', component: getComponent('documents/dev', 'HowToContribute.md')},{route: 'documents/dev/installing', label: 'Installing', routePath: 'dev/installing', component: getComponent('documents/dev', 'Installing.md')},{route: 'documents/dev/introduction', label: 'Introduction', routePath: 'dev/introduction', component: getComponent('documents/dev', 'Introduction.md')},{route: 'documents/dev/members', label: 'Members', routePath: 'dev/members', component: getComponent('documents/dev', 'Members.md')},{route: 'documents/dev/porting', label: 'Porting', routePath: 'dev/porting', component: getComponent('documents/dev', 'Porting.md')},{route: 'documents/dev/references', label: 'References', routePath: 'dev/references', component: getComponent('documents/dev', 'References.md')},{route: 'documents/dev/testing', label: 'Testing', routePath: 'dev/testing', component: getComponent('documents/dev', 'Testing.md')},{route: 'documents/dev/doc-contributor-setup-windows', label: 'doc contributor setup windows', routePath: 'dev/doc-contributor-setup-windows', component: getComponent('documents/dev', 'doc-contributor-setup-windows.md')},{route: 'documents/dev/getting-started', label: 'getting started', routePath: 'dev/getting-started', component: getComponent('documents/dev', 'getting-started.md')},{route: 'documents/dev/linux-setup', label: 'linux setup', routePath: 'dev/linux-setup', component: getComponent('documents/dev', 'linux-setup.md')}]}];
var participate = [{route: 'participate/participatehome', label: 'ParticipateHome', routePath: 'participatehome', component: getComponent('participate', 'ParticipateHome.md')}];
var use = [{route: 'use/usehome', label: 'UseHome', routePath: 'usehome', component: getComponent('use', 'UseHome.md')}];

module.exports = { develop: develop, documents: documents, participate: participate, use: use};
