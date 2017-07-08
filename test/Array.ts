import '../src'
import test from 'ava'

// ['chunk', 'Compact', 'Difference', 'DifferenceBy', 'DifferenceWith', 'Drop', 'DropRight', 'DropRightWhile', 'DropWhile', 'fill', 'findIndex', 'FindLastIndex', 'Flatten', 'FlattenDeep', 'FlattenDepth', 'FromPairs', 'Head', 'Initial', 'Intersection', 'IntersectionBy', 'IntersectionWith', 'Last', 'nth', 'pull', 'pullAll', 'pullAllBy', 'pullAllWith', 'pullAt', 'remove', 'sortedIndex', 'sortedIndexBy', 'sortedIndexOf', 'sortedLastIndex', 'sortedLastIndexBy', 'sortedLastIndexOf', 'sortedUniq', 'sortedUniqBy', 'tail', 'take', 'takeRight', 'takeRightWhile', 'takeWhile', 'union', 'unionBy', 'unionWith', 'uniq', 'uniqBy', 'uniqWith', 'unzip', 'unzipWith', 'without', 'xor', 'xorBy', 'xorWith', 'zip', 'zipObject', 'zipObjectDeep', 'zipWith']

// array methods
test('Chunk', t => t.deepEqual([1, 2, 3, 4].Chunk(2), [[1, 2], [3, 4]]))
test('Compact', t => t.deepEqual([1, false, 0, NaN, ''].Compact(), [1]))
test('Difference', t => t.deepEqual([1, 2].Difference([2, 3]), [1]))
test('DifferenceBy', t => t.deepEqual([1, 2].DifferenceBy([2, 3], _ => _), [1]))
test('DifferenceWith', t => t.deepEqual([1, 2].DifferenceWith([2, 3]), [1]))
test('Drop', t => t.deepEqual([1, 2].Drop(1), [2]))
test('DropRight', t => t.deepEqual([1, 2].DropRight(1), [1]))
test('DropRightWhile', t => t.deepEqual([1, 2].DropRightWhile(_ => _ > 1), [1]))
test('DropWhile', t => t.deepEqual([1, 2].DropWhile(_ => _ < 2), [2]))
test('fill', t => t.deepEqual(['a'].Fill('b', 0, 4), ['b']))
test('findIndex', t => t.is([1, 2, 3].FindIndex(_ => _ === 3), 2))
test('FindLastIndex', t => t.is([1, 1, 1].FindLastIndex(_ => _ === 1), 2))
test('Flatten', t => t.deepEqual([1, [2, 3, [4]]].Flatten(), [1, 2, 3, [4]]))
test('FlattenDeep', t => t.deepEqual([1, [2, 3, [4]]].FlattenDeep(), [1, 2, 3, 4]))
test('FlattenDepth', t => t.deepEqual([1, [2, 3, [4]]].FlattenDepth(1), [1, 2, 3, [4]]))
test('FromPairs', t => t.deepEqual([[1, 2], [3, 4]].FromPairs(), { 1: 2, 3: 4 }))
test('Head', t => t.is([1, 2, 3].Head(), 1))
test('Initial', t => t.deepEqual([1, 2, 3].Initial(), [1, 2]))
test('Intersection', t => t.deepEqual([1, 2, 3].Intersection([1, 2]), [1, 2]))
test('IntersectionWith', t => t.deepEqual([1, 2, 3].IntersectionWith([1, 2], (a: number, b: number) => a + 1 === b), [1]))
test('Last', t => t.deepEqual([1, 2, 3].Last(), 3))
test('Nth', t => t.deepEqual([1, 2, 3].Nth(1), 2))
test('Pull', t => t.deepEqual([1, 2, 3].Pull(2, 3), [1]))

// collection methods
test('FlatMap', t => t.deepEqual([1, 2, [3, 4]].FlatMap(_ => Array.isArray(_) ? -1 : _ * 2), [2, 4, -1]))
