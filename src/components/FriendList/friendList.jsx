import css from './friendList.module.css';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => (
        <FriendListItem
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
          key={friend.id}
        />
      ))}
    </ul>
  );
};

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      {!isOnline ? (
        <span className={css.statusRed}></span>
      ) : (
        <span className={css.statusGreen}></span>
      )}
      <img
        className={css.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
        height="48"
      />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ),
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
