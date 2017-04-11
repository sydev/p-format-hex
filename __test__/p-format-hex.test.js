(() => {
  'use strict';

  const format_hex = require('../p-format-hex');

  describe('format hex', () => {
    
    test('#abc -> #aabbcc', () => {
      return format_hex('#abc')
        .then(hex => expect(hex).toEqual('#aabbcc'))
        .catch(err => expect(err).toBeNull());
    });

    test('abc -> #aabbcc', () => {
      return format_hex('abc')
        .then(hex => expect(hex).toEqual('#aabbcc'))
        .catch(err => expect(err).toBeNull());
    });

    test('abc123 -> #abc123', () => {
      return format_hex('abc123')
        .then(hex => expect(hex).toEqual('#abc123'))
        .catch(err => expect(err).toBeNull());
    });

    test('#abc123 -> #abc123', () => {
      return format_hex('#abc123')
        .then(hex => expect(hex).toEqual('#abc123'))
        .catch(err => expect(err).toBeNull());
    });

  });

  describe('throw error: String is not a valid hex code.', () => {

    test('#ff', () => {
      return format_hex('#ff')
        .then(hex => expect(hex).toBeNull())
        .catch(err => expect(err).toEqual(new Error('Given string is not a valid hex color code.')));
    });

    test('#ffff', () => {
      return format_hex('#ffff')
        .then(hex => expect(hex).toBeNull())
        .catch(err => expect(err).toEqual(new Error('Given string is not a valid hex color code.')));
    });

    test('#fffffff', () => {
      return format_hex('#fffffff')
        .then(hex => expect(hex).toBeNull())
        .catch(err => expect(err).toEqual(new Error('Given string is not a valid hex color code.')));
    });

  });

  describe('throw error: Given color code is not a string.', () => {

    test('array', () => {
      return format_hex(['#fff'])
        .then(hex => expect(hex).toBeNull())
        .catch(err => expect(err).toEqual(new Error('Given color code is not a string.')));
    });

    test('object', () => {
      return format_hex({color_code: '#fff'})
        .then(hex => expect(hex).toBeNull())
        .catch(err => expect(err).toEqual(new Error('Given color code is not a string.')));
    });

    test('number', () => {
      return format_hex(100100)
        .then(hex => expect(hex).toBeNull())
        .catch(err => expect(err).toEqual(new Error('Given color code is not a string.')));
    });

    test('boolean', () => {
      return format_hex(true)
        .then(hex => expect(hex).toBeNull())
        .catch(err => expect(err).toEqual(new Error('Given color code is not a string.')));
    });

    test('null', () => {
      return format_hex(null)
        .then(hex => expect(hex).toBeNull())
        .catch(err => expect(err).toEqual(new Error('Given color code is not a string.')));
    });

  });

})();
