import * as E from 'fp-ts/lib/Either';

// Either
// ======

// Problem: Given a string, parse the number, yielding an Either of the parsed
// number if successful, or an string if the parse is unsuccessful.

const parseNumber: (str: string) => E.Either<string, number> = '';

// uncomment these lines to test out `parseNumber` 👇🏼
// const validParseResult = E.fold(
//   () => 'Will not reach this',
//   (x) => x
// )(parseNumber('20'));
// console.info(validParseResult);

// const invalidParseResult = E.fold(
//   (error) => `This message will show! ${error}`,
//   () => 'Nope, not even close to reach here'
// )(parseNumber('uhms!'));
// console.info(invalidParseResult);
