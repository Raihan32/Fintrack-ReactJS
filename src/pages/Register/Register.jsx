import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';
import { NavLink, } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import foto from './login.png'

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const Register = async (e) => {
    e.preventDefault();
    try {
        await axios.post('http://localhost:5000/users', {
            name: name,
            email: email,
            password: password,
            confPassword: confPassword
        });
        navigate("/login");
    } catch (error) {
        if (error.response) {
            setMsg(error.response.data.msg);
        }
    }
}
  return (
    <MDBContainer>
    <MDBRow>

      <MDBCol sm='6'>

        <div className='d-flex flex-row ps-5 pt-5 '>
          <MDBIcon fas icon="crow fa-3x me-3 v" style={{ color: '#709085' }}/>
        </div>

        <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>

          <h3 className="fw-normal mb-3 ps-5 pb-3" style={{letterSpacing: '1px'}}>Sing Up</h3>
          <form onSubmit={Register}>
          <p>{msg}</p>
          <MDBInput className='mb-4 mx-5 w-100' value={name} onChange={(e) => setName(e.target.value)} placeholder='Name'  type='text' size="lg" />
          <MDBInput className='mb-4 mx-5 w-100' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email address'  type='email' size="lg"  />
          <MDBInput className='mb-4 mx-5 w-100' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password'  type='password' size="lg"  />
          <MDBInput className='mb-4 mx-5 w-100' value={confPassword} onChange={(e) => setConfPassword(e.target.value)} placeholder='Confrim Password'  type='password' size="lg"  />
          <button type='submit'  className="btn btn-info mb-4 px-5 mx-5 w-100" color='info'>Daftar</button>
          <p className='ms-5'>Don't have an account? <NavLink to="/register" class="link-info">Register here</NavLink></p>
          </form>
        </div>

      </MDBCol>

      <MDBCol sm='6' className='d-none d-sm-block px-0'>
        <img src={foto}
          alt="Login image"  style={{objectFit: 'cover', objectPosition: 'left', height:"550px", width:"550px"}} />
      </MDBCol>

    </MDBRow>

  </MDBContainer>
  )
}

export default Register;
