 import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'
import { Home } from './pages/Home'
import { Signin } from './pages/Signin'
import { Signout } from './pages/Signout'
import { Profile } from './pages/Profile'
import { About } from './pages/About'
import { Header } from './pages/Header'


function App() {
 

  return (
 <BrowserRouter>
 <Header/>
 <Routes>
  <Route path='/' element={<Home />}/>
  <Route path='/About' element={<About />}/>
  <Route path='/sign-in' element={<Signin />}/>
  <Route path='/sign-out' element={<Signout />}/>
  <Route path='/profile' element={<Profile />}/>
 </Routes>
 </BrowserRouter>  
  )
}

export default App
