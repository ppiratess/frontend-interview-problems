import { useEffect, useMemo, useState } from 'react';

import type { ContactListType } from '../interface';

const PHONE_BOOK = ['Jake', 'Amy', 'Ash', 'Gary', 'Greninja'];

const nameToDigitsLookup: Record<string, number> = {
  a: 2,
  b: 2,
  c: 2,
  d: 3,
  e: 3,
  f: 3,
  g: 4,
  h: 4,
  i: 4,
  j: 5,
  k: 5,
  l: 5,
  m: 6,
  n: 6,
  o: 6,
  p: 7,
  q: 7,
  r: 7,
  s: 7,
  t: 8,
  u: 8,
  v: 8,
  w: 9,
  x: 9,
  y: 9,
  z: 9,
};

function transformContactToLookup(name: string) {
  return name
    .toLowerCase()
    .split('')
    .map((char) => nameToDigitsLookup[char])
    .join('');
}

const usePhonebook = ({
  dialedNumber,
}: { dialedNumber?: number[] | null } = {}) => {
  const phoneBook = useMemo(
    () =>
      PHONE_BOOK.map((name) => ({
        name,
        digits: transformContactToLookup(name),
      })),
    [],
  );

  const [matchedContactList, setMatchedContactList] =
    useState<ContactListType[]>(phoneBook);

  useEffect(() => {
    const dialedString = dialedNumber?.join('') ?? '';

    const matches = phoneBook.filter((entry) =>
      entry.digits.startsWith(dialedString),
    );

    setMatchedContactList(matches);
  }, [dialedNumber, phoneBook]);

  return { matchedContactList };
};

export default usePhonebook;
