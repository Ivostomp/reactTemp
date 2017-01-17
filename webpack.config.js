var originalConfig = require('./webpack/webpack.config.js');
var overRides = {
    entry: {
        main: __dirname + '/src/app.tsx',
    },
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist',
    }
   }
module.exports = Object.assign(originalConfig,overRides);
