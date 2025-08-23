import { useState } from 'react';

import ContactList from './ContactList';
import usePhonebook from './hooks/usePhonebook';

const KEY_PAD = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'Clear', 0, 'Back'];

type Key = (typeof KEY_PAD)[number];

const PhoneBook = () => {
  const [dialedNumber, setDialedNumber] = useState<number[]>([]);

  const { matchedContactList } = usePhonebook({
    dialedNumber,
  });

  const handleKeyPress = (key: Key) => {
    if (!key) return;

    if (key === 'Clear') {
      return setDialedNumber([]);
    }

    if (key === 'Back') {
      if (!dialedNumber) return;

      return setDialedNumber(dialedNumber?.slice(0, dialedNumber.length - 1));
    }

    if (typeof key === 'number') {
      setDialedNumber((prev) => [...(prev ?? []), key]);
    }
  };

  return (
    <div className='grid grid-cols-12'>
      <div className='col-span-9'>
        <div className='text-2xl'>
          {dialedNumber.length > 0 ? dialedNumber : '_'}
        </div>
        <div className='mt-4 grid grid-cols-3 gap-2'>
          {KEY_PAD.map((key) => (
            <button
              key={key}
              className='cursor-pointer rounded border p-4 text-lg hover:bg-gray-200'
              onClick={() => handleKeyPress(key as Key)}
            >
              {key}
            </button>
          ))}
        </div>
      </div>
      <div className='col-span-3 px-4'>
        <ContactList contactList={matchedContactList} />
      </div>
    </div>
  );
};

export default PhoneBook;
