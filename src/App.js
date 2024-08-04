import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Men from './pages/Men';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import NavSideMenu from './components/NavSideMenu';
import { LoginProvider } from './context/LoginContext';
import { Logout } from './pages/Logout';
import ProductDetails from './pages/ProductDetails';




function App() {
  return (
    <LoginProvider>
      <div className="App flex bg-[#dcdcdc] overflow-x-hidden hide-scrollbar">
       
        <Router>
        
          <NavBar />
          <div className='w-full h-full'>
            <NavSideMenu />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/Men' element={<Men />} />
              <Route path='/logout' element={<Logout/>}/>
              <Route path='/product/:productId' element={<ProductDetails/>} />
              {/* <Route path='/product/:productId' element={<ProductDetails/>} /> */}
            </Routes>
          </div>

        </Router>
        
      </div>
      </LoginProvider>
  );
}

export default App;
