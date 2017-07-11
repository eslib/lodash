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
      iteratee?: Object
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
    flatMap<TObject extends Object, TResult>(
      this: TObject,
      iteratee?: ObjectIterator<any, Many<TResult>>
    ): TResult[];

    /**
     * @see _.flatMap
     */
    flatMap<TResult>(
      this: Object,
      iteratee?: ObjectIterator<any, Many<TResult>>
    ): TResult[];

    /**
     * @see _.flatMap
     */
    flatMap<TWhere extends Object, TObject extends Object>(
      this: TObject,
      iteratee: TWhere
    ): boolean[];

    /**
     * @see _.flatMap
     */
    flatMap<TObject extends Object, TResult>(
      this: TObject,
      iteratee: Object | string
    ): TResult[];

    /**
     * @see _.flatMap
     */
    flatMap<TObject extends Object>(
      this: TObject,
      iteratee: [string, any]
    ): boolean[];

    /**
     * @see _.flatMap
     */
    flatMap<TResult>(
      this: object,
      iteratee?: object | string
    ): TResult[];
  }
}