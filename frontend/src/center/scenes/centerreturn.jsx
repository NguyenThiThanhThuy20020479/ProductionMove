import Table from "@mui/material/Table";
  import TableBody from "@mui/material/TableBody";
  import TableCell from "@mui/material/TableCell";
  import TableContainer from "@mui/material/TableContainer";
  import TableHead from "@mui/material/TableHead";
  import TableRow from "@mui/material/TableRow";
  import './layout/block.css';
  import { Form } from "react-bootstrap";
  import {Button} from "react-bootstrap";
  import Paper from "@mui/material/Paper";
import { Typography } from '@mui/material';
import { useState, useEffect } from "react";
import {Alert} from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function ServiceCenterReturn(){
    useEffect(() => {
        async function fetchData() {
            let result1 =await fetch("http://127.0.0.1:8000/api/agent/13/import1") 
            result1 =await result1.json();
            setData1(result1);
            console.log(result1);
            let result2 =await fetch("http://127.0.0.1:8000/api/products") 
            result2 =await result2.json();
            setProduct(result2);
            let result3 =await fetch("http://127.0.0.1:8000/api/admin/list/agents") 
            result3 =await result3.json();
            setBasis(result3);
        }
        fetchData();
    },[]);
    const [data1, setData1] = useState([]);
    const [product_code, setProduct_code] = useState("")
    const [amount, setAmount] = useState("")
    const [basis, setBasis] = useState([])
    const [basis_code, setBasis_code] = useState("")
    const [alert, setAlert] = useState("")
    const [product, setProduct] = useState([])
    const navigate = useNavigate();
    const id = 2;
const Submit= (e)=>{
    async function fetchData() {
        let result1 =await fetch("http://127.0.0.1:8000/api/agent/13/import1") 
        result1 =await result1.json();
        setData1(result1);
    }
    fetchData();
   
    e.preventDefault();
    let item = {product_code, amount, basis_code} 
    console.warn(item)
    fetch(`http://127.0.0.1:8000/api/basis/${id}/import`,{
        method: 'POST',
        body:JSON.stringify(item),   
        headers:{
            'Content-type':'application/json',
            'Accept':'application/json'
        }     
    }) .then(res=>{
         console.log('success');   
         setAlert(<Alert severity="success">Nhận sản phẩm thành công!</Alert>);    
    })
}
   return(
    <div>
        <div className="tab"> {alert}</div> 
            <div className='block-2'> 
            <div className="table">
            <Form method="post" onSubmit={Submit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Trung tâm bảo hành</Form.Label>
            <Form.Control type="text"
                placeholder="VIN3S Phạm Văn Đồng"
                aria-label="Disabled input example"
                disabled
                readOnly/>
            </Form.Group>
            <Form.Group className="mb-3"  >
                <Form.Label>Sản phẩm</Form.Label>
                <Form.Select aria-label="Default select example" value={product_code}  onChange={(e) => {
                    setProduct_code(e.target.value);
                    }} size="sm" >
                    {
                        product.map((item)=>(
                        <option value={item.id}>
                            {item.product_name}
                        </option>
                        ))
                    }
            </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword" >
                <Form.Label>Số lượng</Form.Label>
                <Form.Control type="number" placeholder="Quantity" value={amount} onChange={(e)=>setAmount(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3"  >
                <Form.Label>Đại lý phân phối</Form.Label>
                <Form.Select aria-label="Default select example" value={basis_code}  onChange={(e) => {
                    setBasis_code(e.target.value);
                    }} size="sm" >
                    {
                        basis.map((item)=>(
                        <option value={item.id}>
                            {item.name}
                        </option>
                        ))
                    }
            </Form.Select>
            </Form.Group>
            <Button variant="primary" type="submit">
                Xác nhận
            </Button>                      
            </Form>
            </div>
            </div>           
    </div>
   );
}