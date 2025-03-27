
import './App.css'
import { Route, Routes } from 'react-router'
import Home from './pages/Home/Home'
import Touch from './pages/Touch/Touch'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/touch/:id' element={<Touch/>}/>

        
      </Routes>


  
  
    </>
  )
}

export default App
