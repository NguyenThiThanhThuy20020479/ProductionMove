import "./user.css"
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { DeleteOutline } from "@mui/icons-material";
import { userRows } from "../data";
import { Link } from "react-router-dom";
import {useState, useEffect} from 'react'
import * as React from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { themeSettings } from "./theme";
import Stack from '@mui/material/Stack';

import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from '@mui/material/Button';

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
        console.warn("dt", data)

    }, []);
  
return (
  <div className="col 2">
    <div className="tab">
    <Stack  direction="row" spacing={2}>
      <Button variant="contained" href="/account/add">Dai ly phan phoi</Button>
      <Button variant="contained" >
        Co so san xuat
      </Button>
      <Button variant="contained" href="#contained-buttons">
        Trung tam bao hanh
      </Button>
    </Stack>
    </div>
    <h2 className="tab">Danh sách tài khoản đã cấp </h2>


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













