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

var community = [{route: 'community/community', label: 'Community', routePath: 'community', component: getComponent('community', 'Community.md')}];
var documentation = [{route: 'documentation/introduction', label: 'Introduction', routePath: 'introduction', component: getComponent('documentation', '1.Introduction.md')},{label: 'Overview', contents: [{route: 'documentation/overview/1.history', label: 'History', routePath: 'overview/1.history', component: getComponent('documentation/2.Overview', '1.History.md')}]},{route: 'documentation/getting-started', label: 'Getting Started', routePath: 'getting-started', component: getComponent('documentation', '3.Getting-Started.md'), contents: [{route: 'documentation/getting-started/1.for-windows', label: 'For Windows', routePath: 'getting-started/1.for-windows', component: getComponent('documentation/3.Getting-Started', '1.For-Windows.md')},{route: 'documentation/getting-started/2.for-linux', label: 'For Linux', routePath: 'getting-started/2.for-linux', component: getComponent('documentation/3.Getting-Started', '2.For-Linux.md'), contents: [{route: 'documentation/getting-started/2.for-linux/1.introduction', label: 'Introduction', routePath: 'getting-started/2.for-linux/1.introduction', component: getComponent('documentation/3.Getting-Started/2.For-Linux', '1.Introduction.md')}]}]},{label: 'developer', contents: [{route: 'documentation/developer/doc-contributor-setup-windows', label: 'doc contributor setup windows', routePath: 'developer/doc-contributor-setup-windows', component: getComponent('documentation/developer', 'doc-contributor-setup-windows.md')},{route: 'documentation/developer/getting-started', label: 'getting started', routePath: 'developer/getting-started', component: getComponent('documentation/developer', 'getting-started.md')},{route: 'documentation/developer/linux-setup', label: 'linux setup', routePath: 'developer/linux-setup', component: getComponent('documentation/developer', 'linux-setup.md')}]}];
var participate = [{route: 'participate/participate', label: 'Participate', routePath: 'participate', component: getComponent('participate', 'Participate.md')}];
var software = [{route: 'software/software', label: 'Software', routePath: 'software', component: getComponent('software', 'Software.md')}];
var use = [{route: 'use/use', label: 'Use', routePath: 'use', component: getComponent('use', 'Use.md')},{route: 'use/usesecond', label: 'UseSecond', routePath: 'usesecond', component: getComponent('use', 'UseSecond.md')}];

module.exports = { community: community, documentation: documentation, participate: participate, software: software, use: use};
