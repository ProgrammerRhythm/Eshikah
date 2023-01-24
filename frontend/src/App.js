import { createContext, useState } from 'react';
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
import PrivateRoute from './Components/Program/PrivateRoute';
import Program from './Components/Program/Program';
// import PrivateRoutes from './PrivateRoute/PrivateRoute';
// import PrivateRoutes from './PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const signedInUser = {name:``, email:'',user:false}
  const makeJson = JSON.stringify(signedInUser);
  localStorage.setItem('user',makeJson);
  const jsonUser = localStorage.getItem('user');
  const Luser = JSON.parse(jsonUser).user;
  const [logedInUser,setLoggedInUser] = useState({})
  return (
        <UserContext.Provider value={[logedInUser,setLoggedInUser]}>
          <Routes>
          <Route path="/" element={ Luser ? <Profile /> :
              <Home />
          } />
          <Route path="/auth/signin" element={<Login />} />
          <Route path="/auth/signup" element={<SignUp />} />
          <Route path="/auth" element={<Auth />} />
          <Route path='/blog/:id' element={<BlogBody />} />
          <Route path='/blog' element={<Blogs />} />
          <Route path='/program' element={<Program/>} />
              <Route path="/dashboard" element={
                <PrivateRoute>
                  <Info />
                </PrivateRoute>
              } />
              <Route path="/dashboard/profile" element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              } />
              <Route path="/dashboard/info" element={
                <PrivateRoute>
                  <Info />
                </PrivateRoute>
              } />
              <Route path="/dashboard/clubs" element={
                <PrivateRoute>
                  <Clubs />
                </PrivateRoute>
              } />
              <Route path="/dashboard/activity" element={
                <PrivateRoute>
                  <Activity />
                </PrivateRoute>
              } />
          <Route path="*" element={<NotFound />}/>
        </Routes>
        </UserContext.Provider>
  );
}

export default App;
