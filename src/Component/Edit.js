import React, { useState, useContext, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { EmployeeContext } from './EmployeeContext'; 

function Edit() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [date, setDate] = useState('');
  const [id, setId] = useState('');

  const navigate = useNavigate();

  const { employeeData, setEmployeeData } = useContext(EmployeeContext);

  useEffect(() => {
    setName(localStorage.getItem('Name'));
    setAge(localStorage.getItem('Age'));
    setDate(localStorage.getItem('Date'));
    setId(localStorage.getItem('Id'));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedEmployeeData = employeeData.map((employee) => {
      if (employee.id === id) {
        return {
          ...employee,
          name: name,
          age: age,
          date: date,
        };
      }
      return employee;
    });

    setEmployeeData(updatedEmployeeData);

    navigate('/Employeepage');
  };

  return (
    <div>
      <Form style={{ margin: '4rem 10rem' }}>
        <h1 className="text-center">Update Employee</h1>
        <br />
        <Form.Group className="mb-3" controlId="formName">
          <Form.Control
            type="text"
            placeholder="Enter Name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
            className="form-control-lg"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAge">
          <Form.Control
            type="text"
            placeholder="Enter Age"
            value={age}
            required
            onChange={(e) => setAge(e.target.value)}
            className="form-control-lg"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDate">
          <Form.Control
            type="text"
            placeholder="Enter Date"
            value={date}
            required
            onChange={(e) => setDate(e.target.value)}
            className="form-control-lg"
          />
        </Form.Group>
        <Button onClick={(e) => handleSubmit(e)} type="Update">
          Update
        </Button>
      </Form>
    </div>
  );
}

export default Edit;
