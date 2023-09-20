import React, { useState, useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { v4 as uuid } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { EmployeeContext } from './EmployeeContext'; 

function Create() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [date, setDate] = useState('');
  const navigate = useNavigate();

  const { employeeData, setEmployeeData } = useContext(EmployeeContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const ids = uuid();
    const uniqueId = ids.slice(0, 8);

    const newEmployee = { id: uniqueId, name, age, date };

    setEmployeeData([...employeeData, newEmployee]);

    navigate('/Employeepage');
  }

  return (
    <div>
     
      <Form  style={{ margin: '4rem 10rem' }}>
         <h1 className="text-center">Add more Employee</h1>
         < br />
         <Form.Group className="mb-3" controlId="formName">
         <Form.Control type="text" placeholder="Enter Name" required onChange={(e) => setName(e.target.value)} className="form-control-lg" />
         </Form.Group>
         <Form.Group className="mb-3" controlId="formAge">
          <Form.Control type="text" placeholder="Enter Age" required onChange={(e) => setAge(e.target.value)} className="form-control-lg" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDate">
          <Form.Control type="text" placeholder="Enter Date" required onChange={(e) => setDate(e.target.value)} className="form-control-lg" />
          </Form.Group>
          <Button onClick={(e) => handleSubmit(e)} type="submit"> Create </Button>
      </Form>

      
    </div>
  );
}

export default Create;