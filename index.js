"use strict";

const through = require('through2'),
  gutil = require('gulp-util'),
  prettier = require('prettier'),
  merge = require('merge'),
  applySourceMap = require('vinyl-sourcemaps-apply');

var PluginError = gutil.PluginError;

module.exports = function(opt) {
  function transform(file, encoding, callback) {
    if (file.isNull())
      return callback(null, file);
    if (file.isStream())
      return callback(new PluginError(
        'gulp-prettier',
        'Streaming not supported'
      ));

    var data;
    var str = file.contents.toString('utf8');

    var options = merge(
      {
        // Fit code within this line limit
        printWidth: 100,
        // Number of spaces it should use per tab
        tabWidth: 2,
        // Use tabs instead of spaces
        useTabs: false,
        // Specify which parser to use.
        parser: 'flow',
        // If true, will use single instead of double quotes
        singleQuote: false,
        // Controls the printing of trailing commas wherever possible
        trailingComma: 'none',
        // Controls the printing of spaces inside array and objects
        bracketSpacing: true,
        // Print semicolons at the ends of statements
        semi: true
      },
      opt
    );

    try {
      data = prettier.format(str, options);
    } catch (err) {
      return callback(new PluginError('gulp-prettier', err));
    }

    if (data && data.v3SourceMap && file.sourceMap) {
      applySourceMap(file, data.v3SourceMap);
      file.contents = new Buffer(data.js);
    } else {
      file.contents = new Buffer(data);
    }

    callback(null, file);
  }

  return through.obj(transform);
};
