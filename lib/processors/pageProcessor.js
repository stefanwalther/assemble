/* ==========================================================
 * lib/utils/frontMatter.js
 *
 * Assemble
 * http://assemble.io
 *
 * Copyright (c) 2012 Upstage
 * Licensed under the MIT license.
 * https://github.com/assemble/assemble/blob/master/LICENSE-MIT
 * ========================================================== */

(function(exports) {

  var fs = require('fs'),
      path = require('path'),
      _ = require('lodash');

  var Processor = function(grunt, options) {
    return this.init(grunt, options);
  };

  Processor.prototype.init = function(grunt, options) {
    this.grunt = grunt;
    this.options = options;
    return this;
  };

  Processor.prototype.process = function(callback) {
    // get any page data from pages

    // build site map
  };

  exports.PageProcessor = function(grunt, options) {
    return new Processor(grunt, options);
  };

}(typeof exports === 'object' && exports || this));