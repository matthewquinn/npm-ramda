export as namespace R;
export * from "./src/$curriedFunctions";
export * from "./src/$operation";
export * from "./src/$placeholder";
export * from "./src/$types";
import __ = require("./src/__");
import add = require("./src/add");
import addIndex = require("./src/addIndex");
import adjust = require("./src/adjust");
import all = require("./src/all");
import allPass = require("./src/allPass");
import always = require("./src/always");
import and = require("./src/and");
import any = require("./src/any");
import anyPass = require("./src/anyPass");
import ap = require("./src/ap");
import aperture = require("./src/aperture");
import append = require("./src/append");
import apply = require("./src/apply");
import applySpec = require("./src/applySpec");
import applyTo = require("./src/applyTo");
import ascend = require("./src/ascend");
import assoc = require("./src/assoc");
import assocPath = require("./src/assocPath");
import binary = require("./src/binary");
import bind = require("./src/bind");
import both = require("./src/both");
import call = require("./src/call");
import chain = require("./src/chain");
import clamp = require("./src/clamp");
import clone = require("./src/clone");
import comparator = require("./src/comparator");
import complement = require("./src/complement");
import compose = require("./src/compose");
import composeK = require("./src/composeK");
import composeP = require("./src/composeP");
import concat = require("./src/concat");
import cond = require("./src/cond");
import construct = require("./src/construct");
import constructN = require("./src/constructN");
import contains = require("./src/contains");
import converge = require("./src/converge");
import countBy = require("./src/countBy");
import curry = require("./src/curry");
import curryN = require("./src/curryN");
import dec = require("./src/dec");
import defaultTo = require("./src/defaultTo");
import descend = require("./src/descend");
import difference = require("./src/difference");
import differenceWith = require("./src/differenceWith");
import dissoc = require("./src/dissoc");
import dissocPath = require("./src/dissocPath");
import divide = require("./src/divide");
import drop = require("./src/drop");
import dropLast = require("./src/dropLast");
import dropLastWhile = require("./src/dropLastWhile");
import dropRepeats = require("./src/dropRepeats");
import dropRepeatsWith = require("./src/dropRepeatsWith");
import dropWhile = require("./src/dropWhile");
import either = require("./src/either");
import empty = require("./src/empty");
import endsWith = require("./src/endsWith");
import eqBy = require("./src/eqBy");
import eqProps = require("./src/eqProps");
import equals = require("./src/equals");
import evolve = require("./src/evolve");
import F = require("./src/F");
import filter = require("./src/filter");
import find = require("./src/find");
import findIndex = require("./src/findIndex");
import findLast = require("./src/findLast");
import findLastIndex = require("./src/findLastIndex");
import flatten = require("./src/flatten");
import flip = require("./src/flip");
import forEach = require("./src/forEach");
import forEachObjIndexed = require("./src/forEachObjIndexed");
import fromPairs = require("./src/fromPairs");
import groupBy = require("./src/groupBy");
import groupWith = require("./src/groupWith");
import gt = require("./src/gt");
import gte = require("./src/gte");
import has = require("./src/has");
import hasIn = require("./src/hasIn");
import head = require("./src/head");
import identical = require("./src/identical");
import identity = require("./src/identity");
import ifElse = require("./src/ifElse");
import inc = require("./src/inc");
import indexBy = require("./src/indexBy");
import indexOf = require("./src/indexOf");
import init = require("./src/init");
import innerJoin = require("./src/innerJoin");
import insert = require("./src/insert");
import insertAll = require("./src/insertAll");
import intersection = require("./src/intersection");
import intersperse = require("./src/intersperse");
import into = require("./src/into");
import invert = require("./src/invert");
import invertObj = require("./src/invertObj");
import invoker = require("./src/invoker");
import is = require("./src/is");
import isEmpty = require("./src/isEmpty");
import isNil = require("./src/isNil");
import join = require("./src/join");
import juxt = require("./src/juxt");
import keys = require("./src/keys");
import keysIn = require("./src/keysIn");
import last = require("./src/last");
import lastIndexOf = require("./src/lastIndexOf");
import length = require("./src/length");
import lens = require("./src/lens");
import lensIndex = require("./src/lensIndex");
import lensPath = require("./src/lensPath");
import lensProp = require("./src/lensProp");
import lift = require("./src/lift");
import liftN = require("./src/liftN");
import lt = require("./src/lt");
import lte = require("./src/lte");
import map = require("./src/map");
import mapAccum = require("./src/mapAccum");
import mapAccumRight = require("./src/mapAccumRight");
import mapObjIndexed = require("./src/mapObjIndexed");
import match = require("./src/match");
import mathMod = require("./src/mathMod");
import max = require("./src/max");
import maxBy = require("./src/maxBy");
import mean = require("./src/mean");
import median = require("./src/median");
import memoize = require("./src/memoize");
import memoizeWith = require("./src/memoizeWith");
import merge = require("./src/merge");
import mergeAll = require("./src/mergeAll");
import mergeDeepLeft = require("./src/mergeDeepLeft");
import mergeDeepRight = require("./src/mergeDeepRight");
import mergeDeepWith = require("./src/mergeDeepWith");
import mergeDeepWithKey = require("./src/mergeDeepWithKey");
import mergeWith = require("./src/mergeWith");
import mergeWithKey = require("./src/mergeWithKey");
import min = require("./src/min");
import minBy = require("./src/minBy");
import modulo = require("./src/modulo");
import multiply = require("./src/multiply");
import nAry = require("./src/nAry");
import negate = require("./src/negate");
import none = require("./src/none");
import not = require("./src/not");
import nth = require("./src/nth");
import nthArg = require("./src/nthArg");
import o = require("./src/o");
import objOf = require("./src/objOf");
import of = require("./src/of");
import omit = require("./src/omit");
import once = require("./src/once");
import or = require("./src/or");
import over = require("./src/over");
import pair = require("./src/pair");
import partial = require("./src/partial");
import partialRight = require("./src/partialRight");
import partition = require("./src/partition");
import path = require("./src/path");
import pathEq = require("./src/pathEq");
import pathOr = require("./src/pathOr");
import pathSatisfies = require("./src/pathSatisfies");
import pick = require("./src/pick");
import pickAll = require("./src/pickAll");
import pickBy = require("./src/pickBy");
import pipe = require("./src/pipe");
import pipeK = require("./src/pipeK");
import pipeP = require("./src/pipeP");
import pluck = require("./src/pluck");
import prepend = require("./src/prepend");
import product = require("./src/product");
import project = require("./src/project");
import prop = require("./src/prop");
import propEq = require("./src/propEq");
import propIs = require("./src/propIs");
import propOr = require("./src/propOr");
import props = require("./src/props");
import propSatisfies = require("./src/propSatisfies");
import range = require("./src/range");
import reduce = require("./src/reduce");
import reduceBy = require("./src/reduceBy");
import reduced = require("./src/reduced");
import reduceRight = require("./src/reduceRight");
import reduceWhile = require("./src/reduceWhile");
import reject = require("./src/reject");
import remove = require("./src/remove");
import repeat = require("./src/repeat");
import replace = require("./src/replace");
import reverse = require("./src/reverse");
import scan = require("./src/scan");
import sequence = require("./src/sequence");
import set = require("./src/set");
import slice = require("./src/slice");
import sort = require("./src/sort");
import sortBy = require("./src/sortBy");
import sortWith = require("./src/sortWith");
import split = require("./src/split");
import splitAt = require("./src/splitAt");
import splitEvery = require("./src/splitEvery");
import splitWhen = require("./src/splitWhen");
import startsWith = require("./src/startsWith");
import subtract = require("./src/subtract");
import sum = require("./src/sum");
import symmetricDifference = require("./src/symmetricDifference");
import symmetricDifferenceWith = require("./src/symmetricDifferenceWith");
import T = require("./src/T");
import tail = require("./src/tail");
import take = require("./src/take");
import takeLast = require("./src/takeLast");
import takeLastWhile = require("./src/takeLastWhile");
import takeWhile = require("./src/takeWhile");
import tap = require("./src/tap");
import test = require("./src/test");
import times = require("./src/times");
import toLower = require("./src/toLower");
import toPairs = require("./src/toPairs");
import toPairsIn = require("./src/toPairsIn");
import toString = require("./src/toString");
import toUpper = require("./src/toUpper");
import transduce = require("./src/transduce");
import transpose = require("./src/transpose");
import traverse = require("./src/traverse");
import trim = require("./src/trim");
import tryCatch = require("./src/tryCatch");
import type = require("./src/type");
import unapply = require("./src/unapply");
import unary = require("./src/unary");
import uncurryN = require("./src/uncurryN");
import unfold = require("./src/unfold");
import union = require("./src/union");
import unionWith = require("./src/unionWith");
import uniq = require("./src/uniq");
import uniqBy = require("./src/uniqBy");
import uniqWith = require("./src/uniqWith");
import unless = require("./src/unless");
import unnest = require("./src/unnest");
import until = require("./src/until");
import update = require("./src/update");
import useWith = require("./src/useWith");
import values = require("./src/values");
import valuesIn = require("./src/valuesIn");
import view = require("./src/view");
import when = require("./src/when");
import where = require("./src/where");
import whereEq = require("./src/whereEq");
import without = require("./src/without");
import xprod = require("./src/xprod");
import zip = require("./src/zip");
import zipObj = require("./src/zipObj");
import zipWith = require("./src/zipWith");
export { __, add, addIndex, adjust, all, allPass, always, and, any, anyPass, ap, aperture, append, apply, applySpec, applyTo, ascend, assoc, assocPath, binary, bind, both, call, chain, clamp, clone, comparator, complement, compose, composeK, composeP, concat, cond, construct, constructN, contains, converge, countBy, curry, curryN, dec, defaultTo, descend, difference, differenceWith, dissoc, dissocPath, divide, drop, dropLast, dropLastWhile, dropRepeats, dropRepeatsWith, dropWhile, either, empty, endsWith, eqBy, eqProps, equals, evolve, F, filter, find, findIndex, findLast, findLastIndex, flatten, flip, forEach, forEachObjIndexed, fromPairs, groupBy, groupWith, gt, gte, has, hasIn, head, identical, identity, ifElse, inc, indexBy, indexOf, init, innerJoin, insert, insertAll, intersection, intersperse, into, invert, invertObj, invoker, is, isEmpty, isNil, join, juxt, keys, keysIn, last, lastIndexOf, length, lens, lensIndex, lensPath, lensProp, lift, liftN, lt, lte, map, mapAccum, mapAccumRight, mapObjIndexed, match, mathMod, max, maxBy, mean, median, memoize, memoizeWith, merge, mergeAll, mergeDeepLeft, mergeDeepRight, mergeDeepWith, mergeDeepWithKey, mergeWith, mergeWithKey, min, minBy, modulo, multiply, nAry, negate, none, not, nth, nthArg, o, objOf, of, omit, once, or, over, pair, partial, partialRight, partition, path, pathEq, pathOr, pathSatisfies, pick, pickAll, pickBy, pipe, pipeK, pipeP, pluck, prepend, product, project, prop, propEq, propIs, propOr, props, propSatisfies, range, reduce, reduceBy, reduced, reduceRight, reduceWhile, reject, remove, repeat, replace, reverse, scan, sequence, set, slice, sort, sortBy, sortWith, split, splitAt, splitEvery, splitWhen, startsWith, subtract, sum, symmetricDifference, symmetricDifferenceWith, T, tail, take, takeLast, takeLastWhile, takeWhile, tap, test, times, toLower, toPairs, toPairsIn, toString, toUpper, transduce, transpose, traverse, trim, tryCatch, type, unapply, unary, uncurryN, unfold, union, unionWith, uniq, uniqBy, uniqWith, unless, unnest, until, update, useWith, values, valuesIn, view, when, where, whereEq, without, xprod, zip, zipObj, zipWith };
