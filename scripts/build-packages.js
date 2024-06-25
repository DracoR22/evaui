const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const packagesDir = path.resolve(__dirname, '../packages');

const buildPackage = (packageDir) => {
  return new Promise((resolve, reject) => {
    const tsconfigPath = path.join(packagesDir, packageDir, 'tsconfig.json');
    if (fs.existsSync(tsconfigPath)) {
      console.log(`Building ${packageDir}...`);
      exec(`tsc -p ${tsconfigPath}`, (err, stdout, stderr) => {
        if (err) {
          reject(`Error building ${packageDir}:\n${stderr}`);
        } else {
          resolve(`Built ${packageDir} successfully:\n${stdout}`);
        }
      });
    } else {
      resolve(`No tsconfig.json found for ${packageDir}, skipping...`);
    }
  });
};

const buildAllPackages = async () => {
  const packageDirs = fs.readdirSync(packagesDir);
  const buildPromises = packageDirs.map(buildPackage);

  try {
    const results = await Promise.all(buildPromises);
    results.forEach(result => console.log(result));
  } catch (error) {
    console.error(error);
  }
};

buildAllPackages();
