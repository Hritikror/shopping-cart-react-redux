import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Header from './components/headers/Header'
import {Route, Routes} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Header/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/cart' element={<Cart/>}/>
      </Routes>
    </div>
  )
}

export default App
