import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import RSVPWithParams from './pages/RSVPWithParams';
import Default from './pages/Default';
import ViaggioDiNozze from './pages/ViaggioDiNozze';
import Regalo from './pages/Regalo';
import Home from './pages/Home';
import Programma from './pages/Programma';

function App() {
  return (
    <div className='flex flex-col items-center'>
        <Routes>
          <Route path="/rsvp/:id" element={<RSVPWithParams />} />
          <Route path="/regalo-di-nozze" element={<Regalo />} />
          <Route path="/programma" element={<Programma />} />
          <Route path="/viaggio-di-nozze" element={<ViaggioDiNozze />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
    </div>
  );
}

export default App;
