import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Men from './pages/Men';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import NavSideMenu from './components/NavSideMenu';
import { LoginProvider } from './context/LoginContext';
import { Logout } from './pages/Logout';
import Productdetail from './model/Productdetail';
import { CardProvider } from './context/CartContext';
import AddToCart from './pages/AddToCart';
import Women from './pages/Women';
import AllProduct from './model/AllProduct';
import Kids from './pages/Kids';
import Beauty from './pages/Beauty';
import DressMaterial from './pages/DressMaterial';
import MaterialDetail from './model/MaterialDetail';


function App() {
  return (
    <LoginProvider>
      <CardProvider>
        <div className="App flex bg-[#dcdcdc] overflow-x-hidden hide-scrollbar">

          <Router>

            <NavBar />
            <div className='w-full h-full'>
              <NavSideMenu />
              <div>
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/Men' element={<Men />} />
                  <Route path='/logout' element={<Logout />} />
                  <Route path='/Men/product/:productId' element={<Productdetail />} />
                  <Route path= "/material/:dressId" element={<MaterialDetail/>}/>
                  <Route path='/cart' element={<AddToCart />} />
                  <Route path='/Women' element={<Women />} />
                  <Route path='/Kids' element={<Kids />} />
                  <Route path='/Beauty' element={<Beauty />} />
                  <Route path='/dress/:category' element={<DressMaterial/>}/>
                  <Route path='/products/:name/:title' element={<AllProduct/>} />
                  {/* <Route path='/product/:productId' element={<ProductDetails/>} /> */}
                </Routes>
              </div>
            </div>
          </Router>

        </div>
      </CardProvider>
    </LoginProvider>
  );
}

export default App;
