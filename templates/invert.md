Same as [`R.invertObj`](#invertObj), however this accounts for objects with
duplicate values by putting the values into an array.

@func
@memberOf R
@since v0.9.0
@category Object
@sig {s: x} -> {x: [ s, ... ]}
@param {Object} obj The object or array to invert
@return {Object} out A new object with keys in an array.
@see R.invertObj
@example

     var raceResultsByFirstName = {
       first: 'alice',
       second: 'jake',
       third: 'alice',
     };
     R.invert(raceResultsByFirstName);
     //=> { 'alice': ['first', 'third'], 'jake':['second'] }
