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

var community = [{route: 'community_community', label: 'Community', routePath: 'community', component: getComponent('community', 'Community.md')}];
var documentation = [{route: 'documentation_introduction', label: 'Introduction', routePath: 'introduction', component: getComponent('documentation', '1.Introduction.md')},{label: 'Overview', contents: [{route: 'documentation_overview_history', label: 'History', routePath: 'overview/history', component: getComponent('documentation/2.Overview', '1.History.md')}]},{route: 'documentation_getting-started', label: 'Getting Started', routePath: 'getting-started', component: getComponent('documentation', '3.Getting-Started.md'), contents: [{route: 'documentation_getting-started_for-windows', label: 'For Windows', routePath: 'getting-started/for-windows', component: getComponent('documentation/3.Getting-Started', '1.For-Windows.md')},{route: 'documentation_getting-started_for-linux', label: 'For Linux', routePath: 'getting-started/for-linux', component: getComponent('documentation/3.Getting-Started', '2.For-Linux.md'), contents: [{route: 'documentation_getting-started_for-linux_introduction', label: 'Introduction', routePath: 'getting-started/for-linux/introduction', component: getComponent('documentation/3.Getting-Started/2.For-Linux', '1.Introduction.md')}]}]}];

module.exports = { community: community, documentation: documentation};
