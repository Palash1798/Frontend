import { useState } from "react";



const Counter1  = () => { const [count, setCount] = useState(0);

    const MAX_VALUE = 5;
    const handleIncreament = () => {
        if(count >= MAX_VALUE){
            return;
        }
        setCount(preValue => {
            return preValue + 1;
        })
    }

    const handleDecreament = () => {
        if(count <= 0){
            return;
        }
        setCount (preValue => {
            return preValue - 1;
        }) 
    }

    return (
        <div>
            <button onClick={handleDecreament}>-</button>
            {count}
            <button onClick={handleIncreament}>+</button>
        </div>
    )
}
 
export default Counter1;