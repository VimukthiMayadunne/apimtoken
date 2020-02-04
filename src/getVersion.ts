async function getVersionNumber(version: number) {
  return new Promise(async function(resolve, reject) {
    var apiVersion;
    try {
      switch (version) {
        case 2.7:
          apiVersion = "v0.14";
          break;
        case 3.0:
          apiVersion = "v0.15";
          break;
        case 3.1:
          apiVersion = "v0.16";
          break;
      }
      resolve(apiVersion);
    } catch (err) {
      console.error(err);
      reject(err);
    }
  });
}
module.exports = { getVersionNumber };
