import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import {useState, useEffect} from 'react'
import Stack from '@mui/material/Stack';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import './product.scss';
const Products= () => {
    const [data, setData] = useState([]);
    useEffect(() => {
    async function fetchData() {
        let result = await fetch("http://127.0.0.1:8000/api/admin/list/productlines") 
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
    
    </div>

  <div className="table">
    <TableContainer component={Paper} >
      <Table sx={{ minWidth: 400 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">ID</TableCell>
            <TableCell className="tableCell">Name</TableCell>
            <TableCell className="tableCell">Feature</TableCell>
            <TableCell className="tableCell"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell> 
              <TableCell className="tableCell">{row.productline}</TableCell>
              <TableCell className="tableCell">{row.decription1}</TableCell>
              <TableCell className="tableCell">
                    <Stack direction="row" spacing={2}>
                    <Link  to = {{ pathname: ""+row.id}}>
                        <Button  variant="contained" color='warning'>
                        View
                        </Button>
                    </Link>
                    <Button variant="contained" size = 'small'>
                        Product
                    </Button>
                </Stack>

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
export default Products



