import { separator } from './separator';
import { Option } from './types';
import * as E from './exercise01';
// import * as E from 'fp-ts/lib/Either'
/**
 * A function that divides the number 2 by some number
 *
 * Edge cases:
 * If the number is equal to 0, throw 'Cannot divide by zero.'
 * If the number is ODD, throw 'Number is not even.'
 */
function divideTwoIfEven(num: number): number {
  if (num === 0) throw 'Cannot divide by zero.';

  if (num % 2 !== 0) throw 'Number is not even.';

  return 2 / num;
}

// console.log('Without FP-TS - ZERO', divideTwoIfEven(0));
// console.log('Without FP-TS - ODD', divideTwoIfEven(1));
// console.log('Without FP-TS - EVEN', divideTwoIfEven(10));
// console.log(separator);
/**
 * With Option we lose the error message
 */
function divideTwoIfEvenO(num: number): Option<number> {
  if (num === 0) return Option.none;

  if (num % 2 !== 0) return Option.none;

  return Option.some(2 / num);
}

console.log('With Option FP-TS - ZERO', divideTwoIfEvenO(0));
console.log('With Option FP-TS - ODD', divideTwoIfEvenO(1));
console.log('With Option FP-TS - EVEN', divideTwoIfEvenO(10));
console.log(separator);

/**
 * Use Either to validate the division
 */
function divideTwoIfEvenE(num: number): any {
  // if(num === 0) return E.???
  if (num === 0) return E.left('Cannot divide by zero.');

  // if(num % 2 !== 0) return E.???
  if (num % 2 !== 0) return E.left('This is odd');

  // return E.???;
  return E.right(2 / num);
}

console.log('With Either FP-TS - ZERO', divideTwoIfEvenE(0));
console.log('With Either FP-TS - ODD', divideTwoIfEvenE(1));
console.log('With Either FP-TS - EVEN', divideTwoIfEvenE(10));
