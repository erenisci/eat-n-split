import { useState } from 'react';
import FriendsList from './components/FriendsList';
import FormAddFriend from './components/FormAddFriend';
import FormSplitBill from './components/FormSplitBill';
import Button from './components/Button';

export interface TypeInitialFriends {
  id: string;
  name: string;
  image: string;
  balance: number;
}

export const initialFriends: TypeInitialFriends[] = [
  {
    id: '118836',
    name: 'Clark',
    image: 'https://i.pravatar.cc/48?u=118836',
    balance: -7,
  },
  {
    id: '933372',
    name: 'Sarah',
    image: 'https://i.pravatar.cc/48?u=933372',
    balance: 20,
  },
  {
    id: '499476',
    name: 'Anthony',
    image: 'https://i.pravatar.cc/48?u=499476',
    balance: 0,
  },
];

const App: React.FC = () => {
  const [friends, setFriends] = useState<TypeInitialFriends[]>(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState<boolean>(false);
  const [selectedFriend, setSelectedFriend] = useState<null | TypeInitialFriends>(null);

  const handleShowAddFriend = (): void => {
    setShowAddFriend(show => !show);
    setSelectedFriend(null);
  };

  const handleAddFriend = (friend: TypeInitialFriends): void => {
    setFriends(friends => [...friends, friend]);
    setShowAddFriend(show => !show);
  };

  const handleSelection = (friend: TypeInitialFriends): void => {
    setSelectedFriend(selected => (selected?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  };

  const handleSplitBill = (value: number): void => {
    console.log(value);
    setFriends(friends =>
      friends.map(friend =>
        friend.id === selectedFriend?.id ? { ...friend, balance: friend.balance + value } : friend
      )
    );
    setSelectedFriend(null);
  };

  return (
    <div className='app'>
      <div className='sidebar'>
        <FriendsList
          friends={friends}
          selectedFriend={selectedFriend}
          onSelection={handleSelection}
        />
        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        <Button onClick={handleShowAddFriend}>{showAddFriend ? 'Close' : 'Add friend'}</Button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
};

export default App;
