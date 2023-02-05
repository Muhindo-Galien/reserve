import  { Toaster } from 'react-hot-toast';
import { Route, Routes } from "react-router-dom";
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import About from './pages/About';
import MyEvents from './pages/MyEvents';
import MyTickets from './pages/MyTickets';
import NavBar from './components/NavBar';
import EventDetails from './pages/EventDetails';

export default function App() {
  return (
    <div className="max-4xl">
        <NavBar/>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About/>} />
          <Route path="/my-events" element={<MyEvents />} />
          <Route path="/my-tickets" element={<MyTickets />} />
          <Route path="/event/:id" element={<EventDetails />} />
        </Routes>
        <Footer/>

      <Toaster />
    </div>
  )
}