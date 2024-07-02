import Friend from './Friend';

const FriendsList = ({ friends, selectedFriend, onSelection }) => {
  return (
    <ul>
      {friends.map(friend => (
        <Friend
          friend={friend}
          onSelection={onSelection}
          selectedFriend={selectedFriend}
          key={friend.id}
        />
      ))}
    </ul>
  );
};

export default FriendsList;
