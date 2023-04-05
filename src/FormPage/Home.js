import React from 'react'
import { Routes,Route } from 'react-router-dom'
import App from './App'
import BookingForm from './BookingForm'
import CarInfo from './CarInfo'
import CreateAccount from './CreateAccount'
import Login from './Login'
import Payment from './Payment'

function Home() {
  return (
   <>
   <Routes>
    <Route path="/" element={<App/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/createlogin" element={<CreateAccount/>}/>
    <Route path="/booking" element={<BookingForm/>}/>
    <Route path="/payment" element={<Payment/>}/>
    <Route path="/infoo" element={<CarInfo/>}/>
   </Routes>

   </>
  )
}

export default Home