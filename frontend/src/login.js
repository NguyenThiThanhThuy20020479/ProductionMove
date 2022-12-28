import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import  Alert  from '@mui/material/Alert';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { Form } from "react-bootstrap";
import {Button} from "react-bootstrap";
import {useNavigate} from 'react-router-dom';





export default function Login() {
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [alert, setAlert] = useState("")
const navigate = useNavigate();


  async function Submit(e){
    e.preventDefault();
    let item = {email, password}
  
    let result = await fetch("http://127.0.0.1:8000/api/login",{
        method: 'POST',
        body:JSON.stringify(item),   
        headers:{
            'Content-type':'application/json',
            'Accept':'application/json'
        }     
    }) 
    result = await result.json();
    console.log(result);

    if(result.success == true){
        navigate('/customers');
        localStorage.setItem("user-infor",result.data.name);
        // console.log(result.data.token)
    } else {
        setEmail('');
        setPassword('');
        setAlert(result.message)
        console.log(item) 
    }
}

const theme = createTheme({palette: {
    background: {
      default: "#e4f0e2"
    }
  },
 
});

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box className='table'  noValidate sx={{ mt: 1 }}>
          <div>
        {alert}
     </div>
          <Form method="post" onSubmit={Submit}>
     <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
     <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
         <Form.Text className="text-muted">
           We'll never share your email with anyone else.
         </Form.Text>
       </Form.Group>

       <Form.Group className="mb-3" controlId="formBasicPassword" >
         <Form.Label>Password</Form.Label>
         <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
      </Form.Group>
      
      <Button variant="primary" type="submit">
         Submit
       </Button>
    
     </Form>
     
          

           
          </Box>
        </Box>
      </Container>
      </ThemeProvider>
  );
}