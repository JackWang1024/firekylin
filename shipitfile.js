module.exports = function (shipit) {
  require('shipit-deploy')(shipit);
  shipit.initConfig({
    default: {
      workspace: '/tmp/github-monitor',
      dirToCopy: '/tmp/github-monitor',
      deployTo: '/tmp/52dachu',
      repositoryUrl: 'https://github.com/xiaoyann/firekylin.git',
      // branch: '',
      ignores: ['.git', 'node_modules', 'build', 'pm2.json'],
      // rsync: ['--del'],
      keepReleases: 2,
      // key: '/path/to/key',
      shallowClone: true
    },
    staging: {
      servers: 'root@101.200.160.64'
    }
  });
};