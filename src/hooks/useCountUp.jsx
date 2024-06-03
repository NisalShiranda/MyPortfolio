import { useEffect, useState } from 'react';

const useCountUp = (end, duration = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const incrementTime = (duration / end) * 10;

    const increment = () => {
      start += 1;
      setCount(start);
      if (start < end) {
        setTimeout(increment, incrementTime);
      }
    };

    increment();
  }, [end, duration]);

  return count;
};

export default useCountUp;
