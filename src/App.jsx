import './App.css'
import Footer from './assets/components/Home/Footer'
import Header from './assets/components/Home/Header'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Activity } from './pages/Activity'
import { ActivityDetails } from './pages/ActivityDetails'
import { Packages } from './pages/Packages'
import { PackagesDetail } from './pages/PackagesDetail'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import Login from './assets/components/LoginSignup/Login'
import SignUp from './assets/components/LoginSignup/SignUp'

function App() {

  return (
    <>
    {
      window.location.pathname !== "/login" && window.location.pathname !== "/signup" ? <Header/> : null
    }
    
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/activity' element={<Activity/>}/>
        <Route path='/activitydetails' element={<ActivityDetails/>}/>
        <Route path='/packages' element={<Packages/> }/>
        <Route path='/packagesdetails' element={<PackagesDetail/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes> 
      {
      window.location.pathname !== "/login" && window.location.pathname !== "/signup" ? <Footer/> : null
    }
    
    </>
  )
}

export default App
