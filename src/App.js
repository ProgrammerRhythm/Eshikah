import { Route, Routes } from 'react-router-dom';
import Login from './Components/Auth/Login/Login';
import SignUp from './Components/Auth/SignUp/SignUp';
import Activity from './Components/DashBoard/Activity/Activity';
import Clubs from './Components/DashBoard/Clubs/Clubs';
import Info from './Components/DashBoard/Info/Info';
import Profile from './Components/DashBoard/Profile/profile';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard/profile" element={<Profile />} />
          <Route path="/dashboard" element={<Info />} />
          <Route path="/dashboard/info" element={<Info />} />
          <Route path="/dashboard/clubs" element={<Clubs />} />
          <Route path="/dashboard/activity" element={<Activity />} />
          <Route path="*" element={<NotFound />}/>
        </Routes>
  );
}

export default App;
