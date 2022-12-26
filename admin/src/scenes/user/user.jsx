import "./user.css"
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { DeleteOutline } from "@mui/icons-material";
import { userRows } from "../data";
import { useState,useEffect } from "react";
import * as React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import useModal from './useModal';
// import AddEmployee from "./create";
import { Link, useNavigate } from "react-router-dom";
export default function UserList() {
  const [data, setData] = useState(userRows);
  
  const navigate = useNavigate();

    // const LoadDetail = (id) => {
    //     navigate("/detail/" + id);
    // }
    const LoadEdit = (id) => {
        navigate("/edit/" + id);
    }
  useEffect(() => {
    fetch("http://localhost:8000/employee").then((res) => {
        return res.json();
    }).then((resp) => {
        setData(resp);
    }).catch((err) => {
        console.log(err.message);
    })
}, [])

  const handleDelete = (id) => {
    // setData(data.filter((item) => item.id !== id));
    if (window.confirm('Do you want to remove?')) {
        fetch("http://localhost:8000/employee/" + id, {
            method: "DELETE"
        }).then((res) => {
            alert('Removed successfully.')
            window.location.reload();
        }).catch((err) => {
            console.log(err.message)
        })
    }
  };
  const pageSize = 8;
  const columns = [
    { with:40},
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
        field: "role",
        headerName: "Role",
        width: 200,
      },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    
    {
      field: "action",
      headerName: "Action",
      width: 120,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="containerInfo">
    <h1 className="text-center my-10">EMPLOYEE MANAGER</h1>
    <div className="btn" >
    <Link to="/customers/create">
    <Button variant="primary" > + Add a new employee </Button>{' '}
    </Link>
        {/* <AddEmployee 
            isShowing={isShowing}
            hide={toggle}
        /> */}
    </div>

    <div className="userList">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize= {pageSize}
      />
    </div>
    </div>
  );
}