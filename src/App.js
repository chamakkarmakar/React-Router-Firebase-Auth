import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Orders from './components/Orders/Orders';
import Products from './components/Products/Products';
import Registration from './components/Registration/Registration';



function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='products' element={<Products />}></Route>
        <Route path='orders' element={<Orders />}></Route>
        <Route path='login' element={<Login />}></Route>
        <Route path='register' element={<Registration />}></Route>
      </Routes>
    </div>
  );
}

export default App;
