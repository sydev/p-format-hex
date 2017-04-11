# p-format-hex

Format an hex color code into its standard format (#abc -> #aabbcc), promisified

## Table of contents
- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
- [Changelog](#changelog)


## Installation

```
$ npm install --save p-format-hex
```

Or if you prefer yarn:

```
$ yarn add p-format-hex
```

## Usage

```JavaScript
const format_hex = require('p-format-hex');

format_hex('#abc')
  .then(hex => console.log(hex)) // '#aabbcc'
  .catch(err => console.error(err));

```

## Development

```
$ npm test
```

## Changelog

- 1.0.0
  - Initial Release
