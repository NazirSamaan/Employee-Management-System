import React, { useContext } from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { EmployeeContext } from './EmployeeContext';



const Employee = [
  {
    id: "1",
    name: "Nazir",
    age: "32",
    date: "22-1-2018",
  },
  {
    id: "2",
    name: "Ziyah",
    age: "26",
    date: "22-1-2020",
  },
  {
    id: "3",
    name: "ahmad",
    age: "24",
    date: "01-09-2023",
  },
];

function Employeepage() {

  const { employeeData, setEmployeeData } = useContext(EmployeeContext);


  if (employeeData.length === 0) {
    setEmployeeData(Employee);
  }

  
  const pageTitle = "Employee Details";

  const handleEdit = (id, name, age, date) => {
    localStorage.setItem('Name', name);
    localStorage.setItem('Age', age);
    localStorage.setItem('Date', date);
    localStorage.setItem('Id', id);
  }

  const handleDelete = (id) => {
    const updatedEmployeeData = employeeData.filter((employee) => employee.id !== id);
    setEmployeeData(updatedEmployeeData);
  };

  return (
    <div className="pages">
    <div style={{ margin: '2rem' }}>
      <div style={{ border: '1px solid #ccc', padding: '20px' }}>
        <h1>{pageTitle}</h1>
        <br />
        <Link to="/Create">
          <Button>Add</Button>
        </Link>
        <br />
        <br />
        <Table striped bordered hover size="sm">
        <thead>
            <tr>
              <th className="bg-secondary text-center">Name</th>
              <th className="bg-secondary text-center">Age</th>
              <th className="bg-secondary text-center">Join Company Date</th>
              <th className="bg-secondary text-center">Operation</th>
            </tr>
          </thead>

          <tbody>
            {employeeData && employeeData.length > 0 ? (
              employeeData.map((item) => {
                return (
                  <tr key={item.id}>
                    <td style={{ textAlign: 'center' }}>{item.name}</td>
                    <td style={{ textAlign: 'center' }}>{item.age}</td>
                    <td style={{ textAlign: 'center' }}>{item.date}</td>
                    <td style={{ textAlign: 'center' }}>
                      <Link to={`/edit/`}>
                      <Button onClick={() => handleEdit(item.id, item.name, item.age, item.date)}>Edit</Button>
                      </Link>
                      &nbsp;
                      <Button onClick={() => handleDelete(item.id)}>Delete</Button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="4" style={{ textAlign: 'center' }}>
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </Table>
        
      </div>
      
  
          
        </div>
        <footer className="footer">
          &copy; {new Date().getFullYear()} Nazir Samaan
        </footer>
        </div>
  );
}

export default Employeepage;
