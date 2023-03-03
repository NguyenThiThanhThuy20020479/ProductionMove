
import { Link } from "react-router-dom";
import {useState, useEffect} from 'react'
import * as React from 'react';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
export default function CenterList() {
    const [data, setData] = useState([]);
    useEffect(() => {
    async function fetchData() {
        let result = await fetch("http://127.0.0.1:8000/api/admin/list/servicecenters") 
        result = await result.json();
        console.warn("data", result);
        setData(result)
    }
        fetchData();
        console.warn("dt", data)
    }, []);
return (
  <div className="col 2">
  <Typography component="h1" align='center' variant='button'>
    Danh sách trung tâm bảo hành
  </Typography>
  <div className="table">
    <TableContainer component={Paper} >
      <Table sx={{ minWidth: 400 }} aria-label="simple table">
        <TableHead>
          <TableRow hover={true}>
            <TableCell className="tableCell" align="center">ID</TableCell>
            <TableCell className="tableCell" >Name</TableCell>
            <TableCell className="tableCell">Address</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell> 
              <TableCell className="tableCell">{row.name}</TableCell>
              <TableCell className="tableCell">{row.address}</TableCell>
              <TableCell className="tableCell">
                {row.status  == 1 &&
                  <Button variant="contained" color="success" disabled>
                  Đã cấp
                </Button>
                }
                {row.status  == 0 &&
                  <Link  style={{ textDecoration: 'none' }} to = {{ pathname: ""+row.id}}>
                    <Button size="small"  variant="contained" color='warning'>
                      Chưa cấp
                    </Button>
                  </Link>
                }
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>
  </div>
  );
}







