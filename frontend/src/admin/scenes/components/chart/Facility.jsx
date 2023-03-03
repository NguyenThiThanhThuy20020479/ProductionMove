import React from "react";
import { Line} from "react-chartjs-2";import { Chart as ChartJS } from "chart.js/auto";
import { useState, useEffect } from "react";
import "./piechar.css"
import Button from 'react-bootstrap/Button';
import { PreciousAgency,PreciousError,PreciousHasProduced } from "../../data.js";
const LineChart = () => {
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
const datapro = [
  {
    id: 1,
    label: "Quý 1",
    quantity: 100,
  },
  {
    id: 2,
    label:"Quý 2",
    quantity: 70,
  },
  {
    id: 3,
    label:"Quý 3",
    quantity: 80,
  },
]
const datasold = [
  {
    id: 1,
    label: "Quý 1",
    quantity: 30,
  },
  {
    id: 2,
    label:"Quý 2",
    quantity: 50,
  },
  {
    id: 3,
    label:"Quý 3",
    quantity: 10,
  },
]
const datafault = [
  {
    id: 1,
    label: "Quý 1",
    quantity: 3,
  },
  {
    id: 2,
    label:"Quý 2",
    quantity: 4,
  },
  {
    id: 3,
    label:"Quý 3",
    quantity: 10,
  },
]

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
    return (
      <div className="container-facitily">
        <div className="product-facitily">
          
        <div className="select">
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
                    text: "Bảng thống kê số lượng theo thời gian",
                    font:{
                        size:20,
                        
                    }
                    }
                }
                }}/>
        </div>
        
        </div>
    
    ) 
  }
  export default LineChart;