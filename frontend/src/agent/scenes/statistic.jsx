  
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
import { Line } from "react-chartjs-2";

export default function AgentStatistic1(){
  useEffect(() => {
    async function fetchData() {
        let result1 =await fetch("http://127.0.0.1:8000/api/admin/statistictime/produce/month") 
        result1 =await result1.json();
        let result2 =await fetch("http://127.0.0.1:8000/api/admin/statistictime/sold/month") 
        result2 =await result2.json();
        let result3 =await fetch("http://127.0.0.1:8000/api/admin/statistictime/fault/month") 
        result3 =await result3.json();
        setData1(result1);
        setData2(result2);
        setData3(result3);
        let result4=await fetch("http://127.0.0.1:8000/api/admin/statistictime/produce/year") 
        result4 =await result4.json();
        let result5 =await fetch("http://127.0.0.1:8000/api/admin/statistictime/sold/year") 
        result5 =await result5.json();
        let result6 =await fetch("http://127.0.0.1:8000/api/admin/statistictime/fault/year") 
        result6 =await result6.json();
        setData4(result4);
        setData5(result5);
        setData6(result6); 
    }
    fetchData();
},[]);
const [data1, setData1] = useState([]);
const [data2, setData2] = useState([])
const [data3, setData3] = useState([])
const [data4, setData4] = useState([])
const [data5, setData5] = useState([])
const [data6, setData6] = useState([])

// ---------------------------xem thống kê và báo cáo  theo trạng thái và theo tháng, quý, năm--------------
const month = {
    labels: data1.map((data) => data.month ),
    datasets: [
    {
      label: 'Sản xuất',
      data: data1.map((data) => data.amount ),
      borderColor: "RGBA( 148, 0, 211, 0.5 )",
      backgroundColor: "RGBA( 148, 0, 211, 0.5 )",
    },
    {
      label: 'Bán ra',
      data: data2.map((data) => data.amount ),
      borderColor:"RGBA( 255, 140, 0, 0.5 )",
      backgroundColor: "RGBA( 255, 140, 0, 0.5 ))",
    },
    {
      label: 'Lỗi',
      data: data3.map((data) => data.amount ),
      borderColor:"RGBA( 255, 215, 0, 0.5 )",
      backgroundColor: "RGBA( 255, 215, 0, 0.5 ))",
    }
  ]
}

const Precious = {
    labels: datapro.map((data) => data.label ),
    datasets: [
    {
      label: 'Sản xuất',
      data: datapro.map((data) => data.quantity ),
      borderColor: "RGBA( 255, 215, 0, 0.5 )",
      backgroundColor: "RGBA( 255, 215, 0, 0.5 )",
    },
    {
      label: 'Bán ra',
      data: datasold.map((data) => data.quantity ),
      backgroundColor:"RGBA( 255, 215, 0, 0.5 )",
      borderColor: "RGBA( 255, 215, 0, 0.5 ))",
    },
    {
      label: 'Lỗi',
      data: datafault.map((data) => data.quantity ),
      borderColor:"rgba(75,192,192,1)",
      backgroundColor: "rgba(75,192,192,0.5)",
    }
  ]
}

const Year = {
  labels: data4.map((data) => data.year ),
  datasets: [
  {    label: 'Sản xuất',
    data: data4.map((data) => data.amount ),
    borderColor: "RGBA( 255, 215, 0, 0.5 )",
    backgroundColor: "RGBA( 255, 215, 0, 0.5 )",
  },
  {
    label: 'Bán ra',
    data: data5.map((data) => data.amount ),
     borderColor:"rgba(75,192,192,1)",
      backgroundColor: "rgba(75,192,192,0.5)",
  },
  {
    label: 'Lỗi',
    data: data6.map((data) => data.amount ),
    borderColor: "RGBA( 148, 0, 211, 0.5 )",
    backgroundColor: "RGBA( 148, 0, 211, 0.5 )",
  }
]
}

     const [facilitydata, setFacilityData] = useState(month)
    const [data7,setData7]= useState([]);
    const [data8,setData8]= useState([]);
    const [data9,setData9]= useState([]);




// --------------------------- thống kê lượng hàng lỗi theo dòng sản phẩm-------------------
const productline = {
  labels: data7.map((data) => data.product_name ),
  datasets: [
    {
    label: "sản phẩm",
    data: data7.map((data) => data.amount),
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



// ---------------------  lượng hàng lỗi-------------
const basis = {
  labels: data7.map((data) => data.product_name ),
  datasets: [{
    label: 'sản phẩm',
    data: data8.map((data) => data.amount),
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
// --------------------------lượng hàng lỗi theo đại lý phân phối-------------------
const agent = {
  labels: data7.map((data) => data.product_name ),
  datasets: [{
    label: 'sản phẩm',
    data: data9.map((data) => data.amount ),
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

  useEffect(() => {
    async function fetchData() {
        let result7 =await fetch("http://127.0.0.1:8000/api/admin/agent/import/13") 
        result7 =await result7.json();
        let result8 =await fetch("http://127.0.0.1:8000/api/admin/agent/export/3") 
        result8 =await result8.json();
        let result9 =await fetch("http://127.0.0.1:8000/api/admin/agent/fault/13") 
        result9 =await result9.json();
        setData7(result7);
        setData8(result8);
        setData9(result9);
    }
    fetchData();
},[]);

    return (
        <div className='container'>
                  

            <div className="block-123">
            
      
       
        <div className="block-123-1">
        <div >
        <Button onClick={() => setFacilityData(month)} variant="secondary">Theo tháng</Button>{' '}
        <Button onClick={() => setFacilityData(Precious)} variant="secondary">Theo quý</Button>{' '}
        <Button onClick={() => setFacilityData(Year)} variant="secondary">Theo năm</Button>{' '}
        </div>
        
        <Line data={facilitydata} options={{
                plugins: {
                title: {
                    display: true,
                    align: 'center',
                    position: 'bottom',
                    text: "Bảng thống kê số lượng theo thời gian và theo trạng thái",
                    font:{
                        size:20,
                        
                    }
                    }
                }
                }}/>
                </div>
        </div>
        
        
    
                
            
         
            <div className="block-22">

            <PolarArea data={productline}  options={{
          plugins: {
          title: {
              display: true,
              align: 'center',
              position: 'bottom',
              text: "Lượng hàng nhập về",
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
              position: 'bottom',
              text: "Lượng hàng lỗi",
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
              text: "Lượng hàng bán được",
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
              text: "Lượng hàng lỗi",
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