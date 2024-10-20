import { Route, Routes } from 'react-router-dom';
import './App.css';
import RSVPWithParams from './pages/RSVPWithParams';

function App() {
  return (
    <div className='w-screen h-screen h-auto flex flex-col items-center justify-center'>

      <Routes>
        <Route path="/rsvp/:id" element={<RSVPWithParams />} />
      </Routes>
    </div>
  );
}

export default App;
