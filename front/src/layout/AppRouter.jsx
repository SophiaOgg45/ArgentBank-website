import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import PrivateRoute from '../redux/PrivateRoute';
import EditUser from '../components/EditUser';
import PageLayout from "../layout/PageLayout";


export default function AppRouter() {
  return (
    <BrowserRouter>
      <div className="App">

        <Routes>
          <Route path="/" element={<PageLayout />} >
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<PrivateRoute element={<Profile />} />} />
            <Route path="/edit-user" component={EditUser} />
          </Route>
        </Routes>

      </div>
    </BrowserRouter>
  );
}
