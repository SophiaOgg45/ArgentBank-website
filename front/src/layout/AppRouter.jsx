import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import PrivateRoute from '../redux/PrivateRoute';
import EditUser from '../components/EditUser'; 

export default function AppRouter() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<PrivateRoute element={<Profile />} />} />
          <Route path="/edit-user" component={EditUser} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
