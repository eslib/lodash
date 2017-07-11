<img src="logo.png" alt="ESlib + Lodash" width="450px" />

[![Build Status][build]](https://circleci.com/gh/eslib/lodash) [![npm]](https://www.npmjs.com/package/@eslib/lodash) [![mit]](https://opensource.org/licenses/MIT)

[build]: https://img.shields.io/circleci/project/eslib/lodash.svg?branch=master&style=flat-square
[npm]: https://img.shields.io/npm/v/@eslib/lodash.svg?style=flat-square
[mit]: https://img.shields.io/npm/l/@eslib/lodash.svg?style=flat-square

> (Lodash + ESlib = <3) All the Lodash functions available natively

## Installation

```sh
npm install @eslib/lodash --save
```

## Example

```ts
import '@eslib/lodash'

[1, 2, 3, 4]
  .chunk(2)
  .map(arr => arr.head()) // [1, 3]
```

## Tests

```sh
npm test
```

## License

MIT
