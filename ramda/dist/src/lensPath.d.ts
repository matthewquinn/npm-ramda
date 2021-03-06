import { ManualLens, Path } from "./$types";
declare const lensPath: lensPath_0;
type lensPath_0 = {
    /**
     * Returns a lens whose focus is the specified path.
     *
     * @func
     * @memberOf R
     * @since v0.19.0
     * @category Object
     * @typedefn Idx = String | Int
     * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
     * @sig [Idx] -> Lens s a
     * @param {Array} path The path to use.
     * @return {Lens}
     * @see R.view, R.set, R.over
     * @example
     *
     *      var xHeadYLens = R.lensPath(['x', 0, 'y']);
     *
     *      R.view(xHeadYLens, {x: [{y: 2, z: 3}, {y: 4, z: 5}]});
     *      //=> 2
     *      R.set(xHeadYLens, 1, {x: [{y: 2, z: 3}, {y: 4, z: 5}]});
     *      //=> {x: [{y: 1, z: 3}, {y: 4, z: 5}]}
     *      R.over(xHeadYLens, R.negate, {x: [{y: 2, z: 3}, {y: 4, z: 5}]});
     *      //=> {x: [{y: -2, z: 3}, {y: 4, z: 5}]}
     */
    <T, U>(path: Path): lensPath_1<T, U>;
};
type lensPath_1<T, U> = ManualLens<T, U>;
export = lensPath;
