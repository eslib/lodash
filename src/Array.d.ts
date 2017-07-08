import { ListIterator, ListOfRecursiveArraysOrValues, Many, RecursiveArray, Dictionary, MemoIterator, StringRepresentable } from 'lodash'

// array methods
declare global {
  interface Array<T> {

    /**
     * Creates an array of elements split into groups the length of size. If collection can’t be split evenly, the
     * final chunk will be the remaining elements.
     *
     * @param this The array to process.
     * @param size The length of each chunk.
     * @return Returns the new array containing chunks.
     */
    Chunk(this: ArrayLike<T>, size?: number): T[][]

    /**
     * Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are
     * falsey.
     *
     * @param this The array to compact.
     * @return (Array) Returns the new array of filtered values.
     */
    Compact(this: ArrayLike<T | null | undefined | false | 0 | ''>): T[]

    /**
     * Creates an array of unique array values not included in the other provided arrays using SameValueZero for
     * equality comparisons.
     *
     * @param this The array to inspect.
     * @param values The arrays of values to exclude.
     * @return Returns the new array of filtered values.
     */
    Difference(
      this: ArrayLike<T>,
      ...values: Array<ArrayLike<T>>
    ): T[]

    /**
     * This method is like _.difference except that it accepts iteratee which is invoked for each element of array
     * and values to generate the criterion by which uniqueness is computed. The iteratee is invoked with one
     * argument: (value).
     *
     * @param this The array to inspect.
     * @param values The values to exclude.
     * @param iteratee The iteratee invoked per element.
     * @returns Returns the new array of filtered values.
     */
    DifferenceBy(
      this: ArrayLike<T>,
      values?: ArrayLike<T>,
      iteratee?: ((value: T) => any) | string
    ): T[]

    /**
     * @see _.DifferenceBy
     */
    DifferenceBy<W extends Object>(
      this: ArrayLike<T>,
      values?: ArrayLike<T>,
      iteratee?: W
    ): T[]

    /**
     * @see _.DifferenceBy
     */
    DifferenceBy(
      this: ArrayLike<T>,
      values1?: ArrayLike<T>,
      values2?: ArrayLike<T>,
      iteratee?: ((value: T) => any) | string
    ): T[]

    /**
     * @see _.DifferenceBy
     */
    DifferenceBy<W extends Object>(
      this: ArrayLike<T>,
      values1?: ArrayLike<T>,
      values2?: ArrayLike<T>,
      iteratee?: W
    ): T[]

    /**
     * @see _.DifferenceBy
     */
    DifferenceBy(
      this: ArrayLike<T>,
      values1?: ArrayLike<T>,
      values2?: ArrayLike<T>,
      values3?: ArrayLike<T>,
      iteratee?: ((value: T) => any) | string
    ): T[]

    /**
     * @see _.DifferenceBy
     */
    DifferenceBy<T, W extends Object>(
      this: ArrayLike<T>,
      values1?: ArrayLike<T>,
      values2?: ArrayLike<T>,
      values3?: ArrayLike<T>,
      iteratee?: W
    ): T[]

    /**
     * @see _.DifferenceBy
     */
    DifferenceBy<T, W extends Object>(
      this: ArrayLike<T>,
      values1?: ArrayLike<T>,
      values2?: ArrayLike<T>,
      values3?: ArrayLike<T>,
      values4?: ArrayLike<T>,
      iteratee?: W
    ): T[]

    /**
     * @see _.DifferenceBy
     */
    DifferenceBy(
      this: ArrayLike<T>,
      values1?: ArrayLike<T>,
      values2?: ArrayLike<T>,
      values3?: ArrayLike<T>,
      values4?: ArrayLike<T>,
      iteratee?: ((value: T) => any) | string
    ): T[]

    /**
     * @see _.DifferenceBy
     */
    DifferenceBy(
      this: ArrayLike<T>,
      values1?: ArrayLike<T>,
      values2?: ArrayLike<T>,
      values3?: ArrayLike<T>,
      values4?: ArrayLike<T>,
      values5?: ArrayLike<T>,
      iteratee?: ((value: T) => any) | string
    ): T[]

    /**
     * @see _.DifferenceBy
     */
    DifferenceBy<T, W extends Object>(
      this: ArrayLike<T>,
      values1?: ArrayLike<T>,
      values2?: ArrayLike<T>,
      values3?: ArrayLike<T>,
      values4?: ArrayLike<T>,
      values5?: ArrayLike<T>,
      iteratee?: W
    ): T[]

    /**
     * @see _.DifferenceBy
     */
    DifferenceBy(
      this: ArrayLike<T>,
      ...values: any[]
    ): T[]

    /**
     * Creates an array of unique `array` values not included in the other
     * provided arrays using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @param {Array} this The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.difference([3, 2, 1], [4, 2])
     * // => [3, 1]
     */
    DifferenceWith(
      this: ArrayLike<T>,
      ...values: any[]
    ): T[]

    /**
     * Creates a slice of array with n elements dropped from the beginning.
     *
     * @param this The array to query.
     * @param n The number of elements to drop.
     * @return Returns the slice of array.
     */
    Drop(this: ArrayLike<T>, n?: number): T[]

    /**
     * Creates a slice of array with n elements dropped from the end.
     *
     * @param this The array to query.
     * @param n The number of elements to drop.
     * @return Returns the slice of array.
     */
    DropRight(
      this: ArrayLike<T>,
      n?: number
    ): T[]

    /**
     * Creates a slice of array excluding elements dropped from the end. Elements are dropped until predicate
     * returns falsey. The predicate is bound to thisArg and invoked with three arguments: (value, index, array).
     *
     * If a property name is provided for predicate the created _.property style callback returns the property
     * value of the given element.
     *
     * If a value is also provided for thisArg the created _.matchesProperty style callback returns true for
     * elements that have a matching property value, else false.
     *
     * If an object is provided for predicate the created _.matches style callback returns true for elements that
     * match the properties of the given object, else false.
     *
     * @param this The array to query.
     * @param predicate The function invoked per iteration.
     * @param thisArg The this binding of predicate.
     * @return Returns the slice of array.
     */
    DropRightWhile(
      this: ArrayLike<T>,
      predicate?: ListIterator<T, boolean>
    ): T[]

    /**
     * @see _.dropRightWhile
     */
    dropRightWhile(
      this: ArrayLike<T>,
      predicate?: string
    ): T[]

    /**
     * @see _.dropRightWhile
     */
    DropRightWhile<U>(
      this: ArrayLike<T>,
      predicate?: U
    ): T[]

    /**
     * Creates a slice of array excluding elements dropped from the beginning. Elements are dropped until predicate
     * returns falsey. The predicate is bound to thisArg and invoked with three arguments: (value, index, array).
     *
     * If a property name is provided for predicate the created _.property style callback returns the property
     * value of the given element.
     *
     * If a value is also provided for thisArg the created _.matchesProperty style callback returns true for
     * elements that have a matching property value, else false.
     *
     * If an object is provided for predicate the created _.matches style callback returns true for elements that
     * have the properties of the given object, else false.
     *
     * @param this The array to query.
     * @param predicate The function invoked per iteration.
     * @param thisArg The this binding of predicate.
     * @return Returns the slice of array.
     */
    DropWhile(
      this: ArrayLike<T>,
      predicate?: ListIterator<T, boolean>
    ): T[]

    /**
     * @see _.DropWhile
     */
    DropWhile(
      this: ArrayLike<T>,
      predicate?: string
    ): T[]

    /**
     * @see _.DropWhile
     */
    DropWhile<U>(
      this: ArrayLike<T>,
      predicate?: U
    ): T[]

    /**
     * Fills elements of array with value from start up to, but not including, end.
     *
     * Note: This method mutates array.
     *
     * @param this The array to fill.
     * @param value The value to fill array with.
     * @param start The start position.
     * @param end The end position.
     * @return Returns array.
     */
    Fill<T>(
      this: T[],
      value: T,
      start?: number,
      end?: number
    ): T[]

    /**
     * @see _.Fill
     */
    Fill<T>(
      this: ArrayLike<any>,
      value: T,
      start?: number,
      end?: number
    ): ArrayLike<T>

    /**
     * This method is like _.find except that it returns the index of the first element predicate returns truthy
     * for instead of the element itself.
     *
     * If a property name is provided for predicate the created _.property style callback returns the property
     * value of the given element.
     *
     * If a value is also provided for thisArg the created _.matchesProperty style callback returns true for
     * elements that have a matching property value, else false.
     *
     * If an object is provided for predicate the created _.matches style callback returns true for elements that
     * have the properties of the given object, else false.
     *
     * @param this The array to search.
     * @param predicate The function invoked per iteration.
     * @param fromIndex The index to search from.
     * @return Returns the index of the found element, else -1.
     */
    FindIndex<T>(
      this: ArrayLike<T>,
      predicate?: ListIterator<T, boolean>,
      fromIndex?: number
    ): number

    /**
     * @see _.FindIndex
     */
    FindIndex<T>(
      this: ArrayLike<T>,
      predicate?: string,
      fromIndex?: number
    ): number

    /**
     * @see _.FindIndex
     */
    FindIndex<W, T>(
      this: ArrayLike<T>,
      predicate?: W,
      fromIndex?: number
    ): number

    /**
     * This method is like _.FindIndex except that it iterates over elements of collection from right to left.
     *
     * If a property name is provided for predicate the created _.property style callback returns the property
     * value of the given element.
     *
     * If a value is also provided for thisArg the created _.matchesProperty style callback returns true for
     * elements that have a matching property value, else false.
     *
     * If an object is provided for predicate the created _.matches style callback returns true for elements that
     * have the properties of the given object, else false.
     *
     * @param this The array to search.
     * @param predicate The function invoked per iteration.
     * @param fromIndex The index to search from.
     * @return Returns the index of the found element, else -1.
     */
    FindLastIndex(
      this: ArrayLike<T>,
      predicate?: ListIterator<T, boolean>,
      fromIndex?: number
    ): number

    /**
     * @see _.FindLastIndex
     */
    FindLastIndex(
      this: ArrayLike<T>,
      predicate?: string,
      fromIndex?: number
    ): number

    /**
     * @see _.FindLastIndex
     */
    FindLastIndex<W>(
      this: ArrayLike<T>,
      predicate?: W,
      fromIndex?: number
    ): number

    /**
     * Flattens a nested array. If isDeep is true the array is recursively flattened, otherwise it’s only
     * flattened a single level.
     *
     * @param this The array to flatten.
     * @param isDeep Specify a deep flatten.
     * @return Returns the new flattened array.
     */
    Flatten(this: ListOfRecursiveArraysOrValues<T>, isDeep: boolean): T[]

    /**
     * @see _.flatten
     */
    flatten(this: ArrayLike<Many<T>>): T[]

    /**
     * @see _.Flatten
     */
    Flatten(this: ListOfRecursiveArraysOrValues<T>): RecursiveArray<T>

    /**
     * Recursively flattens a nested array.
     *
     * @param this The array to recursively flatten.
     * @return Returns the new flattened array.
     */
    FlattenDeep(this: ListOfRecursiveArraysOrValues<T>): T[]

    /**
    * Recursively flatten array up to depth times.
    *
    * @param this The array to recursively flatten.
    * @param number The maximum recursion depth.
    * @return Returns the new flattened array.
    */
    FlattenDepth(this: ListOfRecursiveArraysOrValues<T>, depth?: number): T[]

    /**
     * The inverse of `_.toPairs` this method returns an object composed
     * from key-value `pairs`.
     *
     * @param {Array} pairs The key-value pairs.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.fromPairs([['fred', 30], ['barney', 40]])
     * // => { 'fred': 30, 'barney': 40 }
     */
    FromPairs(
      this: ArrayLike<[_.StringRepresentable, T]>
    ): Dictionary<T>

    /**
     @see _.FromPairs
     */
    FromPairs(
      this: ArrayLike<any[]>
    ): Dictionary<any>

    /**
     * Gets the first element of array.
     *
     * @alias _.first
     *
     * @param this The array to query.
     * @return Returns the first element of array.
     */
    Head(this: ArrayLike<T>): T | undefined

    /**
     * This method is like `_.intersection` except that it accepts `iteratee`
     * which is invoked for each element of each `arrays` to generate the criterion
     * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function|Object|string} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of shared values.
     * @example
     *
     * _.intersectionBy([2.1, 1.2], [4.3, 2.4], Math.floor)
     * // => [2.1]
     *
     * // using the `_.property` iteratee shorthand
     * _.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x')
     * // => [{ 'x': 1 }]
     */
    IntersectionBy(
      this: ArrayLike<any>,
      ...values: any[]
    ): any[]

    /**
     * This method is like `_.intersection` except that it accepts `comparator`
     * which is invoked to compare elements of `arrays`. The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of shared values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }]
     *
     * _.intersectionWith(objects, others, _.isEqual)
     * // => [{ 'x': 1, 'y': 2 }]
     */
    IntersectionWith(
      this: ArrayLike<any>,
      ...values: any[]
    ): any[]

    /**
     * This method is like `_.pull` except that it accepts an array of values to remove.
     *
     * **Note:** Unlike `_.difference`, this method mutates `array`.
     *
     * @param {Array} this The array to modify.
     * @param {Array} values The values to remove.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3, 1, 2, 3]
     *
     * _.pull(array, [2, 3])
     * console.log(array)
     * // => [1, 1]
     */
    PullAll(
      this: ArrayLike<any>,
      ...values: any[]
    ): any[]

    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to to generate the criterion
     * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.DifferenceBy`, this method mutates `array`.
     *
     * @param {Array} this The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function|Object|string} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }]
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x')
     * console.log(array)
     * // => [{ 'x': 2 }]
     */
    PullAllBy(
      this: ArrayLike<any>,
      ...values: any[]
    ): any[]

    /**
     * This method is like `_.indexOf` except that it performs a binary
     * search on a sorted `array`.
     *
     * @param {Array} this The array to search.
     * @param {*} value The value to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.sortedIndexOf([1, 1, 2, 2], 2)
     * // => 2
     */
    SortedIndexOf(
      this: ArrayLike<T>,
      value: T
    ): number

    /**
     * Gets all but the last element of array.
     *
     * @param this The array to query.
     * @return Returns the slice of array.
     */
    Initial(this: ArrayLike<T>): T[]

    /**
     * Creates an array of unique values that are included in all of the provided arrays using SameValueZero for
     * equality comparisons.
     *
     * @param arrays The arrays to inspect.
     * @return Returns the new array of shared values.
     */
    Intersection(this: ArrayLike<T>, ...arrays: Array<ArrayLike<T>>): T[]

    /**
     * Gets the last element of array.
     *
     * @param this The array to query.
     * @return Returns the last element of array.
     */
    Last(this: ArrayLike<T>): T | undefined

    /**
     * Gets the element at index `n` of `array`. If `n` is negative, the nth element from the end is returned.
     *
     * @param this array The array to query.
     * @param value The index of the element to return.
     * @return Returns the nth element of `array`.
     */
    Nth(
      this: ArrayLike<T>,
      n?: number
    ): T | undefined

    /**
     * Removes all provided values from array using SameValueZero for equality comparisons.
     *
     * Note: Unlike _.without, this method mutates array.
     *
     * @param this The array to modify.
     * @param values The values to remove.
     * @return Returns array.
     */
    Pull(
      this: T[],
      ...values: T[]
    ): T[]

    /**
     * @see _.pull
     */
    Pull(
      this: ArrayLike<T>,
      ...values: T[]
    ): ArrayLike<T>

    /**
     * Removes elements from array corresponding to the given indexes and returns an array of the removed elements.
     * Indexes may be specified as an array of indexes or as individual arguments.
     *
     * Note: Unlike _.at, this method mutates array.
     *
     * @param this The array to modify.
     * @param indexes The indexes of elements to remove, specified as individual indexes or arrays of indexes.
     * @return Returns the new array of removed elements.
     */
    PullAt(
      this: ArrayLike<T>,
      ...indexes: Array<Many<number>>
    ): T[]

    /**
     * Removes all elements from array that predicate returns truthy for and returns an array of the removed
     * elements. The predicate is bound to thisArg and invoked with three arguments: (value, index, array).
     *
     * If a property name is provided for predicate the created _.property style callback returns the property
     * value of the given element.
     *
     * If a value is also provided for thisArg the created _.matchesProperty style callback returns true for
     * elements that have a matching property value, else false.
     *
     * If an object is provided for predicate the created _.matches style callback returns true for elements that
     * have the properties of the given object, else false.
     *
     * Note: Unlike _.filter, this method mutates array.
     *
     * @param this The array to modify.
     * @param predicate The function invoked per iteration.
     * @param thisArg The this binding of predicate.
     * @return Returns the new array of removed elements.
     */
    Remove(
      this: ArrayLike<T>,
      predicate?: ListIterator<T, boolean>
    ): T[]

    /**
     * @see _.Remove
     */
    Remove(
      this: ArrayLike<T>,
      predicate?: string
    ): T[]

    /**
     * @see _.Remove
     */
    Remove<W>(
      this: ArrayLike<T>,
      predicate?: W
    ): T[]

    /**
     * Gets all but the first element of array.
     *
     * @alias _.tail
     *
     * @param this The array to query.
     * @return Returns the slice of array.
     */
    Tail(this: ArrayLike<T>): T[]

    /**
     * Uses a binary search to determine the lowest index at which `value` should
     * be inserted into `array` in order to maintain its sort order.
     *
     * @param {Array} this The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @returns {number} Returns the index at which `value` should be inserted into `array`.
     * @example
     *
     * _.sortedIndex([30, 50], 40)
     * // => 1
     *
     * _.sortedIndex([4, 5], 4)
     * // => 0
     */
    SortedIndex(
      this: ArrayLike<T>,
      value: T
    ): number

    /**
     * This method is like `_.sortedIndex` except that it accepts `iteratee`
     * which is invoked for `value` and each element of `array` to compute their
     * sort ranking. The iteratee is invoked with one argument: (value).
     *
     * @param {Array} this The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function|Object|string} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the index at which `value` should be inserted into `array`.
     * @example
     *
     * var dict = { 'thirty': 30, 'forty': 40, 'fifty': 50 }
     *
     * _.SortedIndexBy(['thirty', 'fifty'], 'forty', _.propertyOf(dict))
     * // => 1
     *
     * // using the `_.property` iteratee shorthand
     * _.SortedIndexBy([{ 'x': 4 }, { 'x': 5 }], { 'x': 4 }, 'x')
     * // => 0
     */
    SortedIndexBy<U>(
      this: ArrayLike<T>,
      value: T,
      iteratee: (x: T) => U
    ): number

    /**
     * @see _.SortedIndexBy
     */
    SortedIndexBy(
      this: ArrayLike<T>,
      value: T,
      iteratee: (x: T) => any
    ): number

    /**
     * @see _.SortedIndexBy
     */
    SortedIndexBy(
      this: ArrayLike<T>,
      value: T,
      iteratee: string
    ): number

    /**
     * @see _.SortedIndexBy
     */
    SortedIndexBy<W>(
      this: ArrayLike<T>,
      value: T,
      iteratee: W
    ): number

    /**
     * @see _.SortedIndexBy
     */
    SortedIndexBy(
      this: ArrayLike<T>,
      value: T,
      iteratee: Object
    ): number

    /**
     * This method is like `_.sortedIndex` except that it returns the highest
     * index at which `value` should be inserted into `array` in order to
     * maintain its sort order.
     *
     * @param {Array} this The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @returns {number} Returns the index at which `value` should be inserted into `array`.
     * @example
     *
     * _.SortedLastIndex([4, 5], 4)
     * // => 1
     */
    SortedLastIndex(
      this: ArrayLike<T>,
      value: T
    ): number

    /**
     * This method is like `_.SortedLastIndex` except that it accepts `iteratee`
     * which is invoked for `value` and each element of `array` to compute their
     * sort ranking. The iteratee is invoked with one argument: (value).
     *
     * @param {Array} this The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function|Object|string} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the index at which `value` should be inserted into `array`.
     * @example
     *
     * // using the `_.property` iteratee shorthand
     * _.SortedLastIndexBy([{ 'x': 4 }, { 'x': 5 }], { 'x': 4 }, 'x')
     * // => 1
     */
    SortedLastIndexBy<TSort>(
      this: ArrayLike<T>,
      value: T,
      iteratee: (x: T) => TSort
    ): number

    /**
     * @see _.SortedLastIndexBy
     */
    SortedLastIndexBy(
      this: ArrayLike<T>,
      value: T,
      iteratee: (x: T) => any
    ): number

    /**
     * @see _.SortedLastIndexBy
     */
    SortedLastIndexBy(
      this: ArrayLike<T>,
      value: T,
      iteratee: string
    ): number

    /**
     * @see _.SortedLastIndexBy
     */
    SortedLastIndexBy<W>(
      this: ArrayLike<T>,
      value: T,
      iteratee: W
    ): number

    /**
     * @see _.SortedLastIndexBy
     */
    SortedLastIndexBy(
      this: ArrayLike<T>,
      value: T,
      iteratee: Object
    ): number

    /**
     * This method is like `_.lastIndexOf` except that it performs a binary
     * search on a sorted `array`.
     *
     * @param {Array} this The array to search.
     * @param {*} value The value to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.SortedLastIndexOf([1, 1, 2, 2], 2)
     * // => 3
     */
    SortedLastIndexOf(
      this: ArrayLike<T>,
      value: T
    ): number

    /**
     * Creates a slice of array with n elements taken from the beginning.
     *
     * @param this The array to query.
     * @param n The number of elements to take.
     * @return Returns the slice of array.
     */
    Take(
      this: ArrayLike<T>,
      n?: number
    ): T[]

    /**
     * Creates a slice of array with n elements taken from the end.
     *
     * @param this The array to query.
     * @param n The number of elements to take.
     * @return Returns the slice of array.
     */
    TakeRight(
      this: ArrayLike<T>,
      n?: number
    ): T[]

    /**
     * Creates a slice of array with elements taken from the end. Elements are taken until predicate returns
     * falsey. The predicate is bound to thisArg and invoked with three arguments: (value, index, array).
     *
     * If a property name is provided for predicate the created _.property style callback returns the property
     * value of the given element.
     *
     * If a value is also provided for thisArg the created _.matchesProperty style callback returns true for
     * elements that have a matching property value, else false.
     *
     * If an object is provided for predicate the created _.matches style callback returns true for elements that
     * have the properties of the given object, else false.
     *
     * @param this The array to query.
     * @param predicate The function invoked per iteration.
     * @param thisArg The this binding of predicate.
     * @return Returns the slice of array.
     */
    TakeRightWhile(
      this: ArrayLike<T>,
      predicate?: ListIterator<T, boolean>
    ): T[]

    /**
     * @see _.TakeRightWhile
     */
    TakeRightWhile(
      this: ArrayLike<T>,
      predicate?: string
    ): T[]

    /**
     * @see _.TakeRightWhile
     */
    TakeRightWhile<TWhere>(
      this: ArrayLike<T>,
      predicate?: TWhere
    ): T[]

    /**
     * Creates a slice of array with elements taken from the beginning. Elements are taken until predicate returns
     * falsey. The predicate is bound to thisArg and invoked with three arguments: (value, index, array).
     *
     * If a property name is provided for predicate the created _.property style callback returns the property
     * value of the given element.
     *
     * If a value is also provided for thisArg the created _.matchesProperty style callback returns true for
     * elements that have a matching property value, else false.
     *
     * If an object is provided for predicate the created _.matches style callback returns true for elements that
     * have the properties of the given object, else false.
     *
     * @param this The array to query.
     * @param predicate The function invoked per iteration.
     * @param thisArg The this binding of predicate.
     * @return Returns the slice of array.
     */
    TakeWhile(
      this: ArrayLike<T>,
      predicate?: ListIterator<T, boolean>
    ): T[]

    /**
     * @see _.TakeWhile
     */
    TakeWhile(
      this: ArrayLike<T>,
      predicate?: string
    ): T[]

    /**
     * @see _.TakeWhile
     */
    TakeWhile<TWhere>(
      this: ArrayLike<T>,
      predicate?: TWhere
    ): T[]

    /**
     * Creates an array of unique values, in order, from all of the provided arrays using SameValueZero for
     * equality comparisons.
     *
     * @param thiss The arrays to inspect.
     * @return Returns the new array of combined values.
     */
    Union(this: ArrayLike<T>, ...arrays: Array<ArrayLike<T> | null | undefined>): T[]

    /**
     * This method is like `_.union` except that it accepts `iteratee` which is
     * invoked for each element of each `arrays` to generate the criterion by which
     * uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * @param arrays The arrays to inspect.
     * @param iteratee The iteratee invoked per element.
     * @return Returns the new array of combined values.
     */
    UnionBy(
      this: ArrayLike<T>,
      arrays: ArrayLike<T>,
      iteratee?: (value: T) => any
    ): T[]

    /**
     * @see _.UnionBy
     */
    UnionBy<W extends Object>(
      this: ArrayLike<T>,
      arrays: ArrayLike<T>,
      iteratee?: W
    ): T[]

    /**
     * @see _.UnionBy
     */
    UnionBy(
      this: ArrayLike<T>,
      arrays1: ArrayLike<T> | null | undefined,
      arrays2: ArrayLike<T> | null | undefined,
      iteratee?: (value: T) => any
    ): T[]

    /**
     * @see _.UnionBy
     */
    UnionBy<W extends Object>(
      this: ArrayLike<T>,
      arrays1: ArrayLike<T> | null | undefined,
      arrays2: ArrayLike<T> | null | undefined,
      iteratee?: W
    ): T[]

    /**
     * @see _.UnionBy
     */
    UnionBy(
      this: ArrayLike<T>,
      arrays1: ArrayLike<T> | null | undefined,
      arrays2: ArrayLike<T> | null | undefined,
      arrays3: ArrayLike<T> | null | undefined,
      iteratee?: (value: T) => any
    ): T[]

    /**
     * @see _.UnionBy
     */
    UnionBy<W extends Object>(
      this: ArrayLike<T>,
      arrays1: ArrayLike<T> | null | undefined,
      arrays2: ArrayLike<T> | null | undefined,
      arrays3: ArrayLike<T> | null | undefined,
      iteratee?: W
    ): T[]

    /**
     * @see _.UnionBy
     */
    UnionBy(
      this: ArrayLike<T>,
      arrays1: ArrayLike<T> | null | undefined,
      arrays2: ArrayLike<T> | null | undefined,
      arrays3: ArrayLike<T> | null | undefined,
      arrays4: ArrayLike<T> | null | undefined,
      iteratee?: (value: T) => any
    ): T[]

    /**
     * @see _.UnionBy
     */
    UnionBy<W extends Object>(
      this: ArrayLike<T>,
      arrays1: ArrayLike<T> | null | undefined,
      arrays2: ArrayLike<T> | null | undefined,
      arrays3: ArrayLike<T> | null | undefined,
      arrays4: ArrayLike<T> | null | undefined,
      iteratee?: W
    ): T[]

    /**
     * @see _.UnionBy
     */
    UnionBy(
      this: ArrayLike<T>,
      arrays1: ArrayLike<T> | null | undefined,
      arrays2: ArrayLike<T> | null | undefined,
      arrays3: ArrayLike<T> | null | undefined,
      arrays4: ArrayLike<T> | null | undefined,
      arrays5: ArrayLike<T> | null | undefined,
      iteratee?: (value: T) => any
    ): T[]

    /**
     * @see _.UnionBy
     */
    UnionBy<W extends Object>(
      this: ArrayLike<T>,
      arrays1: ArrayLike<T> | null | undefined,
      arrays2: ArrayLike<T> | null | undefined,
      arrays3: ArrayLike<T> | null | undefined,
      arrays4: ArrayLike<T> | null | undefined,
      arrays5: ArrayLike<T> | null | undefined,
      iteratee?: W
    ): T[]

    /**
     * @see _.UnionBy
     */
    UnionBy(
      this: ArrayLike<T>,
      arrays: ArrayLike<T> | null | undefined,
      ...iteratee: any[]
    ): T[]

    /**
     * Creates a duplicate-free version of an array, using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
     * for equality comparisons, in which only the first occurrence of each element
     * is kept.
     *
     * @param {Array} this The array to inspect.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.uniq([2, 1, 2])
     * // => [2, 1]
     */
    Uniq(
      this: ArrayLike<T>
    ): T[]

    /**
     * This method is like `_.uniq` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * @param {Array} this The array to inspect.
     * @param {Function|Object|string} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.uniqBy([2.1, 1.2, 2.3], Math.floor)
     * // => [2.1, 1.2]
     *
     * // using the `_.property` iteratee shorthand
     * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x')
     * // => [{ 'x': 1 }, { 'x': 2 }]
     */
    UniqBy(
      this: ArrayLike<T>,
      iteratee: ListIterator<T, any>
    ): T[]

    /**
     * @see _.UniqBy
     */
    UniqBy<TSort>(
      this: ArrayLike<T>,
      iteratee: ListIterator<T, TSort>
    ): T[]

    /**
     * @see _.UniqBy
     */
    UniqBy(
      this: ArrayLike<T>,
      iteratee: string
    ): T[]

    /**
     * @see _.UniqBy
     */
    UniqBy(
      this: ArrayLike<T>,
      iteratee: Object
    ): T[]

    /**
     * @see _.UniqBy
     */
    UniqBy<TWhere extends object>(
      this: ArrayLike<T>,
      iteratee: TWhere
    ): T[]

    /**
     * This method is like `_.uniq` except that it's designed and optimized
     * for sorted arrays.
     *
     * @param {Array} this The array to inspect.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.SortedUniq([1, 1, 2])
     * // => [1, 2]
     */
    SortedUniq(
      this: ArrayLike<T>
    ): T[]

    /**
     * @see _.SortedUniq
     */
    SortedUniq(
      this: ArrayLike<T>
    ): T[]

    /**
     * This method is like `_.uniqBy` except that it's designed and optimized
     * for sorted arrays.
     *
     * @param {Array} this The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.SortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor)
     * // => [1.1, 2.2]
     */
    SortedUniqBy(
      this: ArrayLike<T>,
      iteratee: ListIterator<T, any>
    ): T[]

    /**
     * @see _.SortedUniqBy
     */
    SortedUniqBy<TSort>(
      this: ArrayLike<T>,
      iteratee: ListIterator<T, TSort>
    ): T[]

    /**
     * @see _.SortedUniqBy
     */
    SortedUniqBy(
      this: ArrayLike<T>,
      iteratee: string
    ): T[]

    /**
     * @see _.SortedUniqBy
     */
    SortedUniqBy(
      this: ArrayLike<T>,
      iteratee: Object
    ): T[]

    /**
     * @see _.SortedUniqBy
     */
    SortedUniqBy<TWhere extends object>(
      this: ArrayLike<T>,
      iteratee: TWhere
    ): T[]

    /**
     * This method is like `_.union` except that it accepts `comparator` which
     * is invoked to compare elements of `arrays`. The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }]
     *
     * _.UnionWith(objects, others, _.isEqual)
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
     */
    UnionWith(
      this: ArrayLike<any>,
      ...values: any[]
    ): any[]

    /**
     * This method is like `_.uniq` except that it accepts `comparator` which
     * is invoked to compare elements of `array`. The comparator is invoked with
     * two arguments: (arrVal, othVal).
     *
     * @param {Array} this The array to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 },  { 'x': 1, 'y': 2 }]
     *
     * _.UniqWith(objects, _.isEqual)
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
     */
    UniqWith(
      this: ArrayLike<any>,
      ...values: any[]
    ): any[]

    /**
     * This method is like _.zip except that it accepts an array of grouped elements and creates an array
     * regrouping the elements to their pre-zip configuration.
     *
     * @param this The array of grouped elements to process.
     * @return Returns the new array of regrouped elements.
     */
    Unzip(this: ArrayLike<T>, array: ArrayLike<ArrayLike<T>> | null | undefined): T[][]

    /**
     * This method is like _.Unzip except that it accepts an iteratee to specify how regrouped values should be
     * combined. The iteratee is bound to thisArg and invoked with four arguments: (accumulator, value, index,
     * group).
     *
     * @param this The array of grouped elements to process.
     * @param iteratee The function to combine regrouped values.
     * @param thisArg The this binding of iteratee.
     * @return Returns the new array of regrouped elements.
     */
    UnzipWith<U>(
      this: ArrayLike<T>,
      array: ArrayLike<ArrayLike<T>> | null | undefined,
      iteratee?: MemoIterator<T, U>
    ): U[]

    /**
     * Creates an array excluding all provided values using SameValueZero for equality comparisons.
     *
     * @param this The array to filter.
     * @param values The values to exclude.
     * @return Returns the new array of filtered values.
     */
    Without(
      this: ArrayLike<T>,
      ...values: T[]
    ): T[]

    /**
     * Creates an array of unique values that is the symmetric difference of the provided arrays.
     *
     * @param thiss The arrays to inspect.
     * @return Returns the new array of values.
     */
    Xor(this: ArrayLike<T>, ...arrays: Array<ArrayLike<T> | null | undefined>): T[]

    /**
     * This method is like `_.xor` except that it accepts `iteratee` which is
     * invoked for each element of each `arrays` to generate the criterion by which
     * uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function|Object|string} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of values.
     * @example
     *
     * _.xorBy([2.1, 1.2], [4.3, 2.4], Math.floor)
     * // => [1.2, 4.3]
     *
     * // using the `_.property` iteratee shorthand
     * _.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x')
     * // => [{ 'x': 2 }]
     */
    XorBy(
      this: ArrayLike<T>,
      ...values: any[]
    ): any[]

    /**
     * This method is like `_.Xor` except that it accepts `comparator` which is
     * invoked to compare elements of `arrays`. The comparator is invoked with
     * two arguments: (arrVal, othVal).
     *
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }]
     *
     * _.xorWith(objects, others, _.isEqual)
     * // => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
     */
    XorWith(
      this: ArrayLike<T>,
      ...values: any[]
    ): any[]

    /**
     * Creates an array of grouped elements, the first of which contains the first elements of the given arrays,
     * the second of which contains the second elements of the given arrays, and so on.
     *
     * @param thiss The arrays to process.
     * @return Returns the new array of grouped elements.
     */
    Zip(this: ArrayLike<T>, ...arrays: Array<ArrayLike<T> | null | undefined>): T[][]

    /**
     * This method is like _.FromPairs except that it accepts two arrays, one of property
     * identifiers and one of corresponding values.
     *
     * @param props The property names.
     * @param values The property values.
     * @return Returns the new object.
     */
    ZipObject<TValues = T>(
      this: ArrayLike<T>,
      props: ArrayLike<StringRepresentable> | ArrayLike<ArrayLike<any>>,
      values?: ArrayLike<TValues>
    ): _.Dictionary<TValues>

    /**
     * This method is like _.ZipObject except that it supports property paths.
     *
     * @param props The property names.
     * @param values The property values.
     * @return Returns the new object.
     */
    ZipObjectDeep<TValues = T>(
      this: ArrayLike<T>,
      props: ArrayLike<StringRepresentable> | ArrayLike<ArrayLike<any>>,
      values?: ArrayLike<TValues>
    ): _.Dictionary<TValues>

    /**
     * This method is like _.Zip except that it accepts an iteratee to specify how grouped values should be
     * combined. The iteratee is bound to thisArg and invoked with four arguments: (accumulator, value, index,
     * group).
     * @param {...Array} [arrays] The arrays to process.
     * @param {Function} [iteratee] The function to combine grouped values.
     * @param {*} [thisArg] The `this` binding of `iteratee`.
     * @return Returns the new array of grouped elements.
     */
    ZipWith<TResult>(this: ArrayLike<T>, ...args: any[]): TResult[]
  }
}

// collection methods
declare global {
  interface Array<T> {
    /**
     * Creates an array of elements corresponding to the given keys, or indexes, of collection. Keys may be
     * specified as individual arguments or as arrays of keys.
     *
     * @param this The collection to iterate over.
     * @param props The property names or indexes of elements to pick, specified individually or in arrays.
     * @return Returns the new array of picked elements.
     */
    At(
      this: ArrayLike<T>,
      ...props: Array<Many<number | string>>
    ): T[]

    /**
     * Creates an object composed of keys generated from the results of running each element of collection through
     * iteratee. The corresponding value of each key is the number of times the key was returned by iteratee. The
     * iteratee is bound to thisArg and invoked with three arguments:
     * (value, index|key, collection).
     *
     * If a property name is provided for iteratee the created _.property style callback returns the property
     * value of the given element.
     *
     * If a value is also provided for thisArg the created _.matchesProperty style callback returns true for
     * elements that have a matching property value, else false.
     *
     * If an object is provided for iteratee the created _.matches style callback returns true for elements that
     * have the properties of the given object, else false.
     *
     * @param this The collection to iterate over.
     * @param iteratee The function invoked per iteration.
     * @param thisArg The this binding of iteratee.
     * @return Returns the composed aggregate object.
     */
    CountBy(
      this: ArrayLike<T>,
      iteratee?: ListIterator<T, any>
    ): Dictionary<number>

    /**
     * @see _.CountBy
     */
    CountBy(
      this: ArrayLike<T>,
      iteratee?: string
    ): Dictionary<number>

    /**
     * @see _.CountBy
     */
    CountBy<W>(
      this: ArrayLike<T>,
      iteratee?: W
    ): Dictionary<number>

    /**
     * @see _.CountBy
     */
    CountBy(
      collection: ArrayLike<T>,
      iteratee?: object
    ): Dictionary<number>

    /**
     * Creates an array of flattened values by running each element in collection through iteratee
     * and concating its result to the other mapped values. The iteratee is invoked with three arguments:
     * (value, index|key, collection).
     *
     * @param this The collection to iterate over.
     * @param iteratee The function invoked per iteration.
     * @return Returns the new flattened array.
     */
    FlatMap(
      this: ArrayLike<Many<T>>,
      iteratee?: ListIterator<T, Many<T>>
    ): T[]

    /**
     * This method is like _.forEach except that it iterates over elements of collection from right to left.
     *
     * @param collection The collection to iterate over.
     * @param iteratee The function called per iteration.
     * @param thisArg The this binding of callback.
     */
    ForEachRight(
      this: T[],
      iteratee?: ListIterator<T, any>
    ): T[]

    /**
     * @see _.ForEachRight
     */
    ForEachRight(
      this: ArrayLike<T>,
      iteratee?: ListIterator<T, any>
    ): ArrayLike<T>

    /**
     * Creates an object composed of keys generated from the results of running each element of collection through
     * iteratee. The corresponding value of each key is an array of the elements responsible for generating the
     * key. The iteratee is bound to thisArg and invoked with three arguments:
     * (value, index|key, collection).
     *
     * If a property name is provided for iteratee the created _.property style callback returns the property
     * value of the given element.
     *
     * If a value is also provided for thisArg the created _.matchesProperty style callback returns true for
     * elements that have a matching property value, else false.
     *
     * If an object is provided for iteratee the created _.matches style callback returns true for elements that
     * have the properties of the given object, else false.
     *
     * @param this The collection to iterate over.
     * @param iteratee The function invoked per iteration.
     * @param thisArg The this binding of iteratee.
     * @return Returns the composed aggregate object.
     */
    GroupBy<TKey>(
      this: ArrayLike<T>,
      iteratee?: ListIterator<T, TKey>
    ): Dictionary<T[]>

    /**
     * @see _.GroupBy
     */
    GroupBy<TValue>(
      this: ArrayLike<T>,
      iteratee?: string
    ): Dictionary<T[]>

    /**
     * @see _.GroupBy
     */
    GroupBy<TWhere>(
      this: ArrayLike<T>,
      iteratee?: TWhere
    ): Dictionary<T[]>

    /**
     * Creates an object composed of keys generated from the results of running each element of collection through
     * iteratee. The corresponding value of each key is the last element responsible for generating the key. The
     * iteratee function is bound to thisArg and invoked with three arguments:
     * (value, index|key, collection).
     *
     * If a property name is provided for iteratee the created _.property style callback returns the property
     * value of the given element.
     *
     * If a value is also provided for thisArg the created _.matchesProperty style callback returns true for
     * elements that have a matching property value, else false.
     *
     * If an object is provided for iteratee the created _.matches style callback returns true for elements that
     * have the properties of the given object, else false.
     *
     * @param collection The collection to iterate over.
     * @param iteratee The function invoked per iteration.
     * @param thisArg The this binding of iteratee.
     * @return Returns the composed aggregate object.
     */
    KeyBy(
      this: ArrayLike<T>,
      iteratee?: ListIterator<T, any>
    ): Dictionary<T>

    /**
     * @see _.KeyBy
     */
    KeyBy(
      this: ArrayLike<T>,
      iteratee?: string
    ): Dictionary<T>

    /**
     * @see _.KeyBy
     */
    KeyBy<W extends object>(
      this: ArrayLike<T>,
      iteratee?: W
    ): Dictionary<T>

    /**
    * Invokes the method named by methodName on each element in the collection returning
    * an array of the results of each invoked method. Additional arguments will be provided
    * to each invoked method. If methodName is a function it will be invoked for, and this
    * bound to, each element in the collection.
    * @param this The collection to iterate over.
    * @param methodName The name of the method to invoke.
    * @param args Arguments to invoke the method with.
    **/
    InvokeMap<TResult>(
      this: T[],
      methodName: string,
      ...args: any[]
    ): TResult[]

    /**
    * @see _.InvokeMap
    **/
    InvokeMap<TResult>(
      this: T[],
      method: (...args: any[]) => TResult,
      ...args: any[]
    ): TResult[]

    /**
      * Creates an array of elements split into two groups, the first of which contains elements predicate returns truthy for,
      * while the second of which contains elements predicate returns falsey for.
      * The predicate is bound to thisArg and invoked with three arguments: (value, index|key, collection).
      *
      * If a property name is provided for predicate the created _.property style callback
      * returns the property value of the given element.
      *
      * If a value is also provided for thisArg the created _.matchesProperty style callback
      * returns true for elements that have a matching property value, else false.
      *
      * If an object is provided for predicate the created _.matches style callback returns
      * true for elements that have the properties of the given object, else false.
      *
      * @param this The collection to iterate over.
      * @param callback The function called per iteration.
      * @param thisArg The this binding of predicate.
      * @return Returns the array of grouped elements.
      **/
    Partition(
      this: ArrayLike<T>,
      callback: ListIterator<T, boolean>
    ): T[][]

    /**
     * @see _.Partition
     **/
    Partition<W>(
      this: ArrayLike<T>,
      whereValue: W
    ): T[][]

    /**
     * @see _.Partition
     **/
    Partition(
      this: ArrayLike<T>,
      path: string,
      srcValue: any
    ): T[][]

    /**
     * @see _.Partition
     **/
    Partition(
      this: ArrayLike<T>,
      pluckValue: string
    ): T[][]

    /**
     * The opposite of _.filter this method returns the elements of collection that predicate does not return
     * truthy for.
     *
     * @param this The collection to iterate over.
     * @param predicate The function invoked per iteration.
     * @param thisArg The this binding of predicate.
     * @return Returns the new filtered array.
     */
    Reject(
      this: ArrayLike<T>,
      predicate?: ListIterator<T, boolean>
    ): T[]

    /**
     * @see _.Reject
     */
    Reject(
      this: ArrayLike<T>,
      predicate: string
    ): T[]

    /**
     * @see _.Reject
     */
    Reject<W extends object>(
      this: ArrayLike<T>,
      predicate: W
    ): T[]

    /**
     * Gets a random element from collection.
     *
     * @param this The collection to sample.
     * @return Returns the random element.
     */
    Sample(this: ArrayLike<T>): T | undefined

    /**
     * Gets n random elements at unique keys from collection up to the size of collection.
     *
     * @param this The collection to sample.
     * @param n The number of elements to sample.
     * @return Returns the random elements.
     */
    SampleSize(
      this: ArrayLike<T>,
      n?: number
    ): T[]

    /**
     * Creates an array of shuffled values, using a version of the Fisher-Yates shuffle.
     *
     * @param this The collection to shuffle.
     * @return Returns the new shuffled array.
     */
    Shuffle(this: ArrayLike<T>): T[]

    /**
     * Gets the size of collection by returning its length for array-like values or the number of own enumerable
     * properties for objects.
     *
     * @param this The collection to inspect.
     * @return Returns the size of collection.
     */
    Size(this: ArrayLike<T>): number

    /**
     * Creates an array of elements, sorted in ascending order by the results of
     * running each element in a collection through each iteratee. This method
     * performs a stable sort, that is, it preserves the original sort order of
     * equal elements. The iteratees are invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @category Collection
     * @param {Array} this The collection to iterate over.
     * @param {...(Function|Function[]|Object|Object[]|string|string[])} [iteratees=[_.identity]]
     *  The iteratees to sort by, specified individually or in arrays.
     * @returns {Array} Returns the new sorted array.
     * @example
     *
     * var users = [
     *   { 'user': 'fred',   'age': 48 },
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 42 },
     *   { 'user': 'barney', 'age': 34 }
     * ]
     *
     * _.SortBy(users, function(o) { return o.user })
     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
     *
     * _.SortBy(users, ['user', 'age'])
     * // => objects for [['barney', 34], ['barney', 36], ['fred', 42], ['fred', 48]]
     *
     * _.SortBy(users, 'user', function(o) {
     *   return Math.floor(o.age / 10)
     * })
     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
     */
    SortBy<TSort>(
      this: ArrayLike<T>,
      iteratee?: ListIterator<T, TSort>
    ): T[]

    /**
     * @see _.SortBy
     */
    SortBy(
      this: ArrayLike<T>,
      iteratee: string
    ): T[]

    /**
     * @see _.SortBy
     */
    SortBy<W extends object>(
      this: ArrayLike<T>,
      whereValue: W
    ): T[]

    /**
     * @see _.SortBy
     */
    SortBy(this: ArrayLike<T>): T[]

    /**
     * @see _.SortBy
     */
    SortBy(
      this: ArrayLike<T>,
      iteratees: Array<ListIterator<T, any> | string | Object>
    ): T[]

    /**
     * @see _.SortBy
     */
    SortBy(
      this: ArrayLike<T>,
      ...iteratees: Array<ListIterator<T, boolean> | Object | string>
    ): T[]

    /**
     * This method is like `_.SortBy` except that it allows specifying the sort
     * orders of the iteratees to sort by. If `orders` is unspecified, all values
     * are sorted in ascending order. Otherwise, specify an order of "desc" for
     * descending or "asc" for ascending sort order of corresponding values.
     *
     * @static
     * @memberOf _
     * @category Collection
     * @param {Array} this The collection to iterate over.
     * @param {Function[]|Object[]|string[]} [iteratees=[_.identity]] The iteratees to sort by.
     * @param {string[]} [orders] The sort orders of `iteratees`.
     * @param- {Object} [guard] Enables use as an iteratee for functions like `_.reduce`.
     * @returns {Array} Returns the new sorted array.
     * @example
     *
     * var users = [
     *   { 'user': 'fred',   'age': 48 },
     *   { 'user': 'barney', 'age': 34 },
     *   { 'user': 'fred',   'age': 42 },
     *   { 'user': 'barney', 'age': 36 }
     * ]
     *
     * // sort by `user` in ascending order and by `age` in descending order
     * _.OrderBy(users, ['user', 'age'], ['asc', 'desc'])
     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
     */
    OrderBy<W extends object>(
      this: ArrayLike<T>,
      iteratees: Many<ListIterator<T, any> | string | W>,
      orders?: Many<boolean | string>
    ): T[]

    /**
     * @see _.OrderBy
     */
    OrderBy(
      this: ArrayLike<T>,
      iteratees: Many<ListIterator<T, any> | string | Object>,
      orders?: Many<boolean | string>
    ): T[]

  }
}