import { Many, Dictionary, DictionaryIterator, NumericDictionary, NumericDictionaryIterator, ObjectIterator } from 'lodash'

// collection methods
declare global {
  interface Object {
    /**
     * Assigns own enumerable properties of source objects to the destination
     * object. Source objects are applied from left to right. Subsequent sources
     * overwrite property assignments of previous sources.
     *
     * **Note:** This method mutates `object` and is loosely based on
     * [`Object.assign`](https://mdn.io/Object/assign).
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {Object} this The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @example
     *
     * function Foo() {
     *   this.c = 3;
     * }
     *
     * function Bar() {
     *   this.e = 5;
     * }
     *
     * Foo.prototype.d = 4;
     * Bar.prototype.f = 6;
     *
     * _.assign({ 'a': 1 }, new Foo, new Bar);
     * // => { 'a': 1, 'c': 3, 'e': 5 }
     */
    assign<TObject, TSource>(
      this: TObject,
      source: TSource
    ): TObject & TSource

    /**
     * @see assign
     */
    assign<TObject, TSource1, TSource2>(
      this: TObject,
      source1: TSource1,
      source2: TSource2
    ): TObject & TSource1 & TSource2

    /**
     * @see assign
     */
    assign<TObject, TSource1, TSource2, TSource3>(
      this: TObject,
      source1: TSource1,
      source2: TSource2,
      source3: TSource3
    ): TObject & TSource1 & TSource2 & TSource3

    /**
     * @see assign
     */
    assign<TObject, TSource1, TSource2, TSource3, TSource4>(
      this: TObject,
      source1: TSource1,
      source2: TSource2,
      source3: TSource3,
      source4: TSource4
    ): TObject & TSource1 & TSource2 & TSource3 & TSource4

    /**
     * @see _.assign
     */
    assign<TObject>(this: TObject): TObject

    /**
     * @see _.assign
     */
    assign<TResult>(
      this: any,
      ...otherArgs: any[]
    ): TResult

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
    ): Dictionary<number>

    /**
     * @see _.countBy
     */
    countBy<T>(
      this: NumericDictionary<T>,
      iteratee?: NumericDictionaryIterator<T, any>
    ): Dictionary<number>

    /**
     * @see _.countBy
     */
    countBy<T>(
      this: Dictionary<T> | NumericDictionary<T>,
      iteratee?: string
    ): Dictionary<number>

    /**
     * @see _.countBy
     */
    countBy<W, T>(
      this: Dictionary<T> | NumericDictionary<T>,
      iteratee?: W
    ): Dictionary<number>

    /**
     * @see _.countBy
     */
    countBy<T>(
      this: Dictionary<T> | NumericDictionary<T>,
      iteratee?: Object
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
    flatMap<T, TResult>(
      this: Dictionary<T>,
      iteratee?: DictionaryIterator<T, Many<TResult>>
    ): TResult[]

    /**
     * @see _.flatMap
     */
    flatMap<TResult>(
      this: Dictionary<any>,
      iteratee?: DictionaryIterator<any, Many<TResult>>
    ): TResult[]

    /**
     * @see _.flatMap
     */
    flatMap<T, TResult>(
      this: NumericDictionary<T>,
      iteratee?: NumericDictionaryIterator<T, Many<TResult>>
    ): TResult[]

    /**
     * @see _.flatMap
     */
    flatMap<TResult>(
      this: NumericDictionary<any>,
      iteratee?: NumericDictionaryIterator<any, Many<TResult>>
    ): TResult[]

    /**
     * @see _.flatMap
     */
    flatMap<TObject extends Object, TResult>(
      this: TObject,
      iteratee?: ObjectIterator<any, Many<TResult>>
    ): TResult[]

    /**
     * @see _.flatMap
     */
    flatMap<TResult>(
      this: Object,
      iteratee?: ObjectIterator<any, Many<TResult>>
    ): TResult[]

    /**
     * @see _.flatMap
     */
    flatMap<TWhere extends Object, TObject extends Object>(
      this: TObject,
      iteratee: TWhere
    ): boolean[]

    /**
     * @see _.flatMap
     */
    flatMap<TObject extends Object, TResult>(
      this: TObject,
      iteratee: Object | string
    ): TResult[]

    /**
     * @see _.flatMap
     */
    flatMap<TObject extends Object>(
      this: TObject,
      iteratee: [string, any]
    ): boolean[]

    /**
     * @see _.flatMap
     */
    flatMap<TResult>(
      this: object,
      iteratee?: object | string
    ): TResult[]

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
    ): boolean
  }
}
