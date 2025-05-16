import React from 'react'

function Input({ type, placeholder }) {
    return (
        <input type={type} placeholder={placeholder} className="w-full p-2 border rounded"/>
    )
}

export default Input
