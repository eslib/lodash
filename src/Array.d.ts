import { List, ListIterator, ListOfRecursiveArraysOrValues, Many, RecursiveArray, Dictionary, MemoIterator, StringRepresentable } from 'lodash'

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
    chunk(this: List<T>, size?: number): T[][]

    /**
     * Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are
     * falsey.
     *
     * @param this The array to compact.
     * @return (Array) Returns the new array of filtered values.
     */
    compact(this: List<T | null | undefined | false | 0 | ''>): T[]

    /**
     * Creates an array of unique array values not included in the other provided arrays using SameValueZero for
     * equality comparisons.
     *
     * @param this The array to inspect.
     * @param values The arrays of values to exclude.
     * @return Returns the new array of filtered values.
     */
    difference(
      this: List<T>,
      ...values: Array<List<T>>
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
    differenceBy(
      this: List<T>,
      values?: List<T>,
      iteratee?: ((value: T) => any) | string
    ): T[]

    /**
     * @see _.differenceBy
     */
    differenceBy<W extends Object>(
      this: List<T>,
      values?: List<T>,
      iteratee?: W
    ): T[]

    /**
     * @see _.differenceBy
     */
    differenceBy(
      this: List<T>,
      values1?: List<T>,
      values2?: List<T>,
      iteratee?: ((value: T) => any) | string
    ): T[]

    /**
     * @see _.differenceBy
     */
    differenceBy<W extends Object>(
      this: List<T>,
      values1?: List<T>,
      values2?: List<T>,
      iteratee?: W
    ): T[]

    /**
     * @see _.differenceBy
     */
    differenceBy(
      this: List<T>,
      values1?: List<T>,
      values2?: List<T>,
      values3?: List<T>,
      iteratee?: ((value: T) => any) | string
    ): T[]

    /**
     * @see _.differenceBy
     */
    differenceBy<T, W extends Object>(
      this: List<T>,
      values1?: List<T>,
      values2?: List<T>,
      values3?: List<T>,
      iteratee?: W
    ): T[]

    /**
     * @see _.differenceBy
     */
    differenceBy<T, W extends Object>(
      this: List<T>,
      values1?: List<T>,
      values2?: List<T>,
      values3?: List<T>,
      values4?: List<T>,
      iteratee?: W
    ): T[]

    /**
     * @see _.differenceBy
     */
    differenceBy(
      this: List<T>,
      values1?: List<T>,
      values2?: List<T>,
      values3?: List<T>,
      values4?: List<T>,
      iteratee?: ((value: T) => any) | string
    ): T[]

    /**
     * @see _.differenceBy
     */
    differenceBy(
      this: List<T>,
      values1?: List<T>,
      values2?: List<T>,
      values3?: List<T>,
      values4?: List<T>,
      values5?: List<T>,
      iteratee?: ((value: T) => any) | string
    ): T[]

    /**
     * @see _.differenceBy
     */
    differenceBy<T, W extends Object>(
      this: List<T>,
      values1?: List<T>,
      values2?: List<T>,
      values3?: List<T>,
      values4?: List<T>,
      values5?: List<T>,
      iteratee?: W
    ): T[]

    /**
     * @see _.differenceBy
     */
    differenceBy(
      this: List<T>,
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
     * _.difference([3, 2, 1], [4, 2]);
     * // => [3, 1]
     */
    differenceWith(
      this: List<T>,
      ...values: any[]
    ): T[]

    /**
     * Creates a slice of array with n elements dropped from the beginning.
     *
     * @param this The array to query.
     * @param n The number of elements to drop.
     * @return Returns the slice of array.
     */
    drop(this: List<T>, n?: number): T[]

    /**
     * Creates a slice of array with n elements dropped from the end.
     *
     * @param this The array to query.
     * @param n The number of elements to drop.
     * @return Returns the slice of array.
     */
    dropRight(
      this: List<T>,
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
    dropRightWhile(
      this: List<T>,
      predicate?: ListIterator<T, boolean>
    ): T[]

    /**
     * @see _.dropRightWhile
     */
    dropRightWhile(
      this: List<T>,
      predicate?: string
    ): T[]

    /**
     * @see _.dropRightWhile
     */
    dropRightWhile<U>(
      this: List<T>,
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
    dropWhile(
      this: List<T>,
      predicate?: ListIterator<T, boolean>
    ): T[]

    /**
     * @see _.dropWhile
     */
    dropWhile(
      this: List<T>,
      predicate?: string
    ): T[]

    /**
     * @see _.dropWhile
     */
    dropWhile<U>(
      this: List<T>,
      predicate?: U
    ): T[]

    /**
     * This method is like _.findIndex except that it iterates over elements of collection from right to left.
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
    findLastIndex(
      this: List<T>,
      predicate?: ListIterator<T, boolean>,
      fromIndex?: number
    ): number

    /**
     * @see _.findLastIndex
     */
    findLastIndex(
      this: List<T>,
      predicate?: string,
      fromIndex?: number
    ): number

    /**
     * @see _.findLastIndex
     */
    findLastIndex<W>(
      this: List<T>,
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
    flatten(this: ListOfRecursiveArraysOrValues<T>, isDeep: boolean): T[]

    /**
     * @see _.flatten
     */
    flatten(this: List<Many<T>>): T[]

    /**
     * @see _.flatten
     */
    flatten(this: ListOfRecursiveArraysOrValues<T>): RecursiveArray<T>

    /**
     * Recursively flattens a nested array.
     *
     * @param this The array to recursively flatten.
     * @return Returns the new flattened array.
     */
    flattenDeep(this: ListOfRecursiveArraysOrValues<T>): T[]

    /**
    * Recursively flatten array up to depth times.
    *
    * @param this The array to recursively flatten.
    * @param number The maximum recursion depth.
    * @return Returns the new flattened array.
    */
    flattenDepth(this: ListOfRecursiveArraysOrValues<T>, depth?: number): T[]

    /**
     * The inverse of `_.toPairs`; this method returns an object composed
     * from key-value `pairs`.
     *
     * @param {Array} pairs The key-value pairs.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.fromPairs([['fred', 30], ['barney', 40]]);
     * // => { 'fred': 30, 'barney': 40 }
     */
    fromPairs(
      this: List<[_.StringRepresentable, T]>
    ): Dictionary<T>

    /**
     @see _.fromPairs
     */
    fromPairs(
      this: List<any[]>
    ): Dictionary<any>

    /**
     * Gets the first element of array.
     *
     * @alias _.first
     *
     * @param this The array to query.
     * @return Returns the first element of array.
     */
    head(this: List<T>): T | undefined

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
     * _.intersectionBy([2.1, 1.2], [4.3, 2.4], Math.floor);
     * // => [2.1]
     *
     * // using the `_.property` iteratee shorthand
     * _.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }]
     */
    intersectionBy(
      this: List<any>,
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
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.intersectionWith(objects, others, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }]
     */
    intersectionWith(
      this: List<any>,
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
     * var array = [1, 2, 3, 1, 2, 3];
     *
     * _.pull(array, [2, 3]);
     * console.log(array);
     * // => [1, 1]
     */
    pullAll(
      this: List<any>,
      ...values: any[]
    ): any[]

    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to to generate the criterion
     * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @param {Array} this The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function|Object|string} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    pullAllBy(
      this: List<any>,
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
     * _.sortedIndexOf([1, 1, 2, 2], 2);
     * // => 2
     */
    sortedIndexOf(
      this: List<T>,
      value: T
    ): number

    /**
     * Gets all but the last element of array.
     *
     * @param this The array to query.
     * @return Returns the slice of array.
     */
    initial(this: List<T>): T[]

    /**
     * Creates an array of unique values that are included in all of the provided arrays using SameValueZero for
     * equality comparisons.
     *
     * @param arrays The arrays to inspect.
     * @return Returns the new array of shared values.
     */
    intersection(this: List<T>, ...arrays: Array<List<T>>): T[]

    /**
     * Gets the last element of array.
     *
     * @param this The array to query.
     * @return Returns the last element of array.
     */
    last(this: List<T>): T | undefined

    /**
     * Gets the element at index `n` of `array`. If `n` is negative, the nth element from the end is returned.
     *
     * @param this array The array to query.
     * @param value The index of the element to return.
     * @return Returns the nth element of `array`.
     */
    nth(
      this: List<T>,
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
    pull(
      this: T[],
      ...values: T[]
    ): T[]

    /**
     * @see _.pull
     */
    pull(
      this: List<T>,
      ...values: T[]
    ): List<T>

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
    pullAt(
      this: List<T>,
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
    remove(
      this: List<T>,
      predicate?: ListIterator<T, boolean>
    ): T[]

    /**
     * @see _.remove
     */
    remove(
      this: List<T>,
      predicate?: string
    ): T[]

    /**
     * @see _.remove
     */
    remove<W>(
      this: List<T>,
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
    tail(this: List<T>): T[]

    /**
     * Uses a binary search to determine the lowest index at which `value` should
     * be inserted into `array` in order to maintain its sort order.
     *
     * @param {Array} this The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @returns {number} Returns the index at which `value` should be inserted into `array`.
     * @example
     *
     * _.sortedIndex([30, 50], 40);
     * // => 1
     *
     * _.sortedIndex([4, 5], 4);
     * // => 0
     */
    sortedIndex(
      this: List<T>,
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
     * var dict = { 'thirty': 30, 'forty': 40, 'fifty': 50 };
     *
     * _.sortedIndexBy(['thirty', 'fifty'], 'forty', _.propertyOf(dict));
     * // => 1
     *
     * // using the `_.property` iteratee shorthand
     * _.sortedIndexBy([{ 'x': 4 }, { 'x': 5 }], { 'x': 4 }, 'x');
     * // => 0
     */
    sortedIndexBy<U>(
      this: List<T>,
      value: T,
      iteratee: (x: T) => U
    ): number

    /**
     * @see _.sortedIndexBy
     */
    sortedIndexBy(
      this: List<T>,
      value: T,
      iteratee: (x: T) => any
    ): number

    /**
     * @see _.sortedIndexBy
     */
    sortedIndexBy(
      this: List<T>,
      value: T,
      iteratee: string
    ): number

    /**
     * @see _.sortedIndexBy
     */
    sortedIndexBy<W>(
      this: List<T>,
      value: T,
      iteratee: W
    ): number

    /**
     * @see _.sortedIndexBy
     */
    sortedIndexBy(
      this: List<T>,
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
     * _.sortedLastIndex([4, 5], 4);
     * // => 1
     */
    sortedLastIndex(
      this: List<T>,
      value: T
    ): number

    /**
     * This method is like `_.sortedLastIndex` except that it accepts `iteratee`
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
     * _.sortedLastIndexBy([{ 'x': 4 }, { 'x': 5 }], { 'x': 4 }, 'x');
     * // => 1
     */
    sortedLastIndexBy<TSort>(
      this: List<T>,
      value: T,
      iteratee: (x: T) => TSort
    ): number

    /**
     * @see _.sortedLastIndexBy
     */
    sortedLastIndexBy(
      this: List<T>,
      value: T,
      iteratee: (x: T) => any
    ): number

    /**
     * @see _.sortedLastIndexBy
     */
    sortedLastIndexBy(
      this: List<T>,
      value: T,
      iteratee: string
    ): number

    /**
     * @see _.sortedLastIndexBy
     */
    sortedLastIndexBy<W>(
      this: List<T>,
      value: T,
      iteratee: W
    ): number

    /**
     * @see _.sortedLastIndexBy
     */
    sortedLastIndexBy(
      this: List<T>,
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
     * _.sortedLastIndexOf([1, 1, 2, 2], 2);
     * // => 3
     */
    sortedLastIndexOf(
      this: List<T>,
      value: T
    ): number

    /**
     * Creates a slice of array with n elements taken from the beginning.
     *
     * @param this The array to query.
     * @param n The number of elements to take.
     * @return Returns the slice of array.
     */
    take(
      this: List<T>,
      n?: number
    ): T[]

    /**
     * Creates a slice of array with n elements taken from the end.
     *
     * @param this The array to query.
     * @param n The number of elements to take.
     * @return Returns the slice of array.
     */
    takeRight(
      this: List<T>,
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
    takeRightWhile(
      this: List<T>,
      predicate?: ListIterator<T, boolean>
    ): T[]

    /**
     * @see _.takeRightWhile
     */
    takeRightWhile(
      this: List<T>,
      predicate?: string
    ): T[]

    /**
     * @see _.takeRightWhile
     */
    takeRightWhile<TWhere>(
      this: List<T>,
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
    takeWhile(
      this: List<T>,
      predicate?: ListIterator<T, boolean>
    ): T[]

    /**
     * @see _.takeWhile
     */
    takeWhile(
      this: List<T>,
      predicate?: string
    ): T[]

    /**
     * @see _.takeWhile
     */
    takeWhile<TWhere>(
      this: List<T>,
      predicate?: TWhere
    ): T[]

    /**
     * Creates an array of unique values, in order, from all of the provided arrays using SameValueZero for
     * equality comparisons.
     *
     * @param thiss The arrays to inspect.
     * @return Returns the new array of combined values.
     */
    union(this: List<T>, ...arrays: Array<List<T> | null | undefined>): T[]

    /**
     * This method is like `_.union` except that it accepts `iteratee` which is
     * invoked for each element of each `arrays` to generate the criterion by which
     * uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * @param arrays The arrays to inspect.
     * @param iteratee The iteratee invoked per element.
     * @return Returns the new array of combined values.
     */
    unionBy(
      this: List<T>,
      arrays: List<T>,
      iteratee?: (value: T) => any
    ): T[]

    /**
     * @see _.unionBy
     */
    unionBy<W extends Object>(
      this: List<T>,
      arrays: List<T>,
      iteratee?: W
    ): T[]

    /**
     * @see _.unionBy
     */
    unionBy(
      this: List<T>,
      arrays1: List<T> | null | undefined,
      arrays2: List<T> | null | undefined,
      iteratee?: (value: T) => any
    ): T[]

    /**
     * @see _.unionBy
     */
    unionBy<W extends Object>(
      this: List<T>,
      arrays1: List<T> | null | undefined,
      arrays2: List<T> | null | undefined,
      iteratee?: W
    ): T[]

    /**
     * @see _.unionBy
     */
    unionBy(
      this: List<T>,
      arrays1: List<T> | null | undefined,
      arrays2: List<T> | null | undefined,
      arrays3: List<T> | null | undefined,
      iteratee?: (value: T) => any
    ): T[]

    /**
     * @see _.unionBy
     */
    unionBy<W extends Object>(
      this: List<T>,
      arrays1: List<T> | null | undefined,
      arrays2: List<T> | null | undefined,
      arrays3: List<T> | null | undefined,
      iteratee?: W
    ): T[]

    /**
     * @see _.unionBy
     */
    unionBy(
      this: List<T>,
      arrays1: List<T> | null | undefined,
      arrays2: List<T> | null | undefined,
      arrays3: List<T> | null | undefined,
      arrays4: List<T> | null | undefined,
      iteratee?: (value: T) => any
    ): T[]

    /**
     * @see _.unionBy
     */
    unionBy<W extends Object>(
      this: List<T>,
      arrays1: List<T> | null | undefined,
      arrays2: List<T> | null | undefined,
      arrays3: List<T> | null | undefined,
      arrays4: List<T> | null | undefined,
      iteratee?: W
    ): T[]

    /**
     * @see _.unionBy
     */
    unionBy(
      this: List<T>,
      arrays1: List<T> | null | undefined,
      arrays2: List<T> | null | undefined,
      arrays3: List<T> | null | undefined,
      arrays4: List<T> | null | undefined,
      arrays5: List<T> | null | undefined,
      iteratee?: (value: T) => any
    ): T[]

    /**
     * @see _.unionBy
     */
    unionBy<W extends Object>(
      this: List<T>,
      arrays1: List<T> | null | undefined,
      arrays2: List<T> | null | undefined,
      arrays3: List<T> | null | undefined,
      arrays4: List<T> | null | undefined,
      arrays5: List<T> | null | undefined,
      iteratee?: W
    ): T[]

    /**
     * @see _.unionBy
     */
    unionBy(
      this: List<T>,
      arrays: List<T> | null | undefined,
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
     * _.uniq([2, 1, 2]);
     * // => [2, 1]
     */
    uniq(
      this: List<T>
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
     * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
     * // => [2.1, 1.2]
     *
     * // using the `_.property` iteratee shorthand
     * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }, { 'x': 2 }]
     */
    uniqBy(
      this: List<T>,
      iteratee: ListIterator<T, any>
    ): T[]

    /**
     * @see _.uniqBy
     */
    uniqBy<TSort>(
      this: List<T>,
      iteratee: ListIterator<T, TSort>
    ): T[]

    /**
     * @see _.uniqBy
     */
    uniqBy(
      this: List<T>,
      iteratee: string
    ): T[]

    /**
     * @see _.uniqBy
     */
    uniqBy(
      this: List<T>,
      iteratee: Object
    ): T[]

    /**
     * @see _.uniqBy
     */
    uniqBy<TWhere extends object>(
      this: List<T>,
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
     * _.sortedUniq([1, 1, 2]);
     * // => [1, 2]
     */
    sortedUniq(
      this: List<T>
    ): T[]

    /**
     * @see _.sortedUniq
     */
    sortedUniq(
      this: List<T>
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
     * _.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
     * // => [1.1, 2.2]
     */
    sortedUniqBy(
      this: List<T>,
      iteratee: ListIterator<T, any>
    ): T[]

    /**
     * @see _.sortedUniqBy
     */
    sortedUniqBy<TSort>(
      this: List<T>,
      iteratee: ListIterator<T, TSort>
    ): T[]

    /**
     * @see _.sortedUniqBy
     */
    sortedUniqBy(
      this: List<T>,
      iteratee: string
    ): T[]

    /**
     * @see _.sortedUniqBy
     */
    sortedUniqBy(
      this: List<T>,
      iteratee: Object
    ): T[]

    /**
     * @see _.sortedUniqBy
     */
    sortedUniqBy<TWhere extends object>(
      this: List<T>,
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
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.unionWith(objects, others, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
     */
    unionWith(
      this: List<any>,
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
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 },  { 'x': 1, 'y': 2 }];
     *
     * _.uniqWith(objects, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
     */
    uniqWith(
      this: List<any>,
      ...values: any[]
    ): any[]

    /**
     * This method is like _.zip except that it accepts an array of grouped elements and creates an array
     * regrouping the elements to their pre-zip configuration.
     *
     * @param this The array of grouped elements to process.
     * @return Returns the new array of regrouped elements.
     */
    unzip(this: List<T>, array: List<List<T>> | null | undefined): T[][]

    /**
     * This method is like _.unzip except that it accepts an iteratee to specify how regrouped values should be
     * combined. The iteratee is bound to thisArg and invoked with four arguments: (accumulator, value, index,
     * group).
     *
     * @param this The array of grouped elements to process.
     * @param iteratee The function to combine regrouped values.
     * @param thisArg The this binding of iteratee.
     * @return Returns the new array of regrouped elements.
     */
    unzipWith<U>(
      this: List<T>,
      array: List<List<T>> | null | undefined,
      iteratee?: MemoIterator<T, U>
    ): U[]

    /**
     * Creates an array excluding all provided values using SameValueZero for equality comparisons.
     *
     * @param this The array to filter.
     * @param values The values to exclude.
     * @return Returns the new array of filtered values.
     */
    without(
      this: List<T>,
      ...values: T[]
    ): T[]

    /**
     * Creates an array of unique values that is the symmetric difference of the provided arrays.
     *
     * @param thiss The arrays to inspect.
     * @return Returns the new array of values.
     */
    xor(this: List<T>, ...arrays: Array<List<T> | null | undefined>): T[]

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
     * _.xorBy([2.1, 1.2], [4.3, 2.4], Math.floor);
     * // => [1.2, 4.3]
     *
     * // using the `_.property` iteratee shorthand
     * _.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 2 }]
     */
    xorBy(
      this: List<T>,
      ...values: any[]
    ): any[]

    /**
     * This method is like `_.xor` except that it accepts `comparator` which is
     * invoked to compare elements of `arrays`. The comparator is invoked with
     * two arguments: (arrVal, othVal).
     *
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.xorWith(objects, others, _.isEqual);
     * // => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
     */
    xorWith(
      this: List<T>,
      ...values: any[]
    ): any[]

    /**
     * Creates an array of grouped elements, the first of which contains the first elements of the given arrays,
     * the second of which contains the second elements of the given arrays, and so on.
     *
     * @param thiss The arrays to process.
     * @return Returns the new array of grouped elements.
     */
    zip(this: List<T>, ...arrays: Array<List<T> | null | undefined>): T[][]

    /**
     * This method is like _.fromPairs except that it accepts two arrays, one of property
     * identifiers and one of corresponding values.
     *
     * @param props The property names.
     * @param values The property values.
     * @return Returns the new object.
     */
    zipObject<TValues = T>(
      this: List<T>,
      props: List<StringRepresentable> | List<List<any>>,
      values?: List<TValues>
    ): _.Dictionary<TValues>

    /**
     * This method is like _.zipObject except that it supports property paths.
     *
     * @param props The property names.
     * @param values The property values.
     * @return Returns the new object.
     */
    zipObjectDeep<TValues = T>(
      this: List<T>,
      props: List<StringRepresentable> | List<List<any>>,
      values?: List<TValues>
    ): _.Dictionary<TValues>

    /**
     * This method is like _.zip except that it accepts an iteratee to specify how grouped values should be
     * combined. The iteratee is bound to thisArg and invoked with four arguments: (accumulator, value, index,
     * group).
     * @param {...Array} [arrays] The arrays to process.
     * @param {Function} [iteratee] The function to combine grouped values.
     * @param {*} [thisArg] The `this` binding of `iteratee`.
     * @return Returns the new array of grouped elements.
     */
    zipWith<TResult>(this: List<T>, ...args: any[]): TResult[]
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
    at(
      this: List<T>,
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
    countBy(
      this: List<T>,
      iteratee?: ListIterator<T, any>
    ): Dictionary<number>;

    /**
     * @see _.countBy
     */
    countBy(
      this: List<T>,
      iteratee?: string
    ): Dictionary<number>;

    /**
     * @see _.countBy
     */
    countBy<W>(
      this: List<T>,
      iteratee?: W
    ): Dictionary<number>;

    /**
     * @see _.countBy
     */
    countBy(
      collection: List<T>,
      iteratee?: object
    ): Dictionary<number>;

    /**
     * Creates an array of flattened values by running each element in collection through iteratee
     * and concating its result to the other mapped values. The iteratee is invoked with three arguments:
     * (value, index|key, collection).
     *
     * @param this The collection to iterate over.
     * @param iteratee The function invoked per iteration.
     * @return Returns the new flattened array.
     */
    flatMap(
      this: List<Many<T>>,
      iteratee?: ListIterator<T, Many<T>>
    ): T[];

  }
}