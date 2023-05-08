import * as E from 'fp-ts/lib/Either';
import { pipe } from 'fp-ts/lib/function';

type LoginError =
  | 'EMPTY_USERNAME'
  | 'EMPTY_PASSWORD'
  | 'INVALID_CREDENTIALS'
  | 'INACTIVE_USER';

type User = {};

const isCorrectUserPasswordCombo = (username: string, password: string) => true;
const getUserbyUsername = async (username: string) => ({ active: true });

export const handleLoginUser = async (
  username: string,
  password: string
  //         Either< LEFT    , RIGHT>
): Promise<E.Either<LoginError, User>> => {
  if (username === '') {
    return E.left('EMPTY_USERNAME');
  }
  if (password === '') {
    return E.left('EMPTY_PASSWORD');
  }
  if (isCorrectUserPasswordCombo(username, password) === false) {
    return E.left('INVALID_CREDENTIALS');
  }
  const user = await getUserbyUsername(username);
  if (user.active === false) {
    return E.left('INACTIVE_USER');
  }
  return E.right(user);
};

/* * * * * * * * * * * * * * * * * * * * */

type Account = Readonly<{
  balance: number;
  frozen: boolean;
}>;

type Cart = Readonly<{
  items: string[];
  total: number;
}>;

type AccountFrozen = Readonly<{
  type: 'AccountFrozen';
  message: string;
}>;

type NotEnoughBalance = Readonly<{
  type: 'NotEnoughBalance';
  message: string;
}>;

const checkout = (cart: Cart) => (account: Account) =>
  pipe(account, pay(cart.total));

const pay =
  (amount: number) =>
  (account: Account): E.Either<NotEnoughBalance | AccountFrozen, Account> =>
    account.frozen
      ? E.left({
          type: 'AccountFrozen',
          message: 'Cannot pay with a frozen account!',
        })
      : account.balance < amount
      ? E.left({
          type: 'NotEnoughBalance',
          message: `Cannot pay ${amount} with a balance of ${account.balance}`,
        })
      : E.right({
          ...account,
          balance: account.balance - amount,
        });

const account1: Account = {
  balance: 70,
  frozen: false,
};

const account2: Account = {
  balance: 30,
  frozen: false,
};

const acc3: Account = {
  balance: 80,
  frozen: true,
};

console.log(
  pipe(account1, pay(50)) // E.right ({
  //   balance: 20,
  //    frozen: false
  //})
);
console.log(
  pipe(account2, pay(50)) // E.left ({
  //   type: 'NotEnoughBalance',
  //   message: 'Cannot pay 50 with balance of 30!'
  // })
);

// pipe(acc3, pay(40)) // E.Left({

// })
