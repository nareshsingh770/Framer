import React, { useState } from 'react'
import CounterChild from './CounterChild'

const CounterMain = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <CounterChild numb={count} />
            <button onClick={() => setCount(count + 1)}>Add</button>
            <button onClick={() => setCount(count - 1)}>Minus</button>
        </div>
    )
}

export default CounterMain