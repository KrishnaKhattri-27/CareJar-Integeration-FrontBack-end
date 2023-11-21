import { Route, Routes } from 'react-router-dom';
import './App.css';
import Specialization from './pages/Specialization';
import Doctors from './pages/Doctors';

function App() {
  return (
    <div className='bg-slate-400'>
      <Routes>
        <Route path='/' element={<Specialization/>}/>
        <Route path='/doctors/:id' element={<Doctors/>}/>
      </Routes>
    </div>
  );
}

export default App;
