import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Men from './pages/Men';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import NavSideMenu from './components/NavSideMenu';

function App() {
  return (
    <div className="App flex bg-[#dcdcdc] overflow-x-hidden hide-scrollbar">
      <Router>
        <NavBar />
        <div className='w-full h-full'>
        <NavSideMenu/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Men' element={<Men />} />
        </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
