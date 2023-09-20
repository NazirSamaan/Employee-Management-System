import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import './navbar.css';

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);



    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/Home">
            EMS
          </Link>
          <button className="navbar-toggler" type="button" onClick={handleShow}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link className='nav-link' to='/Home' onClick={handleClose}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/Employeepage' onClick={handleClose}>
                  Employee
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/Report' onClick={handleClose}>
                  Report
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/' onClick={handleClose}>
                  Log out
                </Link>
              </li>
            </ul>
          </div>
        </div>
  
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Menu</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link className='nav-link' to='/Home' onClick={handleClose}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/Employeepage' onClick={handleClose}>
                  Employee
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/Report' onClick={handleClose}>
                  Report
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/' onClick={handleClose}>
                  Log out
                </Link>
              </li>
            </ul>
          </Modal.Body>
        </Modal>
      </nav>
    );
  };

export default Navbar;


