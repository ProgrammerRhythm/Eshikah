import { createContext, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Auth from './Components/Auth/Auth';
import Login from './Components/Auth/Login/Login';
import SignUp from './Components/Auth/SignUp/SignUp';
import Blogs from './Components/Blog/Blog';
import BlogBody from './Components/Blog/BlogBody';
import ClubBody from './Components/DashBoard/Clubs/ClubBody';
import ClubVdo from './Components/DashBoard/Clubs/ClubVdo';
import Activity from './Components/DashBoard/Activity/Activity';
import Clubs from './Components/DashBoard/Clubs/Clubs';
import Info from './Components/DashBoard/Info/Info';
import Profile from './Components/DashBoard/Profile/profile';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import PrivateRoute from './Components/Program/PrivateRoute';
import Program from './Components/Program/Program';
import ClubBlog from './Components/DashBoard/Clubs/ClubBlog';
import ClubLiveC from './Components/DashBoard/Clubs/ClubLiveC';
export const UserContext = createContext();

function isAuthenticated() {
  // Replace this with your own authentication logic
  const jsonUser = localStorage.getItem('user');
  const user = JSON.parse(jsonUser);
  return Boolean(user?.token);
}

// Define a PrivateRoute component to wrap around protected routes
function PrivateRoute2({ children }) {
  return isAuthenticated() ? children : <Navigate to="/login" />;
}


function App() {
  const [logedInUser,setLoggedInUser] = useState({})
  return (
        <UserContext.Provider value={[logedInUser,setLoggedInUser]}>
          <Routes>
                  {/* Show the Home component if the user is not authenticated */}
      <Route path="/" element={isAuthenticated() ? <Navigate to="/dashboard" /> : <Home />} />

{/* Show the Login component if the user is not authenticated */}
<Route path="/login" element={!isAuthenticated() ? <Login /> : <Navigate to="/dashboard" />} />

{/* Show the Dashboard component if the user is authenticated */}
<Route path="/dashboard" element={<PrivateRoute2><Info /></PrivateRoute2>} />

          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/auth" element={<Auth />} />
          <Route path='/blog/:id' element={<BlogBody />} />
          <Route path='/club/:id' element={<ClubBody />} />
          <Route path='/blog' element={<Blogs />} />
          <Route path='/program' element={<Program/>} />
              <Route path="/dashboard" element={
                <PrivateRoute>
                  <Info />
                </PrivateRoute>
              } />
               <Route path="/dashboard/club/:id/videos" element={
                <PrivateRoute>
                  <ClubVdo />
                </PrivateRoute>
              } />
              <Route path="/dashboard/club/:id/blogs" element={
                <PrivateRoute>
                  <ClubBlog />
                </PrivateRoute>
              } />
               <Route path="/dashboard/club/:id/liveclass" element={
                <PrivateRoute>
                  <ClubLiveC />
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
