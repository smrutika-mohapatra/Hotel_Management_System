import React from 'react'
import {Routes,Route } from 'react-router-dom'
import Home from "./Components/Home/Home"
import Rooms from "./Components/Roomes/Rooms"
import HotelBookingForm from './Components/Booking Form/HotelBookingForm'
import Gallery from "./Components/Gallery/Gallery1"
import DineDrink from './Components/Dine&Drink/DineDrink'
import Events from './Components/Events/Events'
import OffersPage from './Components/Offers/OffersPage'
import Shop from './Components/Shop/Shop'
import Popup from './Components/Popup/Popup'
import Contact from './Components/Contact/Contact'
import Register from "./Components/Register/Register"
import BookingForm from './Components/Booking Form/BookingForm'
import Dashboard from './Components/DashBoards/Dashboard'
// import Dashboard from './Components/Dashboard/Dashboard'
import Test from "./Components/Test"


const App = () => {
  return (
    <div>
      {/* <Test/> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path='/room' element={<Rooms/>}/>
          <Route path='/book' element={<HotelBookingForm/>}/>
          <Route path='gallery' element={<Gallery/>}/>
          <Route path='/dine' element={<DineDrink/>}/>
          <Route path='/events' element={<Events/>}/>
          <Route path='/offers' element={<OffersPage/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/popup' element={<Popup/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/bookform' element={<BookingForm/>}/>
        </Routes>
        
        {/* <Rout/> */}
     
    </div>
  )
}

export default App