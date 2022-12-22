import { Route, Routes } from 'react-router-dom';
import Login from './Components/Auth/Login/Login';
import SignUp from './Components/Auth/SignUp/SignUp';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';


function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<NotFound />}/>
        </Routes>
    </div>
  );
}

export default App;
