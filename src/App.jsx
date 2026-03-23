import Home from "./components/Home"
import Mens from "./components/Mens"
import Navbar from "./components/Navbar"
import {Routes,Route} from 'react-router-dom'
import Women from "./components/Women"
import Loginpage from "./components/Loginpage"
import Cart from "./components/Cart"
import PopularW from "./components/PopularW"

function App() {
  

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/mens' element={<Mens/>}/>
      <Route path='/womens' element={<Women/>}/>

      <Route path='/login' element={<Loginpage/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    
    
  
    </>
  )
}

export default App
