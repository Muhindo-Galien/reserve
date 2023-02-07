import  { Toaster } from 'react-hot-toast';
import { Route, Routes } from "react-router-dom";
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import About from './pages/About';
import MyEvents from './pages/MyEvents';
import MyTickets from './pages/MyTickets';
import NavBar from './components/NavBar';
import EventDetails from './pages/EventDetails';
import { useEffect, useState } from 'react';
import { getContractAllEvents, getEtheriumContract, getEvents, getMyTickets, isWallectConnected } from './sevices/Blockchain';
import AddEvent from './components/AddEvent';
import Alert from './components/Alert';
import Loading from './components/Loading';


export default function App() {

  const [loaded, setLoaded] = useState(false)
  useEffect(()=>{
    const loadData=async()=>{
      await isWallectConnected()
      await getEtheriumContract()
      await getContractAllEvents()
      await getMyTickets()
      await getEvents()
      setLoaded(true)
    }
    loadData()
  },[])
  return (
    <div className="max-4xl">
        <NavBar/>
        {loaded ? (
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About/>} />
          <Route path="/my-events" element={<MyEvents />} />
          <Route path="/my-tickets" element={<MyTickets />} />
          <Route path="/event/:id" element={<EventDetails loaded={loaded}/>} />
        </Routes>
         ) : null}
        <Footer/>
        <AddEvent/>
          <Loading/>
        <Alert/>
      <Toaster />
    </div>
  )
}