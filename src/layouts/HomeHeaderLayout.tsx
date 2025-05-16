import React from 'react'
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
type HomeHeaderLayout = {
    title: string
    isDropDown?: Boolean
    className?: String
}

function HomeHeaderLayout({ title, isDropDown = false }) {
    const navigate = useNavigate();
    const handleClick = () => {
        const route = '/' + title.toLowerCase()
        navigate(route)
    }
    return (
        <div
            onClick={handleClick}
            className={`relative flex items-center h-full p-1 group ${isDropDown ?
                title === 'Shop'
                    ? 'hover:bg-blue-500'
                    : 'hover:bg-cyan-500'
                : title === 'News'
                    ? 'hover:bg-amber-500'
                    : title === 'Support'
                        ? 'hover:bg-red-500'
                        : title === 'Community'
                            ? 'hover:bg-pink-500'
                            : 'bg-transparent'
                }`}>
            <p className='flex items-center gap-1 cursor-pointer'>
                <span className='text-xl font-semibold text-white'>{title}</span>
                {isDropDown && (
                    <>
                        <ChevronDown size={15} className='mt-1 text-white group-hover:hidden' />
                        <ChevronUp size={15} className='hidden mt-1 group-hover:inline ' />
                    </>
                )}
            </p>
            {isDropDown && (
                <div className={`fixed w-screen h-[400px] top-[60px] left-0 hidden group-hover:inline ${isDropDown ?
                    title === 'Games'
                        ? 'bg-cyan-500'
                        : 'bg-blue-500'
                    : ''
                    }`}>
                    {title === 'Games'
                        ? <div className='fixed w-screen h-[390px] top-[70px] left-0 bg-white'>Game</div>
                        : <div className='fixed w-screen h-[390px] top-[70px] left-0 bg-white'>Shop</div>          
                    }
                </div>
            )
            }
        </div>
    )
}

export default HomeHeaderLayout
