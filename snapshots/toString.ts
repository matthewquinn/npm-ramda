import * as R from '../ramda/dist/index';

declare const number: number;
declare const object: object;

// @dts-jest:pass:snap -> string
R.toString(number);
// @dts-jest:pass:snap -> string
R.toString(object);
