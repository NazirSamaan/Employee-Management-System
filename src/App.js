import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Report from './Component/Report';
import Login from './Component/Login';
import Employeepage from './Component/Employeepages'; 
import Create from './Component/Create'; 
import Edit from './Component/Edit';
import { EmployeeProvider } from './Component/EmployeeContext'; 
import Register from './Component/Register';
import Nonavbar from './Component/Nonavbar';


const App = () => {
  return (
    <Router>
      <Nonavbar>

      <Navbar />
      </Nonavbar>
      <EmployeeProvider> 
        <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/Login" element={<Login />} />
          <Route path="/Home" element={<Home />} />

          <Route path="/Report" element={<Report />} />
          <Route path="/Employeepage" element={<Employeepage />} />
          
          <Route path="/Create" element={<Create />} />
          <Route path="/Edit" element={<Edit />} />

        </Routes>
      </EmployeeProvider>
    </Router>
  );
};

export default App;
