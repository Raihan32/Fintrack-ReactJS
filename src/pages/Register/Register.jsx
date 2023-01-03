import React from 'react'
import './register.css'
import { NavLink } from 'react-router-dom'
import { Container } from 'react-bootstrap'

const Register = () => {
  return (
    <Container>
    <div className='login'>
  <div className='formlogin'>
    <div className='fotologin'>
    </div>
    <div className='formlog'>
    
      <form style={{marginTop:"90px"}}>
        <div class="mb-4">
          <input type="text" placeholder='Username' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div class="mb-4">
          <input type="email" placeholder='E-mail' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div class="mb-3">
          <input type="password" placeholder='Password' class="form-control" id="exampleInputPassword1" />
        </div>
        <NavLink to='/login'>  <button type="submit" class="btn btn-primary" style={{marginTop:"20px",marginBottom:"20px", margin:"0px",padding:"20px", width:"100px"}}>Submit</button></NavLink>
        <p>Belum Punya Akun?<NavLink to='/register'> <span style={{color:"red"}}> Daftar</span></NavLink></p>
      </form>
    </div>
  </div>
</div>
    </Container>
  )
}

export default Register;
