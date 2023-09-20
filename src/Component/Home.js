import React from 'react';
import NavigationButton from './NavigationButton';
import './Home.css';

const Home = () => {
  return (
    <div className="page">
    
      <section className='home'>
        <div className="content-container">
          <br /><h2>Welcome To My Employee Management System</h2>
          <NavigationButton to="/Employeepage" buttonText="Click here to Employee Page" />
        </div>
      </section>
      
      <footer className="footer">
        &copy; {new Date().getFullYear()} Nazir Sama'an
      </footer>
    </div>
  );
}

export default Home;
