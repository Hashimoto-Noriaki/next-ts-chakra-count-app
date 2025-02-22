import { useState, useEffect } from 'react'
import { CounterDisplay } from '../molecules/CounterDisplay';

export const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(() =>{
        console.log(`The count is now ${count}`);
    },[count]);

    const handleIncrement = () => setCount((prev) => prev + 1);
    const handleDecrement = () => setCount((prev) => prev - 1);

  return (
    <CounterDisplay
        count={count}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
    />
  )
}
