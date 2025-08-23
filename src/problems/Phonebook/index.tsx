import { useState } from 'react';

import ContactList from './ContactList';
import usePhonebook from './hooks/usePhonebook';

const KEY_PAD = [
  1,
  [2, ['a', 'b', 'c']],
  [3, ['d', 'e', 'f']],
  [4, ['g', 'h', 'i']],
  [5, ['j', 'k', 'l']],
  [6, ['m', 'n', 'o']],
  [7, ['p', 'q', 'r', 's']],
  [8, ['t', 'u', 'v']],
  [9, ['w', 'x', 'y', 'z']],
  'Clear',
  0,
  'Back',
];

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
    <div className='grid grid-cols-12 place-content-center py-24'>
      <div className='col-span-9'>
        <div className='text-2xl'>
          {dialedNumber.length > 0 ? dialedNumber : '_'}
        </div>
        <div className='mt-4 grid grid-cols-3 gap-2'>
          {KEY_PAD.map((key, keyIndex) => {
            return (
              <>
                {Array.isArray(key) ? (
                  <div className='grid cursor-pointer rounded border p-4 text-xl hover:bg-gray-200'>
                    <button
                      key={keyIndex}
                      className=''
                      onClick={() => handleKeyPress(key[0] as Key)}
                    >
                      {key[0]}
                    </button>
                    {Array.isArray(key[1]) && (
                      <span className='text-text-secondary text-center text-xs'>
                        {key[1].map((character) => character.toUpperCase())}
                      </span>
                    )}
                  </div>
                ) : (
                  <button
                    key={key}
                    className='cursor-pointer rounded border p-4 text-xl hover:bg-gray-200'
                    onClick={() => handleKeyPress(key as Key)}
                  >
                    {key}
                  </button>
                )}
              </>
            );
          })}
        </div>
      </div>
      <div className='col-span-3 px-4'>
        <ContactList contactList={matchedContactList} />
      </div>
    </div>
  );
};

export default PhoneBook;
