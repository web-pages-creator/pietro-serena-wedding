import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import RSVPWithParams from './pages/RSVPWithParams';
import Default from './pages/Default';
import ViaggioDiNozze from './pages/ViaggioDiNozze';
import Regalo from './pages/Regalo';
import Home from './pages/Home';

function App() {
  return (
    <div className='w-screen h-screen h-auto flex flex-col items-center justify-center'>
        <Routes>
          <Route path="/rsvp/:id" element={<RSVPWithParams />} />
          <Route path="/regalo-di-nozze" element={<Regalo />} />
          <Route path="/viaggio-di-nozze" element={<ViaggioDiNozze />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
    </div>
  );
}

export default App;
