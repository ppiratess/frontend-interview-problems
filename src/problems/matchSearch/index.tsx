import { useMemo, useState, type ChangeEvent } from 'react';

import HighlightedResults from './HighlightMatchingWords';

const SEARCH_KEYS = ['John', 'Johnny', 'John Doe'];
const SIMPLE_STRING_MATCHING_KEYS = [
  'John Doe',
  'Jane Smith',
  'Johnny Cash',
  'Bob Johnson',
];
const CASE_INSENSETIVE_SEARCH_KEYS = ['jane doe', 'Jane Smith', 'Janet Wilson'];

const MatchSearch = () => {
  const [exactValueSearch, setExactValueSearch] = useState<string[]>([]);
  const [simpleStringMatchingSearch, setSimpleStringMatchingSearch] = useState<
    string[]
  >([]);
  const [simpleStringMatchingWord, setSimpleStringMatchingword] = useState('');

  const [caseInsensetiveMatchingSearch, setCaseInsensetiveMatchingSearch] =
    useState<string[]>([]);
  const [caseInsensetiveMatchingWord, setCaseInsensetiveMatchingWord] =
    useState('');

  const caseInsensetiveSearchValues = useMemo(
    () =>
      CASE_INSENSETIVE_SEARCH_KEYS.map((word) => ({
        originalWord: word,
        lowecaseWord: word.toLowerCase(),
      })),
    [],
  );

  const handleExactValue = (e: ChangeEvent<HTMLInputElement>) => {
    return setExactValueSearch(
      SEARCH_KEYS.filter((key) => key === e.target.value),
    );
  };

  const handleSimpleStringMatchingSearch = (
    e: ChangeEvent<HTMLInputElement>,
  ) => {
    const input = e.target.value;

    if (!input) return setSimpleStringMatchingSearch([]);

    setSimpleStringMatchingword(input);

    return setSimpleStringMatchingSearch(
      SIMPLE_STRING_MATCHING_KEYS.filter((key) => key.includes(input)),
    );
  };

  const handlecaseInsensetiveMatchingSearch = (
    e: ChangeEvent<HTMLInputElement>,
  ) => {
    const input = e.target.value;
    const inputToLowercase = e.target.value.toLowerCase();

    if (!input) return setCaseInsensetiveMatchingSearch([]);

    setCaseInsensetiveMatchingWord(input);

    return setCaseInsensetiveMatchingSearch(
      caseInsensetiveSearchValues
        ?.filter((key) => key.lowecaseWord.includes(inputToLowercase))
        ?.map((filteredWord) => filteredWord.originalWord),
    );
  };

  return (
    <>
      <div className='grid items-start gap-6'>
        <div>
          <div className='pb-2 font-bold'>Match Exact Search</div>
          <span className='text-sm text-gray-600'>
            Search Options: ['John', 'Johnny', 'John Doe']
          </span>
          <div className='grid gap-2 py-8'>
            <input
              type='text'
              placeholder='Search'
              className='w-1/4 border px-4 py-1'
              onChange={handleExactValue}
            />
            <span className='text-sm text-gray-600'>
              Result: {exactValueSearch}
            </span>
          </div>
        </div>
        <hr />
        <div>
          <div className='pb-2 font-bold'>Simple String Matching</div>
          <span className='text-sm text-gray-600'>
            Search Options: ["John Doe", "Jane Smith", "Johnny Cash", "Bob
            Johnson"]
          </span>
          <div className='grid gap-2 py-8'>
            <input
              type='text'
              placeholder='Search'
              className='w-1/4 border px-4 py-1'
              onChange={handleSimpleStringMatchingSearch}
            />
            <span className='text-sm text-gray-600'>
              Result:{' '}
              <HighlightedResults
                results={simpleStringMatchingSearch ?? []}
                matchWord={simpleStringMatchingWord}
              />
            </span>
          </div>
        </div>
        <hr />
        <div>
          <div className='pb-2 font-bold'>Case Insensetive Search</div>
          <span className='text-sm text-gray-600'>
            Search Options: ["jane doe", "Jane Smith", "Janet Wilson"]
          </span>
          <div className='grid gap-2 py-8'>
            <input
              type='text'
              placeholder='Search'
              className='w-1/4 border px-4 py-1'
              onChange={handlecaseInsensetiveMatchingSearch}
            />
            <span className='text-sm text-gray-600'>
              Result:{' '}
              <HighlightedResults
                results={caseInsensetiveMatchingSearch ?? []}
                matchWord={caseInsensetiveMatchingWord}
              />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default MatchSearch;
