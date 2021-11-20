import { useEffect, useRef, useState } from 'react';

const useCountupNumber = (initialValue: number) => {
  const [value, setValue] = useState(initialValue);
  const intervalRef: { current: NodeJS.Timeout | null } = useRef(null);

  const increaseNum = (initial: number) => () => {
    initial += 1;

    setValue(initial);

    if (!initial) clearInterval(intervalRef.current as NodeJS.Timeout);
  };

  useEffect(() => {
    intervalRef.current = setInterval(increaseNum(initialValue), 1000);

    return () => clearInterval(intervalRef.current as NodeJS.Timeout);
  }, [initialValue]);

  return {
    start() {
      setValue(initialValue);
      intervalRef.current = setInterval(increaseNum(initialValue), 1000);
    },
    stop() {
      clearInterval(intervalRef.current as NodeJS.Timeout);
    },
    value,
  };
};

const useNativeCountupNumber = () => {
  class Countup {
    timerID = null as NodeJS.Timeout | null;

    value = 0 as number; 

    start = (initialValue: number) => {
      this.value = initialValue;
      this.timerID = setInterval(() => {
        this.onIncrease(++this.value);
      }, 1000);
      this.onStart();
    };

    stop = () => {
      clearInterval(this.timerID as NodeJS.Timeout);
      this.onStop();
    };

    onIncrease = (value : number) => {
    };

    onStart = () => {};

    onStop = () => {};
  }

  return new Countup();
};

export { useCountupNumber, useNativeCountupNumber };
