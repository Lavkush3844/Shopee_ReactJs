import { Route, Routes } from 'react-router'
import './App.css'
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import HomePage from './container/HomePage/HomePage'
import Footer from './components/Footer/Footer'
import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp'

function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signUp' element={<SignUp />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
