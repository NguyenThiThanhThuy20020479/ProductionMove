  
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
export default function Import(){
    useEffect(() => {
        async function fetchData() {
            let result1 =await fetch("http://127.0.0.1:8000/api/basis/2/import/all") 
            result1 =await result1.json();
            setData1(result1);
            console.log(result1);
            let result2 =await fetch("http://127.0.0.1:8000/api/products") 
            result2 =await result2.json();
            setProduct(result2);
        }
        fetchData();
    },[]);
    const [data1, setData1] = useState([]);
    const [product_code, setProduct_code] = useState("")
    const [amount, setAmount] = useState("")
    const [date, setDate] = useState("")
    const [alert, setAlert] = useState("")
    const [product, setProduct] = useState([])
    const navigate = useNavigate();
    const id = 2;
    const Submit= (e)=>{
    async function fetchData() {
        let result1 =await fetch("http://127.0.0.1:8000/api/basis/2/import/all") 
        result1 =await result1.json();
        setData1(result1);
    }
    fetchData();
    e.preventDefault();
    let item = {product_code, amount, date} 
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
         setAlert(<Alert severity="success">Nhập hàng vào kho thành công!</Alert>);      
    })
}
    return (
        <div className='container'>  
            <Typography gutterBottom variant="h5" align='center' component="div" sx={{
                color: 'warning.dark',
                display: 'inline',
                fontWeight: 'bold',
                
                mx: 0.5,
                fontSize: 15,
            }}>NHẬP SẢN PHẨM MỚI SẢN XUẤT VÀO KHO
            </Typography>
            <div className='tab'>
            {alert}
            <Form method="post" onSubmit={Submit}>
                <div className="block-1">
                <div className="block-1-1">
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Cơ sở sản xuất</Form.Label>
            <Form.Control type="text"
                placeholder="Cơ sở Bình Dương"
                aria-label="Disabled input example"
                disabled
                readOnly/>
            </Form.Group>
            <Form.Group className="mb-3"  >
                <Form.Label>Tên sản phẩm</Form.Label>
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
            </div>
            <div className="block-1-1">
            
            <Form.Group className="mb-3" controlId="formBasicPassword" >
                <Form.Label>Số lượng</Form.Label>
                <Form.Control type="number" placeholder="Quantity" value={amount} onChange={(e)=>setAmount(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword" >
                <Form.Label>Ngày nhập</Form.Label>
                <Form.Control type="date" placeholder="Date" value={date} onChange={(e)=>setDate(e.target.value)}/>
            </Form.Group>         
            </div>           
            </div>
            <div className="block-1">
            <Button variant="primary" type="submit">
                Xác nhận
            </Button>
            </div>           
            </Form>          
            </div>
            <div className="block-2">
                <TableContainer component={Paper} >
                <Typography gutterBottom variant="h5" align='center' component="div" sx={{
                                color: 'success.dark',
                                
                                fontWeight: 'bold', 
                               
                                fontSize: 15,
                            }}>Lịch sử nhập hàng cơ sở Bình Dương</Typography>
                    <Table sx={{ minWidth: 400 }} aria-label="simple table">
                    <TableHead>
                        <TableRow hover={true}>
                        <TableCell className="tableCell" sx={{
                                color: 'warning.dark',
                                
                                fontWeight: 'bold',
                                fontSize: 15,
                            }} >Tên sản phẩm</TableCell>
                        <TableCell className="tableCell" 
                        sx={{
                            color: 'warning.dark',
                            
                            fontWeight: 'bold',
                            fontSize: 15,
                        }} >Tên dòng sản phẩm</TableCell>
                        <TableCell className="tableCell"
                        sx={{
                            color: 'warning.dark',
                            
                            fontWeight: 'bold',
                            fontSize: 15,
                        }} >Số lượng</TableCell>
                        <TableCell className="tableCell"
                        sx={{
                            color: 'warning.dark',
                          
                            fontWeight: 'bold',
                            fontSize: 15,
                        }} >Ngày nhập</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>{
                        data1.map((data)=>(
                        
                        <TableRow >
                            <TableCell className="tableCell">{data.product_name}</TableCell> 
                            <TableCell className="tableCell">{data.productline_name}</TableCell>
                            <TableCell className="tableCell">{data.amount}</TableCell>
                            <TableCell className="tableCell">{data.import_date}</TableCell>
                        </TableRow>
                        ))
                        }
                    </TableBody>
                    </Table>
                </TableContainer>
           </div>  
    </div>
    )

}