import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Store from './Store';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Store' element={<Store/>}/>
     </Routes>
    </div>
    </Router>
  );
}

export default App;
