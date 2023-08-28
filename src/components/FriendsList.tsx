import { TypeInitialFriends } from '../App';
import Friend from './Friend';

interface Props {
  friends: TypeInitialFriends[];
  selectedFriend: null | TypeInitialFriends;
  onSelection: (friend: TypeInitialFriends) => void;
}

const FriendsList: React.FC<Props> = ({ friends, selectedFriend, onSelection }) => {
  return (
    <ul>
      {friends.map(friend => (
        <Friend
          friend={friend}
          key={friend.id}
          selectedFriend={selectedFriend}
          onSelection={onSelection}
        />
      ))}
    </ul>
  );
};

export default FriendsList;
