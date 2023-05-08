import * as O from 'fp-ts/lib/Option';
import * as E from 'fp-ts/lib/Either';

export const Option = O;
export type Option<A> = O.Option<A>;
const Either = E;

/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

type Left<L> = {
  readonly _tag: 'Left';
  readonly left: L;
};

type Right<R> = {
  readonly _tag: 'Right';
  readonly right: R;
};

type Either<L, R> = Left<L> | Right<R>;

const left = <L, R = never>(e: L): Either<L, R> => ({
  _tag: 'Left',
  left: e,
});

const right = <R, L = never>(a: R): Either<L, R> => ({
  _tag: 'Right',
  right: a,
});

const isLeft = <L, R>(ma: Either<L, R>): ma is Left<L> => ma._tag === 'Left';

const isRight = <L, R>(ma: Either<L, R>): ma is Right<R> => ma._tag === 'Right';

//                                      Either<Left  , Right>
function divideTwoIfEvenE(num: number): Either<string, number> {
  if (num === 0) return left('Cannot divide by zero.');

  if (num % 2 !== 0) return left('Number is not even.');

  return right(2 / num);
}

const parseNumber: (str: string) => E.Either<string, number> = (str) =>
  isNaN(parseInt(str))
    ? E.left('WTF BRO, this is not a number!!')
    : E.right(parseInt(str));
