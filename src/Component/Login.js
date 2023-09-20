import React from 'react';
import { Link } from 'react-router-dom';


const Login = () => {
  return (
    <div className='mt-5'>
      <div className='row justify-content-center'>
        <div className='col-md-6'>
          <div className='card'>
            <div className='card-body'>
              <h1 className='card-title text-center mb-4'>Login</h1>
              <form>
                <div className='mb-3'>
                  <label htmlFor='name' className='form-label'>
                    Name:
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='name'
                  />
                </div>
                <div className='mb-3'>
                  <label htmlFor='password' className='form-label'>
                    Password:
                  </label>
                  <input
                    type='password'
                    className='form-control'
                    id='password'
                  />
                </div>


                <Link to="/Home" className="btn btn-primary" >
                  Login
                </Link>
                
                <p>
                  <br></br>
                  Already registered?{' '}
                  <Link to='/'>Haven't Registered</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
