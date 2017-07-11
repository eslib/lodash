import { assign } from 'eslib'
import * as _ from 'lodash'

const SOURCE = 'lodash'
const VERSION = '4.17.4'

const collectionExtensions = ['countBy', 'every', 'filter', 'find', 'findLast', 'flatMap', 'flatMapDeep', 'forEach', 'forEachRight', 'groupBy', 'includes', 'invokeMap', 'keyBy', 'map', 'orderBy', 'partition', 'reduce', 'reduceRight', 'reject', 'sample', 'sampleSize', 'shuffle', 'size', 'some', 'sortBy']

// TODO: get these by parsing jsdocs referenced by lodash/index.js
const extensions = new Map<any, string[]>()

extensions.set(Array.prototype, ['chunk', 'compact', 'concat', 'difference', 'differenceBy', 'differenceWith', 'drop', 'dropRight', 'dropRightWhile', 'dropWhile', 'fill', 'findIndex', 'findLastIndex', 'flatten', 'flattenDeep', 'flattenDepth', 'fromPairs', 'head', 'indexOf', 'initial', 'intersection', 'intersectionBy', 'intersectionWith', 'join', 'last', 'lastIndexOf', 'nth', 'pull', 'pullAll', 'pullAllBy', 'pullAllWith', 'pullAt', 'remove', 'reverse', 'slice', 'sortedIndex', 'sortedIndexBy', 'sortedIndexOf', 'sortedLastIndex', 'sortedLastIndexBy', 'sortedLastIndexOf', 'sortedUniq', 'sortedUniqBy', 'tail', 'take', 'takeRight', 'takeRightWhile', 'takeWhile', 'union', 'unionBy', 'unionWith', 'uniq', 'uniqBy', 'uniqWith', 'unzip', 'unzipWith', 'without', 'xor', 'xorBy', 'xorWith', 'zip', 'zipObject', 'zipObjectDeep', 'zipWith', ...collectionExtensions])

extensions.set(Date, ['now'])

extensions.set(Function.prototype, ['after', 'ary', 'before', 'bind', 'bindKey', 'curry', 'curryRight', 'debounce', 'defer', 'delay', 'flip', 'memoize', 'negate', 'once', 'overArgs', 'partial', 'partialRight', 'rearg', 'rest', 'spread', 'throttle', 'unary', 'wrap'])

extensions.set(Math, ['add', 'ceil', 'divide', 'floor', 'max', 'maxBy', 'mean', 'meanBy', 'min', 'minBy', 'multiply', 'round', 'subtract', 'sum', 'sumBy'])

extensions.set(Number, ['clamp', 'inRange', 'random'])

extensions.set(Object.prototype, ['assign', 'assignIn', 'assignInWith', 'assignWith', 'at', 'create', 'defaults', 'defaultsDeep', 'findKey', 'findLastKey', 'forIn', 'forInRight', 'forOwn', 'forOwnRight', 'functions', 'functionsIn', 'get', 'has', 'hasIn', 'invert', 'invertBy', 'invoke', 'keys', 'keysIn', 'mapKeys', 'mapValues', 'merge', 'mergeWith', 'omit', 'omitBy', 'pick', 'pickBy', 'result', 'set', 'setWith', 'toPairs', 'toPairsIn', 'transform', 'unset', 'update', 'updateWith', 'values', 'valuesIn', ...collectionExtensions])

extensions.set(String.prototype, ['camelCase', 'capitalize', 'deburr', 'endsWith', 'escape', 'escapeRegExp', 'kebabCase', 'lowerCase', 'lowerFirst', 'pad', 'padEnd', 'padStart', 'parseInt', 'repeat', 'replace', 'snakeCase', 'split', 'startCase', 'startsWith', 'template', 'toLower', 'toUpper', 'trim', 'trimEnd', 'trimStart', 'truncate', 'unescape', 'upperCase', 'upperFirst', 'words'])

extensions.forEach((methods, Type) =>
  methods.forEach(method =>
    assign(
      Type,
      { [method]: withThis((_ as any)[method]) },
      SOURCE,
      VERSION
    )
  )
)

function withThis(fn: Function) {
  return function(this: any, ...args: any[]) {
    return fn(this, ...args)
  }
}
