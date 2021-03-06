import { Reduced } from "./$types";
declare const reduced: reduced_0;
type reduced_0 = {
    /**
     * Returns a value wrapped to indicate that it is the final value of the reduce
     * and transduce functions. The returned value should be considered a black
     * box: the internal structure is not guaranteed to be stable.
     *
     * Note: this optimization is unavailable to functions not explicitly listed
     * above. For instance, it is not currently supported by
     * [`reduceRight`](#reduceRight).
     *
     * @func
     * @memberOf R
     * @since v0.15.0
     * @category List
     * @sig a -> *
     * @param {*} x The final value of the reduce.
     * @return {*} The wrapped value.
     * @see R.reduce, R.transduce
     * @example
     *
     *     R.reduce(
     *       (acc, item) => item > 3 ? R.reduced(acc) : acc.concat(item),
     *       [],
     *       [1, 2, 3, 4, 5]) // [1, 2, 3]
     */
    <T>(value: Reduced<T> | T): reduced_1<T>;
};
type reduced_1<T> = Reduced<T>;
export = reduced;
