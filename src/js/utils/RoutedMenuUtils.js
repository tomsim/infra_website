var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;

var Empty = React.createClass({
  render: function () {
    return (<div></div>);
  }
});

function onClick(event) {
  var scrollToId = event.target.getAttribute('href').split('#')[1];
  setTimeout(function () {
    document.getElementById(scrollToId).scrollIntoView();
  }, 100);
}

module.exports = {
  getMenuItems: function (contents, router, parentContent) {
    return contents.map(function (content, index) {
      var item;

      if (content.route || parentContent) {
        var routeName = content.route || parentContent.route;
        var href = router.makeHref(routeName);
        var onClickHandler = null;
        if (content.id) {
          href += '#' + content.id;
          onClickHandler = onClick;
        }
        item = <Link key={content.label} to={href} onClick={onClickHandler}>{content.label}</Link>;
      } else {
        item = content.label;
      }

      if (! parentContent) {
        item = <h3 key={content.label}>{item}</h3>;
      }

      var subItems;
      if (content.hasOwnProperty('contents')) {
        subItems = this.getMenuItems(content.contents, router, content);
      }

      if (!parentContent || subItems) {
        return (
          <div key={"menu-item-" + index} className="menu-item">
            {item}
            <div className="menu-item__sub-item">
              {subItems}
            </div>
          </div>
        );
      } else {
        return item;
      }
    }.bind(this));
  },
  createContentRoutes: function (contents) {

    var result = [];

    contents.forEach(function (content) {
      var handler = content.component || Empty;
      result.push(
        <Route key={content.label} name={content.route}
          path={content.routePath}
          handler={handler} />
      );

      if (content.hasOwnProperty('contents')) {
        result = result.concat(this.createContentRoutes(content.contents));
      }
    }.bind(this));
    return result;
  },
  getRoutes: function (contents) {

    var DefaultRedirect = React.createClass({
      statics: {
        willTransitionTo: function(transition, params) {
          transition.redirect(contents[0].route, params);
        }
      },
      render: function () {}
    });

    var results = [<Route key="emptyPath" path="" handler={DefaultRedirect} />];
    results.push(<Route key="homePagePath" path="/" handler={DefaultRedirect} />);
    results.push(<NotFoundRoute key="notFoundPath" handler={DefaultRedirect}/>);

    return results.concat(this.createContentRoutes(contents));
  }
};
