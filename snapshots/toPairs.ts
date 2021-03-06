import * as R from '../ramda/dist/index';

declare const a_1_b_2_c_3: {
  a: 1;
  b: 2;
  c: 3;
};
declare const string_number_record: Record<string, number>;

// @dts-jest:pass:snap -> ["a" | "b" | "c", 1 | 2 | 3][]
R.toPairs(a_1_b_2_c_3);
// @dts-jest:pass:snap -> [string, number][]
R.toPairs(string_number_record);
