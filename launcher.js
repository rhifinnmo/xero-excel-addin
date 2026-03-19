const { exec } = require('child_process');
const path = require('path');

const manifestPath = path.join(__dirname, 'manifest.xml');

console.log('Starting Xero Excel Add-in...');

exec(`office-addin-debugging start "${manifestPath}"`, (err) => {
  if (err) {
    console.error('Error starting add-in:', err);
    process.exit(1);
  }
  console.log('Add-in started successfully!');
});