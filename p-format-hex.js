(() => {
  'use strict';

  const cut_hex = require('cut-hex');
  const is_hex  = require('p-is-hex');

  module.exports = (hex_color_code) => {
    let err = null;

    if (typeof hex_color_code !== 'string') err = new Error('Given color code is not a string.');
    if (err !== null) return Promise.reject(err);

    return is_hex(hex_color_code)
      .then(result => {
        if (result) {
          return cut_hex(hex_color_code);
        } else {
          return Promise.reject(new Error('Given string is not a valid hex color code.'));
        }
      })
      .then(hex => {
        hex = hex.split('')
        if (hex.length === 3) hex = hex.reduce((res, current) => res.concat([current, current]), []);
        hex = hex.join('');
        return `#${hex}`;
      });
  };

})();
