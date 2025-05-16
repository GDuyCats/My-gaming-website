import React from 'react'
import Input from '../components/input'
import { Link } from 'react-router-dom'
function Login() {
  return (
    <div className="flex flex-col items-center min-w-screen min-h-screen bg-[#f5f5f5]">

      <div className='space-y-2'>
        <div className='flex'>
          <p className='font-bold text-[30px]'>Login</p>
        </div>

        <div className='flex flex-col p-2 space-y-2 min-w-[700px] min-h-[300px] bg-amber-50'>
          <Input type='text' placeholder='username'  />
          <Input type='password' placeholder='password'  />
          <div className='flex justify-center bg-amber-200 w-[200px]'>
            <p className='font-semibold'>Login</p>
          </div>
          <p>Don't have an account ? <Link to='/register'>Create new one</Link></p>
        </div>

      </div>
    </div>
  )
}

export default Login
