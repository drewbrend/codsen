import isObj from 'lodash.isplainobject';
import checkTypes from 'check-types-mini';
import isNatStr from 'is-natural-number-string';
import isNatNum from 'is-natural-number';
import ordinalSuffix from 'ordinal-number-suffix';
import rangesSort from 'ranges-sort';

const isArr = Array.isArray;

function rangesIsIndexWithin(originalIndex, rangesArr, originalOpts) {
  function existy(something) {
    return something != null;
  }
  let index;

  // validate
  // ================

  // - originalIndex
  if (isNatNum(originalIndex, { includeZero: true })) {
    index = originalIndex;
  } else if (isNatStr(originalIndex, { includeZero: true })) {
    index = parseInt(originalIndex, 10);
  } else {
    throw new TypeError(
      `ranges-is-index-within/rangesIsIndexWithin(): [THROW_ID_01] Input must mean an index, so it has to be either a natural number or a string containing natural number! Currently its type is: ${typeof originalIndex}, equal to: ${JSON.stringify(
        originalIndex,
        null,
        4
      )}`
    );
  }
  // - rangesArr
  if (!existy(rangesArr)) {
    throw new TypeError(
      "ranges-is-index-within/rangesIsIndexWithin(): [THROW_ID_02] We're missing the second input, rangesArr. It's meant to be an array of one or more range arrays."
    );
  } else if (!isArr(rangesArr)) {
    throw new TypeError(
      `ranges-is-index-within/rangesIsIndexWithin(): [THROW_ID_03] Second input argument, rangesArr must be an array! Currently its type is: ${typeof originalIndex}, equal to: ${JSON.stringify(
        originalIndex,
        null,
        4
      )}`
    );
  } else if (rangesArr.length === 0) {
    throw new TypeError(
      "ranges-is-index-within/rangesIsIndexWithin(): [THROW_ID_04] Second input argument, rangesArr must be not empty! Currently it's empty."
    );
  }
  let culpritsIndex = null;
  if (isArr(rangesArr) && rangesArr.length > 0 && !isArr(rangesArr[0])) {
    throw new TypeError(
      `ranges-is-index-within/rangesIsIndexWithin(): [THROW_ID_05] Second input argument, rangesArr must be an array of (index range) arrays! Currently it's equal to: ${rangesArr}.`
    );
  }
  if (
    !rangesArr.every((rangeArr, indx) => {
      if (
        !isNatNum(rangeArr[0], { includeZero: true }) ||
        !isNatNum(rangeArr[1], { includeZero: true })
      ) {
        culpritsIndex = indx;
        return false;
      }
      return true;
    })
  ) {
    throw new TypeError(
      `ranges-is-index-within/rangesIsIndexWithin(): [THROW_ID_06] Second input argument, rangesArr must consist of arrays which are natural number indexes representing string index ranges. However, ${ordinalSuffix(
        culpritsIndex
      )} range (${JSON.stringify(
        rangesArr[culpritsIndex],
        null,
        4
      )}) does not consist of only natural numbers!`
    );
  }
  // check if each of the range has ending larger or equal to beginning
  if (
    !rangesArr.every((rangeArr, indx) => {
      if (rangeArr[0] > rangeArr[1]) {
        culpritsIndex = indx;
        return false;
      }
      return true;
    })
  ) {
    throw new TypeError(
      `ranges-is-index-within/rangesIsIndexWithin(): [THROW_ID_07] The ${ordinalSuffix(
        culpritsIndex
      )} range (${JSON.stringify(
        rangesArr[culpritsIndex],
        null,
        4
      )}) in the ranges array has beginning of the index bigger than ending! They can be equal but in the backwards order.`
    );
  }
  // - originalOpts
  if (existy(originalOpts) && !isObj(originalOpts)) {
    throw new TypeError(
      `ranges-is-index-within/rangesIsIndexWithin(): [THROW_ID_08] Options object must be a plain object! Currently its type is: ${typeof originalOpts}, equal to: ${JSON.stringify(
        originalOpts,
        null,
        4
      )}`
    );
  }

  //      D E F A U L T S
  const defaults = {
    inclusiveRangeEnds: false,
    returnMatchedRangeInsteadOfTrue: false,
    skipIncomingRangeSorting: false
  };

  const opts = Object.assign(Object.assign({}, defaults), originalOpts);
  checkTypes(opts, defaults, {
    msg: "ranges-is-index-within/rangesIsIndexWithin(): [THROW_ID_07*]"
  });

  // now some real action
  // ====================

  if (rangesArr.length < 3) {
    // if equals 1
    if (rangesArr.length === 1) {
      let res;
      if (opts.inclusiveRangeEnds) {
        res = index >= rangesArr[0][0] && index <= rangesArr[0][1];
      } else {
        res = index > rangesArr[0][0] && index < rangesArr[0][1];
      }
      if (opts.returnMatchedRangeInsteadOfTrue && res) {
        return rangesArr[0];
      }
      return res;
    }
    // ELSE - if not, equals 2 then because we checked for zero already, see row #30
    let res1;
    let res2;
    if (opts.inclusiveRangeEnds) {
      res1 = index >= rangesArr[0][0] && index <= rangesArr[0][1];
      res2 = index >= rangesArr[1][0] && index <= rangesArr[1][1];
    } else {
      res1 = index > rangesArr[0][0] && index < rangesArr[0][1];
      res2 = index > rangesArr[1][0] && index < rangesArr[1][1];
    }
    if (opts.returnMatchedRangeInsteadOfTrue && (res1 || res2)) {
      return res1 ? rangesArr[0] : rangesArr[1];
    }
    return res1 || res2;
  }
  // more than two

  // 0. Get the ranges array sorted because few upcoming approaches depend on it.
  const rarr = opts.skipIncomingRangeSorting
    ? rangesArr
    : rangesSort(rangesArr);

  // 1. check for quick wins - maybe given index is outside of the edge values?
  if (index < rarr[0][0] || index > rarr[rarr.length - 1][1]) {
    return false;
  } else if (index === rarr[0][0]) {
    // index we're checking is equal to the outermost edges of a given indexes
    // all depends then on opts.inclusiveRangeEnds
    if (opts.inclusiveRangeEnds) {
      if (opts.returnMatchedRangeInsteadOfTrue) {
        return rarr[0];
      }
      return true;
    }
    return false;
  } else if (index === rarr[rarr.length - 1][1]) {
    // index we're checking is equal to the outermost edges of a given indexes
    // all depends then on opts.inclusiveRangeEnds
    if (opts.inclusiveRangeEnds) {
      if (opts.returnMatchedRangeInsteadOfTrue) {
        return rarr[rarr.length - 1];
      }
      return true;
    }
    return false;
  }

  // the plan is the following.
  // We got bunch of ranges. Find the middle-one of them and check, is our
  // index within or below or above it. If it's within, Bob's your uncle,
  // return `true`. Else, fun continues:
  // - if it's below, set upper index to the index number of this range, essentially
  // shortening our searches to half.
  // - if index is above this range in the middle, set lower index to the index number
  // of this range.
  // ----
  // REPEAT above until the lower and upper index numbers are too close.

  let lowerIndex = 0; // at first, it's zero because we count how many ranges there are, from zero
  let upperIndex = rarr.length - 1; // at first, it's the total number of indexes.
  let theIndexOfTheRangeInTheMiddle = Math.floor((upperIndex + lowerIndex) / 2);
  while (
    Math.floor(upperIndex - lowerIndex) > 1 &&
    theIndexOfTheRangeInTheMiddle !== 0
  ) {
    // pick the middle index.
    theIndexOfTheRangeInTheMiddle = Math.floor((upperIndex + lowerIndex) / 2);

    if (index < rarr[theIndexOfTheRangeInTheMiddle][0]) {
      upperIndex = theIndexOfTheRangeInTheMiddle;
    } else if (index > rarr[theIndexOfTheRangeInTheMiddle][1]) {
      lowerIndex = theIndexOfTheRangeInTheMiddle;
    } else if (
      index === rarr[theIndexOfTheRangeInTheMiddle][0] ||
      index === rarr[theIndexOfTheRangeInTheMiddle][1]
    ) {
      // it's on one of the edges!
      if (opts.inclusiveRangeEnds) {
        if (opts.returnMatchedRangeInsteadOfTrue) {
          return rarr[theIndexOfTheRangeInTheMiddle];
        }
        return true;
      }
      return false;
    } else {
      // Bob's your uncle - index is within this middle range we calculated.
      if (opts.returnMatchedRangeInsteadOfTrue) {
        return rarr[theIndexOfTheRangeInTheMiddle];
      }
      return true;
    }
  }

  // this means we narrowed down to two ranges
  let res1;
  let res2;
  if (opts.inclusiveRangeEnds) {
    res1 =
      index >= rangesArr[lowerIndex][0] && index <= rangesArr[lowerIndex][1];
    res2 =
      index >= rangesArr[upperIndex][0] && index <= rangesArr[upperIndex][1];
  } else {
    res1 = index > rangesArr[lowerIndex][0] && index < rangesArr[lowerIndex][1];
    res2 = index > rangesArr[upperIndex][0] && index < rangesArr[upperIndex][1];
  }
  if (opts.returnMatchedRangeInsteadOfTrue && (res1 || res2)) {
    return res1 ? rangesArr[lowerIndex] : rangesArr[upperIndex];
  }
  return res1 || res2;
}

export default rangesIsIndexWithin;
