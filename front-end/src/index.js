import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NewNavBar from './components/NewNavBar';
import ProductsScreen from './screens/ProductsScreen';
import AdminLogin from './components/Admin/AdminLogin';
import AdminPanel from './components/Admin/AdminPanel';
import AddProduct from './components/Admin/AddProduct';
import AddSubProduct from './components/Admin/AddSubProduct';
import Test from './components/Test';
import SignupScreen from './screens/SignupScreen';
import UsersList from './components/Admin/UsersList';

let isAdmin = false;

const router = (
  <BrowserRouter>
  {isAdmin && <NewNavBar/>}
    <Routes>
      <Route path="/" element={<App />}>
        <Route index={true} element={<AdminLogin  />} />
      </Route>

      <Route path="/admin-panel" element={<AdminPanel />} />
      <Route path="/admin-panel/products/addproduct" element={<AddProduct />} />
      <Route path="/admin-panel/products/addsubproduct" element={<AddSubProduct />} />
      <Route path="/admin-panel/users" element={<UsersList />} />
    
      
      <Route path='/home' element={<Home/>} />
      <Route path="/products" element={<ProductsScreen />} />
      <Route path="/signup" element={<SignupScreen />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  </BrowserRouter>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {router}
  </React.StrictMode>
);

