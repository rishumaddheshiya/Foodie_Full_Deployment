import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import AddFood from './pages/Add/AddFood'
import AddRest from './pages/Add/AddRest'
import ListFood from './pages/List/ListFood'
import ListRest from './pages/List/ListRest'
import Orders from './pages/Orders/Orders'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className='app'>
      <ToastContainer />
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path="/addfood" element={<AddFood />} />
          <Route path="/addrest" element={<AddRest />} />
          <Route path="/listfood" element={<ListFood />} />
          <Route path="/listrest" element={<ListRest />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </div>
    </div>
  )
}

export default App