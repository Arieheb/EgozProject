import './App.css';
import { Nav } from './nav/Nav';
import { Jobs } from './pages/jobs/Jobs';
import { Home } from './pages/home/Home';
import { About } from './pages/about/About';
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="Jobs" element={<Jobs />} />
          <Route path="About" element={<About/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
