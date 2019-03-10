const util = require('util');
const exec = util.promisify(require('child_process').exec);

(async () => {
  try {
    await exec('mv dist dist_old');
    await exec('mv dist_temp dist');
    await exec('rm -r dist_old');
  }
  catch (ex) {
    console.error(ex);
  }
})();
