import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';


function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} />
          {/* <Route path="/charector/:id" element={<Che />} /> */}
          <Route path="*" element={<NotFound />}/>
        </Routes>
    </div>
  );
}

export default App;
