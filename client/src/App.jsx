import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import UserForm from './components/form/UserForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
    <Navbar/>
    <div className='wrapper'>
    <Sidebar/>
     <UserForm />
    </div>
    </div>
    </>
  )
}

export default App
