import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import HomeLayout from './layouts/HomeLayout'
import News from './pages/News'
import Games from './pages/Games'
import Community from './pages/Community'
import Support from './pages/Support'
import Shop from './pages/Shop'
import NotFound from './pages/NotFound'
function App() {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/' element={<HomeLayout />}>
        <Route index element={<Home />} />
        <Route path='/news' element={<News />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/support' element={<Support />} />
        <Route path='/games' element={<Games/>} />
        <Route path='/community' element={<Community />} />
        <Route path='*' element={<NotFound/>}/>
      </Route>
    </Routes>
  )
}

export default App
