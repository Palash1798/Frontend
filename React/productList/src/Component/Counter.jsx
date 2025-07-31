
import { useState } from "react";

const Counter = ({ initialCount }) => {
    const [count, setCount] = useState(initialCount);  //here, we are using count as variable who is getting changed
    //setCount as method and useState(0) as initial value for count.

    const increase = () => {
        setCount(count + 1);
    }

    const decrease = () => {
        setCount(count - 1);
    }

    return (
        <div className="counter">
            <button onClick={decrease}>-</button>
            <span>{count}</span>
            <button onClick={increase}>+</button>
        </div>
    )
}

export default Counter;