import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import './layout/block1.css';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Paper from "@mui/material/Paper";
import { Typography } from '@mui/material';
import { useState, useEffect } from "react";
import {Alert} from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function Request(){
    useEffect(() => {
        async function fetchData() {
            let result1 =await fetch(`http://127.0.0.1:8000/api/basis/${id}/request/all`) 
            result1 =await result1.json();
            setData1(result1);
            let result =await fetch(`http://127.0.0.1:8000/api/basis/${id}/request/${request}`) 
            result =await result.json();
        }
        fetchData();
    },[]);
    const [data1, setData1] = useState([]);
    const id = 2;
    const [request, setRequest] =("");
    return (
        <div className='container'>
            <div className="block-21">
                <TableContainer component={Paper} >
                <Typography gutterBottom variant="h5" align='center' component="div" sx={{
                                color: 'success.dark',
                                fontWeight: 'bold',                               
                                fontSize: 15,
                            }}>DUYỆT YÊU CẦU NHẬP HÀNG TỪ CÁC ĐẠI LÝ</Typography>
                    <Table sx={{ minWidth: 400 }} aria-label="simple table">
                    <TableHead>
                        <TableRow hover={true}>
                        <TableCell className="tableCell" sx={{
                                color: 'warning.dark',                               
                                fontWeight: 'bold',
                                fontSize: 15,
                            }} >Đại lý phân phối</TableCell>
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
                        }} >Ngày yêu cầu</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>{
                        data1.map((data)=>(
                        <TableRow >
                            <TableCell className="tableCell">{data.agent_name}</TableCell> 
                            <TableCell className="tableCell">{data.product_name}</TableCell>
                            <TableCell className="tableCell">{data.amount}</TableCell>
                            <TableCell className="tableCell">{data.request_at}</TableCell>
                            <TableCell className="tableCell">
                {data.status  == 1 &&
                  <Button variant="contained" color="success" disabled>
                  Đã xuất
                </Button>
                }
                {data.status  == 0 &&
                  <Link  style={{ textDecoration: 'none' }}  onClick={() => 
                    setRequest(data.id)}>
                    <Button  variant="contained" color='warning'>
                      Xuất
                    </Button>
                  </Link>
                }
              </TableCell>
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