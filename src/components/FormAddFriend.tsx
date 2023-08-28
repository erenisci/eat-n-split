import { useState } from 'react';
import { TypeInitialFriends } from '../App';
import Button from './Button';

interface Props {
  onAddFriend: (friend: TypeInitialFriends) => void;
}

const FormAddFriend: React.FC<Props> = ({ onAddFriend }) => {
  const [name, setName] = useState<string>('');
  const [image, setImage] = useState<string>('https://i.pravatar.cc/48');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (!name || !image) return;

    const id: string = crypto.randomUUID();
    const newFriend: TypeInitialFriends = {
      id,
      name: name.charAt(0).toUpperCase() + name.slice(1),
      image: `${image}?=${id}`,
      balance: 0,
    };

    onAddFriend(newFriend);

    setName('');
    setImage('https://i.pravatar.cc/48');
  };

  return (
    <form
      className='form-add-friend'
      onSubmit={handleSubmit}
      // event => console.log(event)
    >
      <label>👭 Friend name</label>
      <input
        type='text'
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <label>🌅 Image URL</label>
      <input
        type='text'
        value={image}
        onChange={e => setImage(e.target.value)}
      />

      <Button>Add</Button>
    </form>
  );
};

export default FormAddFriend;
