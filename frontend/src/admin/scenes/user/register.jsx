
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navigate, redirect, useParams} from 'react-router-dom'
import {useNavigate} from 'react-router-dom';
import {useState} from 'react'
import { Button } from 'react-bootstrap';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { ListSubheader } from '@mui/material';
import  { Box }from '@mui/material';

export default function Register(props) {
let {id}= useParams();
const [alert, setAlert] = useState("")

const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

  const Submit= (e)=>{
    e.preventDefault();
    let item = {email, password}
    console.warn(item)
    fetch(`http://127.0.0.1:8000/api/admin/list/agents/register/${id}`,{
        method: 'POST',
        body:JSON.stringify(item),   
        headers:{
            'Content-type':'application/json',
            'Accept':'application/json'
        }     
    }) .then(res=>{
      if(res.status == 200){
         console.log(1);  
         navigate('/customers');
      } else{
        setEmail('');
        setPassword('');
        setAlert('error')
      }
    })
}



    return (
        <div className="tab">
                <ListSubheader component="div">Cap tai khoan</ListSubheader>
                <Box>

    <div className="card p-2">

    <div className="card-body">
        <div className="row g-0 main w-80 mx-auto">
            <div className="col-lg-5 container-fluid ">
                <div className="h-100 d-flex justify-content-center align-content-center ">
                    <img src="../../img/car-editinmr9.jpeg" alt="" class = "img-fluid"/>
                </div>
            </div>
            <div className="col-lg-7 text-center py-3">
                <h2>Sign Up</h2>
                <div class="container-fluid w-95">
                    <form  class="was-validated mx-5" method="post" onSubmit={Submit}>
                       
                        <div className="form-row py-3"> 
                            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} class="inp form-control is-valid" placeholder="Email" required />
                        </div>
                        <div className="form-row py-3">
                                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}  class="inp form-control is-valid" placeholder="Password"  required/>
                        </div>
                        <div>
                        <Button variant="primary" type="submit" className='success'>
                            Submit
                        </Button>
                        
                        </div>
                        
                                            
                    </form>
                    <input value={alert} onChange={(e)=>setAlert(e.target.value)}/>

                </div>

            </div>
        </div>
    </div>
    </div>
    </Box>
</div>

    )
}





