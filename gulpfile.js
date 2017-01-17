
var gulp = require('gulp');
var path = require('path');
var fs = require('fs');
var devGulpTasks = require('grommet/utils/gulp/gulp-tasks');

String.prototype.capitalize = function() {
  var words = this.split(' ');

  words = words.map(function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  return words.join(' ');
};

var opts = {
  copyAssets: [
    'src/index.html',
    {
      asset: 'src/img/**',
      dist: 'dist/img/'
    },
    {
      asset: 'src/markdown/en-US/documents/dev/img/**',
      dist: 'dist/img/'
    },
    {
      asset: 'src/markdown/en-US/documents/user/img/**',
      dist: 'dist/img/'
    }
  ],
  jsAssets: ['src/js/**/*.js'],
  mainJs: 'src/js/index.js',
  mainScss: 'src/scss/index.scss',
  devServerHost: '0.0.0.0',
  devServerPort: 9000,
  webpack: {
    resolve: {
      root: [
        path.resolve(__dirname, 'src/js'),
        path.resolve(__dirname, 'src/scss'),
        path.resolve(__dirname, 'src/messages'),
        path.resolve(__dirname, 'node_modules')
      ]
    },
    module: {
      loaders: [
        {
          test: /\.md$/,
          loader: 'babel!imports?React=react!html-jsx-loader!grommet-markdown'
        }
      ]
    }
  },
  sync: {
    hostname: 'grommet.usa.hp.com',
    username: 'ligo',
    remoteDestination: '/var/www/html/examples/openswitch-site/dist'
  },
  distPreprocess: ['create-markdown-content-map'],
  devPreprocess: ['create-markdown-content-map']
};

function cleanRoute(route) {
  return route.replace(/\.md/, '').replace(/[0-9]+\./, '').toLowerCase();
}

function processPages(baseDir, location, pageSection) {
  var pageSectionTitle = pageSection.capitalize();
  var currentLocation = path.join(baseDir, location, pageSection);
  var pageSectionCode = [];
  var processedPages = 0;

  var pages = fs.readdirSync(currentLocation);
  pages.forEach(function (page, pageIndex) {
    // Skip hidden files
    if (page.match(/^\..*/)) {
        return;
    }
    // Skip non-md files
    if (! fs.statSync(path.join(currentLocation, page)).isDirectory()) {
      if (! page.match(/^.*\.md$/)) {
        return;
      }
    } else {
      if (page == "img") {
        return;
      }
      if (page == "templates") {
        return;
      }
    }

    var pageFolderName = page.replace(/\.md$/g, '');
    var pageTitle = pageFolderName.replace(/[0-9]+\./g, '');

    var prefix = location.indexOf('/') !== -1 ? location.split('/')[1] : '';
    var routePath = cleanRoute(path.join(prefix, location === '' ? '': pageSection, page));
    var routeName = cleanRoute(path.join(location, pageSection, page));

    if (processedPages != 0) {
      pageSectionCode.push(',');
    }
    processedPages++;

    if (fs.statSync(path.join(currentLocation, page)).isDirectory()) {
      var pageHome = page + '.md';

      if (!fs.existsSync(path.join(currentLocation, pageHome))) {
        pageSectionCode.push("{label: '" + pageTitle.replace(/-/g, ' ') + "', ");
      } else {
        pageSectionCode.push("{route: '" + routeName + "', " +
          "label: '" + pageTitle.replace(/-/g, ' ') + "', " +
          "routePath: '" + routePath + "', " +
          "component: getComponent('" + path.join(location, pageSection) + "', '"+ pageHome + "'), ");
      }

      pageSectionCode.push("contents: [");
      pageSectionCode.push(processPages(baseDir, path.join(location, pageSection), page));
      pageSectionCode.push("]}");
    } else if (!fs.existsSync(path.join(currentLocation, pageFolderName))) {

      pageSectionCode.push("{route: '" + routeName  + "', " +
        "label: '" + pageTitle.replace(/-/g, ' ') + "', " +
        "routePath: '" + routePath + "', " +
        "component: getComponent('" + path.join(location, pageSection) + "', '"+ page + "')}");
    }
  });

  return pageSectionCode.join('');
}

gulp.task('create-markdown-content-map', function (done) {

  var getComponentFunction = "function getComponent(pageSection, page) {\n  var component;\n  try {\n" +
    "    component = require('../../markdown/' + locale + '/' + pageSection + '/' + page);\n" +
    "  } catch (e) {\n" +
    "    component = require('../../markdown/en-US/' + pageSection + '/' + page);\n  }\n  return component;\n}\n\n";

  var markdownContentMapCode = [
    "var Locale = require('grommet/utils/Locale');\n",
    'var locale = Locale.getCurrentLocale();\n\n',
    getComponentFunction
  ];

  moduleExportsCode = ['\nmodule.exports = {'];

  fs.readdir('./src/markdown/en-US', function (err, pageSections) {
    if (err) {
      throw err;
    }

    pageSections.forEach(function (pageSection, pageSectionIndex) {

      moduleExportsCode.push(' ' + pageSection + ': ' + pageSection);

      if (pageSectionIndex < pageSections.length - 1) {
        moduleExportsCode.push(',');
      }

      var pageSectionCode = ['var ' + pageSection + ' = ['];
      pageSectionCode.push(processPages('./src/markdown/en-US', '', pageSection));
      pageSectionCode.push('];\n');
      markdownContentMapCode.push(pageSectionCode.join(''));

      if (pageSectionIndex === pageSections.length - 1) {

        moduleExportsCode.push('};\n');
        markdownContentMapCode.push(moduleExportsCode.join(''));

        fs.writeFile("./src/js/components/MarkdownContentsMap.js", markdownContentMapCode.join(''), function(err) {
          if(err) {
            throw err;
          }
          done();
        });
      }
    });

  });
});

devGulpTasks(gulp, opts);
