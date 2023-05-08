/**
 * First you will create your Either type
 */

export type Either<ILeft, IRight> = Left<ILeft> | Right<IRight>;
export type Left<IValue> = { _tag: 'Left'; left: IValue };
export type Right<IValue> = { right: IValue; _tag: 'Right' };

const anEither: Either<string, never> = { _tag: 'Left', left: '123' };
const aLeft: Left<number> = { _tag: 'Left', left: 123 };
const aRight: Right<boolean> = { _tag: 'Right', right: false };

// console.log(anEither);
// console.log(aLeft);
// console.log(aRight);

/**
 * Then you will create the constructors
 */

export const right = <R, L = never>(rightValue: R): Either<L, R> => ({
  right: rightValue,
  _tag: 'Right',
});
export const left = <L, R = never>(leftValue: L): Either<L, R> => ({
  _tag: 'Left',
  left: leftValue,
});

const constructRight = right('??');
const constructLeft = left('??');

// console.log(constructRight);
// console.log(constructLeft);

/**
 * Finally, you will create the guards
 */

export const isRight = <L, R>(either: Either<L, R>): either is Right<R> =>
  either._tag === 'Right';
export const isLeft = <L, R>(either: Either<L, R>): either is Left<L> =>
  either._tag === 'Left';

isRight('??') ? console.log("I'm a right") : console.log('Nope');
isLeft('??') ? console.log("I'm a left") : console.log('Na na ni na não!');
