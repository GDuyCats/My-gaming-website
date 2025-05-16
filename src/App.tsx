import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import HomeLayout from './layouts/HomeLayout'

function App() {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/' element={<HomeLayout />}>
        <Route index element={<Home/>}/>
      </Route>
    </Routes>
  )
}

export default App
