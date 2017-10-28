# Gulp Prettier [![Build Status](https://travis-ci.org/rbelmega/gulp-ng-prettier.svg?branch=master)](https://travis-ci.org/rbelmega/gulp-ng-prettier) [![GitHub version](https://badge.fury.io/gh/rbelmega%2Fgulp-ng-prettier.svg)](https://badge.fury.io/gh/rbelmega%2Fgulp-ng-prettier)

A [Gulp](http://gulpjs.com/) plugin which allows the users to use [Prettier](https://github.com/jlongster/prettier).

> Prettier is an opinionated JavaScript formatter inspired by refmt with advanced support for language features from ES2017, JSX, and Flow. It removes all original styling and ensures that all outputted JavaScript conforms to a consistent style. (See this blog post)


## Usage

Simply pipe the input, and pass in arguments that you would to the regular format function.

```js
const gulp = require('gulp'),
  prettier = require('gulp-prettier');

gulp.task('default', () => {
	gulp.src('*.js')
	.pipe(prettier({ parser: 'flow' }))
	.pipe(gulp.dest('./dist'))
});
```

Please consult the [Prettier](https://github.com/jlongster/prettier) README to know the possible optional arguments. At the time of this writing, these are the following optional arguments.

```js
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
}
```

## License

[MIT License](https://raw.githubusercontent.com/rbelmega/gulp-ng-prettier/master/LICENSE)