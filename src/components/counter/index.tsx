import React, {useEffect, useRef} from "react";
import {useNativeCountupNumber} from "./hook/countup.number";
import { CounterDiv } from './style';

interface Props {
  state: boolean;
}

const Counter = (props: Props) => {
    const {state} = props;
    const lapsedTime = 0;
    const nativeCountup = useNativeCountupNumber();
    const countupMessage = useRef<HTMLSpanElement | null>(null);

    useEffect(() => {
      if(state) {
        nativeCountup.onIncrease = (value: number) => {
          if (countupMessage.current) countupMessage.current.textContent = `${value} ${value > 1 ? 'segundos' : 'segundo'}`;
        };
        nativeCountup.start(lapsedTime);
      } else {
        if (countupMessage.current) countupMessage.current.textContent = `0`;
        nativeCountup.stop();
      }
      return () => {
        nativeCountup.stop();
      };
    }, [nativeCountup, state]);
    
    return (
        <div className="counter-container">
        <CounterDiv>
          <span ref={countupMessage}>{lapsedTime}</span>
        </CounterDiv>
      </div>
    );
}

export default Counter;