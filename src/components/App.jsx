import { Profile } from './Profile/profile';
import user from './Profile/user.json';
import { Statistics } from './Statistics/statistics';
import data from './Statistics/data.json';
import { FriendList } from './FriendList/friendList';
import friends from './FriendList/friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from './TransactionHistory/transactions.json';

export const App = () => {
  return (
    <div className="main">
      <Profile {...user} />
      <Statistics title="cloud" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
