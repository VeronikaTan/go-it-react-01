import PropTypes from "prop-types";
import FriendListItem from "../FriendListItem/FriendListItem";
import s from "./FriendList.module.css";

function FriendList({ friends }) {
  const friendsListItems = friends.map((e) => (
    <FriendListItem
      avatar={e.avatar}
      name={e.name}
      isOnline={e.isOnline}
      key={e.id}
    />
  ));

  return <ul className={s.friendsList}>{friendsListItems}</ul>;
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default FriendList;
