type Props = {
  results: string[];
  matchWord: string;
};

const HighlightedResults = ({ results, matchWord }: Props) => {
  const regex = new RegExp(`(${matchWord})`, 'gi');

  return (
    <div>
      {results?.map((result, idx) => (
        <span key={idx}>
          {result?.split(regex)?.map((part, i) =>
            regex.test(part) ? (
              <span
                key={i}
                className='bg-yellow-200 font-semibold'
              >
                {part}
              </span>
            ) : (
              <span key={i}>{part}</span>
            ),
          )}
          {idx < results.length - 1 && ', '}
        </span>
      ))}
    </div>
  );
};

export default HighlightedResults;
