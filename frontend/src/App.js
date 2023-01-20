import { Route, Routes } from 'react-router-dom';
import Auth from './Components/Auth/Auth';
import Login from './Components/Auth/Login/Login';
import SignUp from './Components/Auth/SignUp/SignUp';
import Blogs from './Components/Blog/Blog';
import BlogBody from './Components/Blog/BlogBody';
import Activity from './Components/DashBoard/Activity/Activity';
import Clubs from './Components/DashBoard/Clubs/Clubs';
import Info from './Components/DashBoard/Info/Info';
import Profile from './Components/DashBoard/Profile/profile';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Program from './Components/Program/Program';

function App() {
  return (
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/auth/signin" element={<Login />} />
          <Route path="/auth/signup" element={<SignUp />} />
          <Route path="/auth" element={<Auth />} />
          <Route path='/blog/:id' element={<BlogBody />} />
          <Route path='/blog' element={<Blogs />} />
          <Route path='/program' element={<Program/>} />
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
