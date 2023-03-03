

import {useState, useEffect} from 'react'
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import '../layout/block.css';
import Stack from '@mui/material/Stack';
import './piechar.css';

import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";
import { Link } from 'react-router-dom';

export default function UserList() {
    const [data, setData] = useState([]);
    useEffect(() => {
    async function fetchData() {
        let result = await fetch("http://127.0.0.1:8000/api/admin/list/users") 
        result = await result.json();
        console.warn("data", result);
        setData(result)
    }
        fetchData();
    }, []);
  
  return (
    <div className="col 2">
      <div className="tab">
      <Stack  direction="row" spacing={2}>
        <h5>Cấp tài khoản </h5>
        <Link style={{ textDecoration: 'none' }} to={"/admin/agent/add"}>
        <Button variant="contained" >Đại lý phân phối</Button>
        </Link>
        <Link style={{ textDecoration: 'none' }} to={"/admin/basis/add"}>
        <Button variant="contained" >Cơ sở sản xuất</Button>
        </Link>
        <Link style={{ textDecoration: 'none' }} to={"/admin/center/add"}>
        <Button variant="contained">Trung tâm bảo hành</Button>
        </Link>
        
      </Stack>
      </div>
    <Typography align="center">DANH SACH TÀI KHOẢN ĐÃ CẤP</Typography>
    <div className="table">
      <TableContainer component={Paper} >
        <Table sx={{ minWidth: 400 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell">ID</TableCell>
              <TableCell className="tableCell">Name</TableCell>
              <TableCell className="tableCell">Email</TableCell>
              <TableCell className="tableCell">Role</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="tableCell">{row.id}</TableCell> 
                <TableCell className="tableCell">{row.name}</TableCell>
                <TableCell className="tableCell">{row.email}</TableCell>
                <TableCell className="tableCell">{row.role}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    </div>
    );
}













