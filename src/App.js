import Profile from "./components/socialProfile/Profile";
import user from "./components/socialProfile/user.json";

import Statistics from "./components/statistics/Statistics";
import statistics from "./components/statistics/statistical-data.json";

import FriendList from "./components/friend-list/FriendList";
import friends from "./components/friend-list/friends.json";

import TransactionHistory from "./components/transaction-history/TransactionHistory";
import transactions from "./components/transaction-history/transactions.json";

export default function App() {
  return (
    <div>
      <Profile
        userAvatar={user.avatar}
        userName={user.name}
        userTag={user.tag}
        userLocation={user.location}
        userFollowers={user.stats.followers}
        userViews={user.stats.views}
        userLikes={user.stats.likes}
      />
      <Statistics stats={statistics} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
