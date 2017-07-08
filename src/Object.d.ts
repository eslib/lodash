import { List, ListIterator, ListOfRecursiveArraysOrValues, Many, RecursiveArray, Dictionary, MemoIterator, StringRepresentable, DictionaryIterator, NumericDictionary, NumericDictionaryIterator, ObjectIterator } from 'lodash'

// collection methods
declare global {
  interface Object {
    /**
     * Creates an array of elements corresponding to the given keys, or indexes, of collection. Keys may be
     * specified as individual arguments or as arrays of keys.
     *
     * @param this The collection to iterate over.
     * @param props The property names or indexes of elements to pick, specified individually or in arrays.
     * @return Returns the new array of picked elements.
     */
    at<T>(
      this: Dictionary<T>,
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
    countBy<T>(
      this: Dictionary<T>,
      iteratee?: DictionaryIterator<T, any>
    ): Dictionary<number>;

    /**
     * @see _.countBy
     */
    countBy<T>(
      this: NumericDictionary<T>,
      iteratee?: NumericDictionaryIterator<T, any>
    ): Dictionary<number>;

    /**
     * @see _.countBy
     */
    countBy<T>(
      this: Dictionary<T> | NumericDictionary<T>,
      iteratee?: string
    ): Dictionary<number>;

    /**
     * @see _.countBy
     */
    countBy<W, T>(
      this: Dictionary<T> | NumericDictionary<T>,
      iteratee?: W
    ): Dictionary<number>;

    /**
     * @see _.countBy
     */
    countBy<T>(
      this: Dictionary<T> | NumericDictionary<T>,
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
    flatMap<T, TResult>(
      this: Dictionary<T>,
      iteratee?: DictionaryIterator<T, Many<TResult>>
    ): TResult[];

    /**
     * @see _.flatMap
     */
    flatMap<TResult>(
      this: Dictionary<any>,
      iteratee?: DictionaryIterator<any, Many<TResult>>
    ): TResult[];

    /**
     * @see _.flatMap
     */
    flatMap<T, TResult>(
      this: NumericDictionary<T>,
      iteratee?: NumericDictionaryIterator<T, Many<TResult>>
    ): TResult[];

    /**
     * @see _.flatMap
     */
    flatMap<TResult>(
      this: NumericDictionary<any>,
      iteratee?: NumericDictionaryIterator<any, Many<TResult>>
    ): TResult[];

    /**
     * @see _.flatMap
     */
    flatMap<TObject extends object, TResult>(
      this: TObject,
      iteratee?: ObjectIterator<any, Many<TResult>>
    ): TResult[];

    /**
     * @see _.flatMap
     */
    flatMap<TResult>(
      this: object,
      iteratee?: ObjectIterator<any, Many<TResult>>
    ): TResult[];

    /**
     * @see _.flatMap
     */
    flatMap<TWhere extends object, TObject extends object>(
      this: TObject,
      iteratee: TWhere
    ): boolean[];

    /**
     * @see _.flatMap
     */
    flatMap<TObject extends object, TResult>(
      this: TObject,
      iteratee: object | string
    ): TResult[];

    /**
     * @see _.flatMap
     */
    flatMap<TObject extends object>(
      this: object,
      iteratee: [string, any]
    ): boolean[];

    /**
     * @see _.flatMap
     */
    flatMap<TResult>(
      this: object,
      iteratee?: object | string
    ): TResult[];

    /**
     * Iterates over elements of collection invoking iteratee for each element. The iteratee is bound to thisArg
     * and invoked with three arguments:
     * (value, index|key, collection). Iteratee functions may exit iteration early by explicitly returning false.
     *
     * Note: As with other "Collections" methods, objects with a "length" property are iterated like arrays. To
     * avoid this behavior _.forIn or _.forOwn may be used for object iteration.
     *
     * @param this The collection to iterate over.
     * @param iteratee The function invoked per iteration.
     * @param thisArg The this binding of iteratee.
     */
    forEach<T>(
      this: Dictionary<T>,
      iteratee?: DictionaryIterator<T, any>
    ): Dictionary<T>;

    /**
     * This method is like _.forEach except that it iterates over elements of collection from right to left.
     *
     * @alias _.eachRight
     *
     * @param this The collection to iterate over.
     * @param iteratee The function called per iteration.
     * @param thisArg The this binding of callback.
     */
    forEachRight<T>(
      this: Dictionary<T>,
      iteratee?: DictionaryIterator<T, any>
    ): Dictionary<T>;

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
    groupBy<T, TKey>(
      this: Dictionary<T>,
      iteratee?: DictionaryIterator<T, TKey>
    ): Dictionary<T[]>;

    /**
     * @see _.groupBy
     */
    groupBy<T, TValue>(
      this: Dictionary<T>,
      iteratee?: string
    ): Dictionary<T[]>;

    /**
     * @see _.groupBy
     */
    groupBy<TWhere extends object, T>(
      this: Dictionary<T>,
      iteratee?: TWhere
    ): Dictionary<T[]>;

    /**
     * Checks if target is in collection using SameValueZero for equality comparisons. If fromIndex is negative,
     * it’s used as the offset from the end of collection.
     *
     * @param this The collection to search.
     * @param target The value to search for.
     * @param fromIndex The index to search from.
     * @return True if the target element is found, else false.
     */
    includes<T>(
      this: Dictionary<T>,
      target: T,
      fromIndex?: number
    ): boolean;

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
     * @param this The collection to iterate over.
     * @param iteratee The function invoked per iteration.
     * @param thisArg The this binding of iteratee.
     * @return Returns the composed aggregate object.
     */
    keyBy<T>(
      this: NumericDictionary<T>,
      iteratee?: NumericDictionaryIterator<T, any>
    ): Dictionary<T>;

    /**
     * @see _.keyBy
     */
    keyBy<T>(
      this: Dictionary<T>,
      iteratee?: DictionaryIterator<T, any>
    ): Dictionary<T>

    /**
     * @see _.keyBy
     */
    keyBy<T>(
      this: NumericDictionary<T> | Dictionary<T>,
      iteratee?: string
    ): Dictionary<T>

    /**
     * @see _.keyBy
     */
    keyBy<TWhere extends object, T>(
      this: NumericDictionary<T> | Dictionary<T>,
      iteratee: TWhere
    ): Dictionary<T>

    /**
      * Invokes the method at path of object.
      * @param this The object to query.
      * @param path The path of the method to invoke.
      * @param args The arguments to invoke the method with.
      **/
    invoke<T extends object, TResult>(
      this: T,
      path: Many<StringRepresentable>,
      ...args: any[]
    ): TResult;

    /**
      * @see _.invoke
      **/
    invoke<T, TResult>(
      this: Dictionary<T>,
      path: Many<StringRepresentable>,
      ...args: any[]
    ): TResult

    /**
      * Invokes the method named by methodName on each element in the collection returning
      * an array of the results of each invoked method. Additional arguments will be provided
      * to each invoked method. If methodName is a function it will be invoked for, and this
      * bound to, each element in the collection.
      * @param this The collection to iterate over.
      * @param methodName The name of the method to invoke.
      * @param args Arguments to invoke the method with.
      **/
    invokeMap<T extends {}, TResult>(
      this: Dictionary<T>,
      methodName: string,
      ...args: any[]
    ): TResult[];

    /**
    * @see _.invokeMap
    **/
    invokeMap<TValue extends {}, TResult>(
      this: Dictionary<TValue>,
      method: (...args: any[]) => TResult,
      ...args: any[]
    ): TResult[];

    /**
     * Creates an array of values by running each element in collection through iteratee. The iteratee is bound to
     * thisArg and invoked with three arguments: (value, index|key, collection).
     *
     * If a property name is provided for iteratee the created _.property style callback returns the property value
     * of the given element.
     *
     * If a value is also provided for thisArg the created _.matchesProperty style callback returns true for
     * elements that have a matching property value, else false.
     *
     * If an object is provided for iteratee the created _.matches style callback returns true for elements that
     * have the properties of the given object, else false.
     *
     * Many lodash methods are guarded to work as iteratees for methods like _.every, _.filter, _.map, _.mapValues,
     * _.reject, and _.some.
     *
     * The guarded methods are:
     * ary, callback, chunk, clone, create, curry, curryRight, drop, dropRight, every, fill, flatten, invert, max,
     * min, parseInt, slice, sortBy, take, takeRight, template, trim, trimLeft, trimRight, trunc, random, range,
     * sample, some, sum, uniq, and words
     *
     * @param collection The collection to iterate over.
     * @param iteratee The function invoked per iteration.
     * @param thisArg The this binding of iteratee.
     * @return Returns the new mapped array.
     */
    map<T extends {}, TResult>(
      this: Dictionary<T>,
      iteratee: DictionaryIterator<T, TResult>
    ): TResult[];

    /** @see _.map */
    map<T, K extends keyof T>(
      this: Dictionary<T>,
      iteratee: K
    ): T[K][]

    /** @see _.map */
    map<T>(this: Dictionary<T>): T[]

    /** @see _.map */
    map<T extends {}, TResult>(
      this: NumericDictionary<T>,
      iteratee?: NumericDictionaryIterator<T, TResult>
    ): TResult[]

    /**
     * @see _.map
     */
    map<T, TObject extends object>(
      this: Dictionary<T> | NumericDictionary<T>,
      iteratee?: TObject
    ): boolean[];

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
      * @param collection The collection to iterate over.
      * @param callback The function called per iteration.
      * @param thisArg The this binding of predicate.
      * @return Returns the array of grouped elements.
      **/
    partition<T>(
      this: Dictionary<T>,
      callback: DictionaryIterator<T, boolean>
    ): T[][];

    /**
     * @see _.partition
     **/
    partition<W extends object, T>(
      this: Dictionary<T>,
      whereValue: W
    ): T[][];

    /**
     * @see _.partition
     **/
    partition<T>(
      this: Dictionary<T>,
      path: string,
      srcValue: any
    ): T[][]

    /**
     * @see _.partition
     **/
    partition<T, K extends keyof T>(
      this: Dictionary<T>,
      pluckValue: K
    ): T[][]

    /**
      * Reduces a collection to a value which is the accumulated result of running each
      * element in the collection through the callback, where each successive callback execution
      * consumes the return value of the previous execution. If accumulator is not provided the
      * first element of the collection will be used as the initial accumulator value. The callback
      * is bound to thisArg and invoked with four arguments; (accumulator, value, index|key, collection).
      * @param collection The collection to iterate over.
      * @param callback The function called per iteration.
      * @param accumulator Initial value of the accumulator.
      * @param thisArg The this binding of callback.
      * @return Returns the accumulated value.
      **/
    reduce<T, TResult>(
      this: Dictionary<T>,
      callback: MemoIterator<T, TResult>,
      accumulator: TResult): TResult;

    /**
    * @see _.reduce
    **/
    reduce<T, TResult>(
      this: NumericDictionary<T>,
      callback: MemoIterator<T, TResult>,
      accumulator: TResult): TResult;

    /**
    * @see _.reduce
    **/
    reduce<T, TResult>(
      this: Dictionary<T>,
      callback: MemoIterator<T, TResult>): TResult | undefined;

    /**
    * @see _.reduce
    **/
    reduce<T, TResult>(
      this: NumericDictionary<T>,
      callback: MemoIterator<T, TResult>): TResult | undefined;

    /**
      * This method is like _.reduce except that it iterates over elements of a collection from
      * right to left.
      * @param collection The collection to iterate over.
      * @param callback The function called per iteration.
      * @param accumulator Initial value of the accumulator.
      * @param thisArg The this binding of callback.
      * @return The accumulated value.
      **/
    reduceRight<T, TResult>(
      this: Dictionary<T>,
      callback: MemoIterator<T, TResult>,
      accumulator: TResult): TResult;

    /**
   * @see _.reduceRight
   **/
    reduceRight<T, TResult>(
      this: Dictionary<T>,
      callback: MemoIterator<T, TResult>): TResult | undefined;

    /**
     * The opposite of _.filter; this method returns the elements of collection that predicate does not return
     * truthy for.
     *
     * @param collection The collection to iterate over.
     * @param predicate The function invoked per iteration.
     * @param thisArg The this binding of predicate.
     * @return Returns the new filtered array.
     */
    reject<T>(
      this: Dictionary<T>,
      predicate?: DictionaryIterator<T, boolean>
    ): T[];

    /**
     * @see _.reject
     */
    reject<T>(
      this: Dictionary<T>,
      predicate: string
    ): T[];

    /**
     * @see _.reject
     */
    reject<W extends object, T>(
      this: Dictionary<T>,
      predicate: W
    ): T[];

    /**
     * Gets a random element from collection.
     *
     * @param collection The collection to sample.
     * @return Returns the random element.
     */
    sample<O extends object, T>(
      this: O | Dictionary<T> | NumericDictionary<T>
    ): T | undefined;

    /**
     * Gets n random elements at unique keys from collection up to the size of collection.
     *
     * @param collection The collection to sample.
     * @param n The number of elements to sample.
     * @return Returns the random elements.
     */
    sampleSize<O extends object, T>(
      this: O | Dictionary<T> | NumericDictionary<T>,
      n?: number
    ): T[];

    /**
     * Creates an array of shuffled values, using a version of the Fisher-Yates shuffle.
     *
     * @param collection The collection to shuffle.
     * @return Returns the new shuffled array.
     */
    shuffle<T>(this: Dictionary<T>): T[];

    /**
     * Gets the size of collection by returning its length for array-like values or the number of own enumerable
     * properties for objects.
     *
     * @param collection The collection to inspect.
     * @return Returns the size of collection.
     */
    size<T>(this: Dictionary<T>): number;

    /**
     * Checks if predicate returns truthy for any element of collection. Iteration is stopped once predicate
     * returns truthy. The predicate is invoked with three arguments: (value, index|key, collection).
     *
     * @param collection The collection to iterate over.
     * @param predicate The function invoked per iteration.
     * @return Returns true if any element passes the predicate check, else false.
     */
    some<T>(
      this: Dictionary<T>,
      predicate?: DictionaryIterator<T, boolean>
    ): boolean;

    /**
     * @see _.some
     */
    some<T>(
      this: NumericDictionary<T>,
      predicate?: NumericDictionaryIterator<T, boolean>
    ): boolean;

    /**
     * @see _.some
     */
    some<T extends object>(
      this: T,
      predicate?: ObjectIterator<any, boolean>
    ): boolean;

    /**
     * @see _.some
     */
    some<T>(
      this: Dictionary<T> | NumericDictionary<T>,
      predicate?: string | [string, any]
    ): boolean;

    /**
     * @see _.some
     */
    some<T extends object>(
      this: T,
      predicate?: string | [string, any]
    ): boolean;

    /**
     * @see _.some
     */
    some<T extends object>(
      this: T,
      predicate?: Partial<T>
    ): boolean;

    /**
     * Creates an array of elements, sorted in ascending order by the results of
     * running each element in a collection through each iteratee. This method
     * performs a stable sort, that is, it preserves the original sort order of
     * equal elements. The iteratees are invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
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
     * ];
     *
     * _.sortBy(users, function(o) { return o.user; });
     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
     *
     * _.sortBy(users, ['user', 'age']);
     * // => objects for [['barney', 34], ['barney', 36], ['fred', 42], ['fred', 48]]
     *
     * _.sortBy(users, 'user', function(o) {
     *   return Math.floor(o.age / 10);
     * });
     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
     */
    sortBy<T, TSort>(
      this: Dictionary<T>,
      iteratee?: DictionaryIterator<T, TSort>
    ): T[];

    /**
     * @see _.sortBy
     */
    sortBy<T extends object, K extends keyof T>(
      this: T,
      iteratee: K
    ): T[];

    /**
     * @see _.sortBy
     */
    sortBy<T extends object, W extends Partial<T>>(
      this: T,
      where: W
    ): T[];

    /**
     * @see _.sortBy
     */
    sortBy<T>(
      this: Dictionary<T>
    ): T[];

    /**
     * This method is like `_.sortBy` except that it allows specifying the sort
     * orders of the iteratees to sort by. If `orders` is unspecified, all values
     * are sorted in ascending order. Otherwise, specify an order of "desc" for
     * descending or "asc" for ascending sort order of corresponding values.
     *
     * @static
     * @memberOf _
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
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
     * ];
     *
     * // sort by `user` in ascending order and by `age` in descending order
     * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
     */
    orderBy<W extends Object, T>(
      this: NumericDictionary<T>,
      iteratees: Many<NumericDictionaryIterator<T, any> | string | W>,
      orders?: Many<boolean | string>
    ): T[];

    /**
     * @see _.orderBy
     */
    orderBy<T>(
      this: NumericDictionary<T>,
      iteratees: Many<NumericDictionaryIterator<T, any> | string | Object>,
      orders?: Many<boolean | string>
    ): T[];

    /**
     * @see _.orderBy
     */
    orderBy<W extends Object, T>(
      this: Dictionary<T>,
      iteratees: Many<DictionaryIterator<T, any> | string | W>,
      orders?: Many<boolean | string>
    ): T[];

    /**
     * @see _.orderBy
     */
    orderBy<T>(
      this: Dictionary<T>,
      iteratees: Many<DictionaryIterator<T, any> | string | Object>,
      orders?: Many<boolean | string>
    ): T[];

  }
}