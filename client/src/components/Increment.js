import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa'

const Increments = () => {
    const [count, setCount] = useState(0)

    const handlerOnClick = () => {
        setCount(count+1)
    }

    return (
        <div>
            {count}
            <br />
            <button onClick={handlerOnClick}>
                <FaPlus />
            </button>
        </div>
    )
}

export default Increments
