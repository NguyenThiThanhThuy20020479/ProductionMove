import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Paper from "@mui/material/Paper";
import { Typography } from '@mui/material';
import { useState, useEffect } from "react";
import {Alert} from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function CenterRequest(){
    useEffect(() => {
        async function fetchData() {
            let result1 =await fetch(`http://127.0.0.1:8000/api/basis/4/request/all`) 
            result1 =await result1.json();
            setData1(result1);
            let result2 =await fetch(`http://127.0.0.1:8000/api/agent/fake`) 
            result2 =await result2.json();
            setRequest(result2);
            let result3 =await fetch(`http://127.0.0.1:8000/api/agent/fake1`) 
            result3 =await result3.json();
            setData(result3);
        }
        fetchData();
    },[]);
    const [data1, setData1] = useState([]);
   const [data, setData] = useState([])
    const [request, setRequest] =useState([]);
    return (
        <div className='tab'>
            <div className="tab">
                <TableContainer component={Paper} >
                <Typography gutterBottom variant="h5" align='center' component="div" sx={{
                                color: 'success.dark',
                                fontWeight: 'bold',                               
                                fontSize: 15,
                            }}>SỐ LƯỢNG HÀNG ĐÃ BÁN RA</Typography>
                    <Table sx={{ minWidth: 400 }} aria-label="simple table">
                    <TableHead>
                        <TableRow hover={true}>
                        <TableCell className="tableCell" sx={{
                                color: 'warning.dark',                               
                                fontWeight: 'bold',
                                fontSize: 15,
                            }} >Cơ sở sản xuất</TableCell>
                        <TableCell className="tableCell" 
                        sx={{
                            color: 'warning.dark',                            
                            fontWeight: 'bold',
                            fontSize: 15,
                        }} >Tên sản phẩm</TableCell>
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
                        }} >Ngày xuất xưởng</TableCell>
                         <TableCell className="tableCell"
                        sx={{
                            color: 'warning.dark',                         
                            fontWeight: 'bold',
                            fontSize: 15,
                        }} >Tổng số lần đã bảo hành</TableCell>
                        
                        </TableRow>
                        
                    </TableHead>
                    <TableBody>{
                        data1.map((data)=>(
                        <TableRow >
                            <TableCell className="tableCell">{data.agent_name}</TableCell> 
                            <TableCell className="tableCell">{data.product_name}</TableCell>
                            <TableCell className="tableCell">{data.amount}</TableCell>
                            <TableCell className="tableCell">{data.request_at}</TableCell>
                            <TableCell className="tableCell">{data.id}</TableCell>
                           
                            
                        </TableRow>
                        ))
                        }
                    </TableBody>
                    </Table>





                </TableContainer>




           </div>   

           <div className="tab">
                <TableContainer component={Paper} >
                <Typography gutterBottom variant="h5" align='center' component="div" sx={{
                                color: 'success.dark',
                                fontWeight: 'bold',                               
                                fontSize: 15,
                            }}>SỐ LƯỢNG HÀNG ĐỔI CHO KHÁCH HÀNG</Typography>
                    <Table sx={{ minWidth: 400 }} aria-label="simple table">
                    <TableHead>
                        <TableRow hover={true}>
                        
                        <TableCell className="tableCell" 
                        sx={{
                            color: 'warning.dark',                            
                            fontWeight: 'bold',
                            fontSize: 15,
                        }} >Tên sản phẩm</TableCell>
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
                        }} >Ngày xuất kho</TableCell>
                         
                        </TableRow>
                        
                    </TableHead>
                    <TableBody>{
                        request.map((data)=>(
                        <TableRow >
                            
                            <TableCell className="tableCell">{data.product_name}</TableCell>
                            <TableCell className="tableCell">1</TableCell>
                            <TableCell className="tableCell">{data.request_date}</TableCell>
                           
                           
                            
                        </TableRow>
                        ))
                        }
                    </TableBody>
                    </Table>
                </TableContainer>
           </div>  

           <div className="tab">
                <TableContainer component={Paper} >
                <Typography gutterBottom variant="h5" align='center' component="div" sx={{
                                color: 'success.dark',
                                fontWeight: 'bold',                               
                                fontSize: 15,
                            }}>SỐ LƯỢNG HÀNG BẢO HÀNH</Typography>
                    <Table sx={{ minWidth: 400 }} aria-label="simple table">
                    <TableHead>
                        <TableRow hover={true}>
                        
                        <TableCell className="tableCell" 
                        sx={{
                            color: 'warning.dark',                            
                            fontWeight: 'bold',
                            fontSize: 15,
                        }} >Tên sản phẩm</TableCell>
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
                        }} >Trạng thái</TableCell>
                         <TableCell className="tableCell"
                        sx={{
                            color: 'warning.dark',                         
                            fontWeight: 'bold',
                            fontSize: 15,
                        }} >Số lần</TableCell>
                        <TableCell className="tableCell"
                        sx={{
                            color: 'warning.dark',                         
                            fontWeight: 'bold',
                            fontSize: 15,
                        }} >Ngày xuất kho</TableCell>
                        
                        </TableRow>
                        
                    </TableHead>
                    <TableBody>{
                        data.map((data)=>(
                        <TableRow >
                            
                            <TableCell className="tableCell">{data.product_name}</TableCell>
                            <TableCell className="tableCell">1</TableCell>
                            {data.status == 1 &&  <TableCell className="tableCell">Đang bảo hành</TableCell>}
                            {data.status == 0 &&  <TableCell className="tableCell">Không bảo hành được</TableCell>}
                            {data.status == 2 &&  <TableCell className="tableCell">Đã xong</TableCell>}
                           
                            <TableCell className="tableCell">{data.status}</TableCell>
                            <TableCell className="tableCell">{data.request_date}</TableCell>
                           
                            
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