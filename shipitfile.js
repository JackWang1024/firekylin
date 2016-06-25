module.exports = function (shipit) {
  require('shipit-deploy')(shipit);
  shipit.initConfig({
    default: {
      workspace: '/tmp/52dachu',
      dirToCopy: '/tmp/52dachu',
      deployTo: '/tmp/52dachu',
      repositoryUrl: 'https://github.com/xiaoyann/firekylin.git',
      // branch: '',
      ignores: [
        '.git', 
        'node_modules', 
        'build', 
        'pm2.json',
        'db',
        'runtime',
        'src',
        '.babelrc',
        '.eslintrc',
        '.gitignore',
        '.thinkjsrc',
        '.version',
        'README.md',
        'build.sh',
        'config.php',
        'config_theme.php',
        'copy_package.js',
        'webpack.config.babel.js',
        'shipitfile.js',
    ],
      rsync: ['--del'],
      keepReleases: 2,
      // key: '/path/to/key',
      shallowClone: true
    },
    staging: {
      servers: 'root@101.200.160.64'
    }
  });
};