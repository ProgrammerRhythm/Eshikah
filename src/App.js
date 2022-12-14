import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';


function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} />
          {/* <Route path="/charector/:id" element={<Che />} />
          <Route path="*" element={<Not404 />}/> */}
        </Routes>
    </div>
  );
}

export default App;
