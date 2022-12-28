import "./user.css"
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { DeleteOutline } from "@mui/icons-material";
import { userRows } from "../data";
import { Link } from "react-router-dom";
import {useState, useEffect} from 'react'
import * as React from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { themeSettings } from "./theme";

import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { ListSubheader } from "@mui/material";
export default function AgentList() {
    const [data, setData] = useState([]);
    useEffect(() => {
    async function fetchData() {
        let result = await fetch("http://127.0.0.1:8000/api/admin/list/agents") 
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
    <Stack direction="row" spacing={2}>
    <ListSubheader component="div" color="inherit">DANH SACH DAI LY PHAN PHOI</ListSubheader>
    </Stack>
    </div>

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
                  <Button variant="contained">
                  Da cap
                </Button>
                }
                {row.status  == 0 &&
                  <Link  to = {{ pathname: ""+row.id}}>
                    <Button  variant="contained" color='warning'>
                      View
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







