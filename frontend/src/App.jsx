
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import './index.css'

import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import { Toaster } from 'react-hot-toast'
import { useAuth } from './context/AuthContext'


function App() {
  const {user} = useAuth()

  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <Routes>
        <Route path = '/' element = {user ? <Home/> : <Navigate to={"/login"}/>}/>
        <Route path = 'login' element = {user ? <Navigate to="/"/>: <Login/>}/>
        <Route path = 'signup' element = {user ? <Navigate to="/"/>: <Signup/>}/>
      </Routes>
      <Toaster/>
    </div>
  )
}

export default App
