var gulp = require('gulp');
var path = require('path');
var devGulpTasks = require('grommet/utils/gulp/gulp-tasks');

var opts = {
  copyAssets: [
    'src/index.html',
    {
      asset: 'src/img/**',
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
          loader: 'babel!imports?React=react!html-jsx-loader!markdown-loader'
        }
      ]
    }
  },
  sync: {
    hostname: 'grommet.usa.hp.com',
    username: 'ligo',
    remoteDestination: '/var/www/html/examples/openswitch-site/dist'
  }
};

devGulpTasks(gulp, opts);
