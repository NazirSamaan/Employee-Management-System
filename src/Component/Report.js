import React, { useState, useEffect } from 'react';
import './Report.css'; 

const Report = () => {
  const [totalItems, setTotalItems] = useState(0);
  const [recentActivity, setRecentActivity] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setTotalItems(3); 
      setRecentActivity([
        { action: 'Employee Added:', itemName: 'Ahmad', timestamp: '2 hours ago' },
        { action: 'Employee Edited:', itemName: 'Ziyah age from 25 to 26', timestamp: '12 hours ago' },
        { action: 'Employee Deleted:', itemName: 'Zura ', timestamp: '1 day ago' },
      ]);
    }, 1000);
  }, []);

  return (
    <div>
      
      <div className="my-5"></div> 
      <div className="dashboard-container">
        <h1 className="dashboard-title">Report of the Employee</h1>
        <div className="dashboard-section">
          <h2 className="section-title">Total of the Employee</h2>
          <p className="section-value">{totalItems}</p>
        </div>
        <div className="dashboard-section">
          <h2 className="section-title">Recent Report:</h2>
          <ul className="activity-list">
            {recentActivity.map((activity, index) => (
              <li key={index} className="activity-item">
                <strong>{activity.action}</strong> {activity.itemName} ({activity.timestamp})
              </li>
            ))}
            <br /> <br /><br /><br />
          </ul>
        </div>
      </div>
      
    
      <div className="mt-5"></div> 
      
      <footer className="footer">
        &copy; {new Date().getFullYear()} Nazir Samaan
      </footer>
    </div>
  );
};

export default Report;
