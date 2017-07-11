import { assign, Type } from 'eslib'
import * as _ from 'lodash'

const SOURCE = 'lodash'
const VERSION = '4.17.4'

const collectionExtensions = ['countBy', 'every', 'filter', 'find', 'findLast', 'flatMap', 'flatMapDeep', 'forEach', 'forEachRight', 'groupBy', 'includes', 'invokeMap', 'keyBy', 'map', 'orderBy', 'partition', 'reduce', 'reduceRight', 'reject', 'sample', 'sampleSize', 'shuffle', 'size', 'some', 'sortBy']

const extensions: Record<string, string[]> = {
  Array: ['chunk', 'compact', 'concat', 'difference', 'differenceBy', 'differenceWith', 'drop', 'dropRight', 'dropRightWhile', 'dropWhile', 'fill', 'findIndex', 'findLastIndex', 'flatten', 'flattenDeep', 'flattenDepth', 'fromPairs', 'head', 'indexOf', 'initial', 'intersection', 'intersectionBy', 'intersectionWith', 'join', 'last', 'lastIndexOf', 'nth', 'pull', 'pullAll', 'pullAllBy', 'pullAllWith', 'pullAt', 'remove', 'reverse', 'slice', 'sortedIndex', 'sortedIndexBy', 'sortedIndexOf', 'sortedLastIndex', 'sortedLastIndexBy', 'sortedLastIndexOf', 'sortedUniq', 'sortedUniqBy', 'tail', 'take', 'takeRight', 'takeRightWhile', 'takeWhile', 'union', 'unionBy', 'unionWith', 'uniq', 'uniqBy', 'uniqWith', 'unzip', 'unzipWith', 'without', 'xor', 'xorBy', 'xorWith', 'zip', 'zipObject', 'zipObjectDeep', 'zipWith', ...collectionExtensions],
  Date: ['now'],
  Function: ['after', 'ary', 'before', 'bind', 'bindKey', 'curry', 'curryRight', 'debounce', 'defer', 'delay', 'flip', 'memoize', 'negate', 'once', 'overArgs', 'partial', 'partialRight', 'rearg', 'rest', 'spread', 'throttle', 'unary', 'wrap'],
  Math: ['add', 'ceil', 'divide', 'floor', 'max', 'maxBy', 'mean', 'meanBy', 'min', 'minBy', 'multiply', 'round', 'subtract', 'sum', 'sumBy'],
  Number: ['clamp', 'inRange', 'random'],
  Object: ['assign', 'assignIn', 'assignInWith', 'assignWith', 'at', 'create', 'defaults', 'defaultsDeep', 'findKey', 'findLastKey', 'forIn', 'forInRight', 'forOwn', 'forOwnRight', 'functions', 'functionsIn', 'get', 'has', 'hasIn', 'invert', 'invertBy', 'invoke', 'keys', 'keysIn', 'mapKeys', 'mapValues', 'merge', 'mergeWith', 'omit', 'omitBy', 'pick', 'pickBy', 'result', 'set', 'setWith', 'toPairs', 'toPairsIn', 'transform', 'unset', 'update', 'updateWith', 'values', 'valuesIn', ...collectionExtensions],
  String: ['camelCase', 'capitalize', 'deburr', 'endsWith', 'escape', 'escapeRegExp', 'kebabCase', 'lowerCase', 'lowerFirst', 'pad', 'padEnd', 'padStart', 'parseInt', 'repeat', 'replace', 'snakeCase', 'split', 'startCase', 'startsWith', 'template', 'toLower', 'toUpper', 'trim', 'trimEnd', 'trimStart', 'truncate', 'unescape', 'upperCase', 'upperFirst', 'words']
}

for (const Type in extensions) {
  for (const method of extensions[Type]) {
    assign(
      method,
      withThis((_ as any)[method]),
      Type as Type,
      SOURCE,
      VERSION
    )
  }
}

function withThis(fn: Function) {
  return function(this: any, ...args: any[]) {
    return fn(this, ...args)
  }
}
