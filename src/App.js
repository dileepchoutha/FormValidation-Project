import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Registrationform from './components/Registrationform';
import Userdata from './components/Userdata';
import Edituser from './components/Edituser';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/registration/' element={<Registrationform/>} />
        <Route path='/userdata/' element={<Userdata/>} />
        <Route path='/edituser/:sno' element={<Edituser/>}/>
      </Routes>
    </div>
  );
}

export default App;
