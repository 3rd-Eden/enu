describe('enu', function () {
  'use strict';

  var assume = require('assume')
    , enu = require('./');

  it('finds all enumerable props', function () {
    var props = enu({
      foo: 'bar',
      bar: false
    });

    assume(props).is.a('object');
    assume(props.enu).is.a('object');
    assume(props.non).is.a('object');
    assume(props.nonkeys).is.a('array');
    assume(props.enukeys).is.a('array');

    assume(props.non).is.empty();
    assume(props.nonkeys).is.empty();

    assume(props.enu).deep.equals({ foo: 'bar', bar: false });
    assume(props.enukeys).deep.equals(['foo', 'bar']);
  });

  it('finds non enumerable properties', function () {
    var fixture = {};

    Object.defineProperties(fixture, {
      foo: {
        enumerable: false,
        value: 'bar'
      },
      bar: {
        value: false
      }
    });

    var props = enu(fixture);

    assume(props).is.a('object');
    assume(props.enu).is.a('object');
    assume(props.non).is.a('object');
    assume(props.nonkeys).is.a('array');
    assume(props.enukeys).is.a('array');

    assume(props.enu).is.empty();
    assume(props.enukeys).is.empty();

    assume(props.non).deep.equals({ foo: 'bar', bar: false });
    assume(props.nonkeys).deep.equals(['foo', 'bar']);
  });

  it('finds non enumerable AND enumerable properties', function () {
    var fixture = { hello: 'world' };

    Object.defineProperties(fixture, {
      foo: {
        enumerable: false,
        value: 'bar'
      },
      bar: {
        value: false
      }
    });

    var props = enu(fixture);

    assume(props).is.a('object');
    assume(props.enu).is.a('object');
    assume(props.non).is.a('object');
    assume(props.nonkeys).is.a('array');
    assume(props.enukeys).is.a('array');

    assume(props.enu).is.length(1);
    assume(props.enukeys).is.length(1);
    assume(props.non).is.length(2);
    assume(props.nonkeys).is.length(2);

    assume(props.enu).deep.equals({ hello: 'world' });
    assume(props.enukeys).deep.equals(['hello']);

    assume(props.non).deep.equals({ foo: 'bar', bar: false });
    assume(props.nonkeys).deep.equals(['foo', 'bar']);
  });
});
