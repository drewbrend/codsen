declare type Range =
  | [from: number, to: number]
  | [from: number, to: number, whatToInsert: string | null | undefined];
declare type Ranges = Range[] | null;

declare const version: string;
interface Opts {
  inclusiveRangeEnds?: boolean;
  returnMatchedRangeInsteadOfTrue?: boolean;
}
declare const defaults: Opts;
declare function isIndexWithin(
  originalIndex: number,
  rangesArr: Ranges,
  originalOpts?: Opts
): boolean | Range;

export { defaults, isIndexWithin, version };
