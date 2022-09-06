import { Routes, Route } from "react-router-dom";
import "./index.css";

// pages + components
import Home from './pages/Home';
import Navbar from './components/Navbar';
import TrainingTips from "./pages/TrainingTips";

function App() {
  return (
    <div className="App">
      
        <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='training-tips' element={TrainingTips} />
            </Routes>
      
    </div>
  );
}

export default App;
