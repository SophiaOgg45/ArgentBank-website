import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from '../components/Header'; 
import Footer from '../components/Footer'
import Home from '../pages/Home';          
import Login from '../pages/Login';       
import Profile from '../pages/Profile';    

export default function AppRouter() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          {/* Ajoutez d'autres routes ici si nécessaire */}
        </Routes> 
        
        <Footer />
      </div>
    </BrowserRouter>
  );
}
