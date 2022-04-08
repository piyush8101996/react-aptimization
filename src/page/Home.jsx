import { useCallback, useMemo, useState } from 'react';
import Label from '../component/Label/Label';

const Home = () => {
  const [counter, setCounter] = useState(0);

  const incrementHandler = () => {
    setCounter(counter+1);
  };

  const decrementHandler = () => {
    setCounter(counter-1);
  };

  // const resetHandler = () => {
  //     setCounter(0);
  // };

  const callbackIncrementHandler = useCallback(()=>{
    console.log('useCallback =====>>> ');
    setCounter(0);
  },[]);

  // Heavy Task example
  const memoValue = useMemo(()=>{
    console.log('useMemo =====>>> ');
    let num;
    for(let i = 0; i< 500_000_000; i++){
      num = i;
    }
    return num+1;
  },[]);
    

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={incrementHandler}>Increment +1</button>
      <button onClick={decrementHandler}>Decrement -1</button>
      <Label 
        msg={'Please check the counter'}
        resetHandler={callbackIncrementHandler}
        num={memoValue}/>
    </div>
  );
};

export default Home;