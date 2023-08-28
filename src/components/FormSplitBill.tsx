import { useState } from 'react';
import { TypeInitialFriends } from '../App';
import Button from './Button';

interface Props {
  selectedFriend: null | TypeInitialFriends;
  onSplitBill: (value: number) => void;
}

const FormSplitBill: React.FC<Props> = ({ selectedFriend, onSplitBill }) => {
  const [bill, setBill] = useState<string>('');
  const [paidByUser, setPaidByUser] = useState<string>('');
  const [whoIsPaying, setWhoIsPaying] = useState<string>('user');
  const paidByFriend: string = bill ? String(+bill - +paidByUser) : '';

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (!bill || !paidByUser) return;
    onSplitBill(whoIsPaying === 'user' ? +paidByFriend : -paidByUser);
  };

  return (
    <form
      className='form-split-bill'
      onSubmit={handleSubmit}
    >
      <h2>Split a bill with {selectedFriend?.name}</h2>

      <label>💰 Bill value</label>
      <input
        type='text'
        value={bill}
        onChange={e => setBill(e.target.value)}
      />

      <label>🧍‍♂️ Your expense</label>
      <input
        type='text'
        value={paidByUser}
        onChange={e => setPaidByUser(+e.target.value > +bill ? paidByUser : e.target.value)}
        disabled={bill ? false : true}
      />

      <label>👭 {selectedFriend?.name}'s expense</label>
      <input
        type='text'
        value={isNaN(+paidByFriend) ? '' : paidByFriend}
        disabled
      />

      <label>🤑 Who is paying the bill</label>
      <select
        value={whoIsPaying}
        onChange={e => setWhoIsPaying(e.target.value)}
      >
        <option value='user'>You</option>
        <option value='friend'>{selectedFriend?.name}</option>
      </select>

      <Button>Add</Button>
    </form>
  );
};

export default FormSplitBill;
