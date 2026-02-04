import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Calc from './components/Calc'
import Todo from './components/Todo'
import First from './components/first'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="app-container">
   
   {/* <Calc /> */}
    <Todo /> 
     {/* <First />  */}
    </div>  
    </>
  )
}

export default App;
