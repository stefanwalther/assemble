/**
 * Assemble
 *
 * Assemble <http://assemble.io>
 * Created and maintained by Jon Schlinkert and Brian Woodward
 *
 * Copyright (c) 2013 Upstage.
 * Licensed under the MIT License (MIT).
 */

var expect = require('chai').expect;
var inspect = require('util').inspect;

var assemble = require('../lib/assemble');

describe('model', function() {

  describe('utils', function() {

    it('should inherit an empty Object', function() {
      var prototype = {};
      var properties = {};
      var Actual = assemble.utils.model.inherit(Object, prototype, properties);
      var actual = new Actual();
      expect(actual).to.be.an.instanceof(Object);
    });

    it('should inherit an Object given prototype properties', function() {
      var prototype = {
        foo: 'bar'
      };
      var properties = {};
      var Actual = assemble.utils.model.inherit(Object, prototype, properties);
      var actual = new Actual();
      expect(actual).to.be.an.instanceof(Object);
      expect(actual).to.have.property('foo');
      expect(prototype.foo).to.equal(actual.foo);
    });

    it('should inherit an Object given getter/setter properties', function() {
      var prototype = {
        foo: 'bar'
      };
      var properties = {
        baz: {
          get: function() { return this.foo; },
          set: function(val) { this.foo = val; }
        }
      };
      var Actual = assemble.utils.model.inherit(Object, prototype, properties);
      var actual = new Actual();
      expect(actual).to.be.an.instanceof(Object);
      expect(actual).to.have.property('foo');
      expect(actual).to.have.property('baz');
      expect(prototype.foo).to.equal(actual.foo);
      expect(prototype.foo).to.equal(actual.baz);
    });

    it('should be able to set property through setter', function() {
      var something = 'else';
      var prototype = {
        foo: 'bar'
      };
      var properties = {
        baz: {
          get: function() { return this.foo; },
          set: function(val) { this.foo = val; }
        }
      };
      var Actual = assemble.utils.model.inherit(Object, prototype, properties);
      var actual = new Actual();
      expect(actual).to.be.an.instanceof(Object);
      expect(actual).to.have.property('foo');
      expect(actual).to.have.property('baz');
      expect(prototype.foo).to.equal(actual.foo);
      expect(prototype.foo).to.equal(actual.baz);

      actual.baz = something;
      expect(something).to.equal(actual.baz);
      expect(something).to.equal(actual.foo);
    });
  
  });

});