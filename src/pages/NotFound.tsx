import React from 'react'
import { useNavigate } from 'react-router-dom'
import NotFoundImage from '../assets/404.jpg'
function NotFound() {
    const navigate = useNavigate()
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-black">
            <img src={NotFoundImage} alt='404' className=''/>
            <p className='text-6xl font-bold text-white'>Something went wrong</p>
            <p className='my-10 text-white'>Please check the url or the page have been moved</p>
            <div onClick={() => navigate('/')} className='px-5 py-2 font-bold text-black bg-white cursor-pointer rounded-3xl'> Back to Home</div>
        </div>
    )
}

export default NotFound
