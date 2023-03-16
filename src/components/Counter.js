import { useState } from 'react'

export default function Counter(props) {
    console.log(props)
    const [count, setCount] = useState(props.initialCount || 0)
    console.log('Test')
    const title = useState(props.title || 'Test')
    
    function increment(incrementor) {
        setCount(count+incrementor)
    }

    return (
        <div>
        <h2>{title}</h2>
            Count: { count }
            <div>
                <button onClick={ () => increment(1)}>Increment</button>
                {
                    (count <= 0) ?
                    <button onClick={ () => increment(-1)}>Decrement</button>
                    :
                    <></>
                }
                <button onClick={ () => increment(5)}>Add 5</button>
            </div>
        </div>
    )
}