import s from "./FriendList.module.css";
import FriendListItem from "./FriendListItem";
import PropTypes from "prop-types";

export default function FriendList({ friends }) {
  return (
    <ul className={s.friendList}>
      {friends.map((friend) => (
        <FriendListItem
          key={friend.id}
          isOnline={friend.isOnline}
          avatar={friend.avatar}
          name={friend.name}
        />
      ))}
    </ul>
  );
}

FriendList.protoType = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
