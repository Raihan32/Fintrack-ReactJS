import React from 'react';
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
  return (
    <MDBContainer>
    <MDBRow>

      <MDBCol sm='6'>

        <div className='d-flex flex-row ps-5 pt-5 '>
          <MDBIcon fas icon="crow fa-3x me-3 v" style={{ color: '#709085' }}/>
        </div>

        <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>

          <h3 className="fw-normal mb-3 ps-5 pb-3" style={{letterSpacing: '1px'}}>Sing Up</h3>
          <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Name' id='formControlLg' type='text' size="lg"/>
          <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Email address' id='formControlLg' type='email' size="lg"/>
          <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Password' id='formControlLg' type='password' size="lg"/>

          <NavLink to="/"><Button className="mb-4 px-5 mx-5 w-100" color='info'>Daftar</Button></NavLink>
          <p className='ms-5'>Don't have an account? <NavLink to="/register" class="link-info">Register here</NavLink></p>

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
