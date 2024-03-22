import React, { useState } from 'react'

export default function Count() {
    const [Count, setCount] = useState(0)

    function changeCountHandler(sign){
        if (sign  === '+')
            setCount(Count + 1)
        else if (sign  === '-')
            setCount(Count - 1)
    }

    return (
        <div>
            <h2 className='text-cyan-600'>{Count}</h2>
            <button className ='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' onClick={()=>changeCountHandler('+')}>+</button>
            <button className ='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' onClick={()=>changeCountHandler('-')}>-</button>
        </div>
        )
}
