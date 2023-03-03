  
  import Table from "@mui/material/Table";
  import TableBody from "@mui/material/TableBody";
  import TableCell from "@mui/material/TableCell";
  import TableContainer from "@mui/material/TableContainer";
  import TableHead from "@mui/material/TableHead";
  import TableRow from "@mui/material/TableRow";
  import './layout/block2.css';
  import { Form } from "react-bootstrap";
  import {Button} from "react-bootstrap";
  import Paper from "@mui/material/Paper";
import { Typography } from '@mui/material';
import { useState, useEffect } from "react";
import {Alert} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { PolarArea } from "react-chartjs-2";

export default function Fault(){
    const [data1,setData1]= useState([]);
    const [data2,setData2]= useState([]);
    const [data3,setData3]= useState([]);




// --------------------------- thống kê lượng hàng lỗi theo dòng sản phẩm-------------------
const productline = {
  labels: data1.map((data) => data.productline_name ),
  datasets: [
    {
    label: "sản phẩm",
    data: data1.map((data) => data.amount),
    backgroundColor: [
      'rgb(42, 122, 5, 0.3)',
      'rgb(186, 6, 66 , 0.3)',
      'rgb(5, 60, 122,0.3)',
      'rgb(240,128,128)',
      'rgb(255,165,0)'
    ],
    borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
    borderWidth: 0.9,
    },
    ],
}



// ---------------------  lượng hàng lỗi theo cơ sở sản xuất-------------
const basis = {
  labels: data3.map((data) => data.product_name ),
  datasets: [{
    label: 'sản phẩm',
    data: data3.map((data) => data.amount),
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],
    borderWidth: 1
  },
],

}
// --------------------------lượng hàng lỗi theo đại lý phân phối-------------------
const agent = {
  labels: data2.map((data) => data.agent ),
  datasets: [{
    label: 'sản phẩm',
    data: data2.map((data) => data.amount ),
    backgroundColor: [
      'rgba(25, 199, 132, 0.2)',
      'rgba(25, 159, 164, 0.2)',
      'rgba(125, 125, 126, 0.2)',
      'rgba(75, 234, 193, 0.2)',
      'rgba(14, 162, 25, 0.2)',
      'rgba(153, 122, 255, 0.2)'
    ],
    borderColor: [
      'rgb(25, 199, 132)',
      'rgb(25, 159, 164)',
      'rgb(125, 125, 126)',
      'rgb(75, 234, 193)',
      'rgb(14, 162, 25)',
      'rgb(153, 122, 255)'
    ],
    borderWidth: 1,
  },
],
}

  useEffect(() => {
    async function fetchData() {
        let result1 =await fetch("http://127.0.0.1:8000/api/basis/2/return/productline") 
        result1 =await result1.json();
        let result2 =await fetch("http://127.0.0.1:8000/api/basis/2/return/agent") 
        result2 =await result2.json();
        let result3 =await fetch("http://127.0.0.1:8000/api/basis/2/return/basis") 
        result3 =await result3.json();
        setData1(result1);
        setData2(result2);
        setData3(result3);
    }
    fetchData();
},[]);

    return (
        <div className='container'>
           
            <div className="block-22">
                
              
            <PolarArea data={productline}  options={{
          plugins: {
          title: {
              display: true,
              align: 'center',
              position: 'bottom',
              text: "Tỉ lệ hàng lỗi theo dòng sản phẩm",
              font:{
                  size:15
              }
              }
          }
          }} />
            <PolarArea data={agent}  options={{
          plugins: {
          title: {
              display: true,
              align: 'center',
              position: 'top',
              text: "Tỉ lệ hàng lỗi theo đại lý phân phối",
              font:{
                  size:15
              }
              }
          }
          }}/>
            <PolarArea data={basis}  options={{
          plugins: {
          title: {
              display: true,
              align: 'center',
              position: 'bottom',
              text: "Tỉ lệ hàng lỗi theo cơ sở Bình Dương",
              font:{
                  size:15
              }
              }
          }
          }}/>

            </div>
            
            
         
           
        
      
       
        </div>
    )

}