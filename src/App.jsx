import  { Toaster } from 'react-hot-toast';
import { Route, Routes } from "react-router-dom";
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import NavBar from './components/NavBar';

export default function App() {
  return (
    <div className="max-4xl">
        <NavBar/>
     
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
        <Footer/>

      <Toaster />
    </div>
  )
}