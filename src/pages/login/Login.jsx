// import React from 'react'
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';

// function Login() {
//   return (
//     <Form>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Email address</Form.Label>
//         <Form.Control type="email" placeholder="Enter email" />
//         <Form.Text className="text-muted">
//           We'll never share your email with anyone else.
//         </Form.Text>
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Password</Form.Label>
//         <Form.Control type="password" placeholder="Password" />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicCheckbox">
//         <Form.Check type="checkbox" label="Check me out" />
//       </Form.Group>
//       <Button variant="primary" type="submit">
//         Submit
//       </Button>
//     </Form>
//   );
// }

// export default Login;
import React from 'react'
import './login.css'
import { Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Login = () => {
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
        <div class="mb-3">
          <input type="password" placeholder='Password' class="form-control" id="exampleInputPassword1" />
        </div>
        <NavLink to='/'>  <button type="submit" class="btn btn-primary" style={{marginTop:"20px",marginBottom:"20px", margin:"0px",padding:"20px", width:"100px"}}>Submit</button></NavLink>
        <p>Belum Punya Akun?<NavLink to='/register'> <span style={{color:"red"}}> Daftar</span></NavLink></p>
      </form>
    </div>
  </div>
</div>
    </Container>
  )
}

export default Login;



