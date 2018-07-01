const fs = require('file-system');
const pathToJSON = 'public/countdownStart.json';

if (!Date.now) {
  Date.now = function() {
    return new Date().getTime();
  };
}

const now = new Date(Date.now());
const json = JSON.stringify({
  start: {
    date: now.toDateString(),
    time: now.toLocaleTimeString('en-US', { hour12: false })
  }
});

fs.exists(pathToJSON, exists => {
  if (!exists || process.argv.includes('reset')) {
    fs.writeFile(pathToJSON, json, 'utf8', function(err) {
      if (err) throw err;
      console.log('Saved!');
    });
  }
});
