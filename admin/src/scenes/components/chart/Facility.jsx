import React from "react";
import { Line, Pie} from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import {manufactureFactory, productLine}  from "../../data.js"
import { useState } from "react";
import "./piechar.css"
import Button from 'react-bootstrap/Button';
import { MonthAgency } from "../../data.js";
import { MonthError } from "../../data.js";
import { MonthHasProduced } from "../../data.js";
import { dataProductLine} from "../../data.js";

const facilityData = {
    labels: MonthAgency.map((data) => data.label ),
    datasets: [
    {
      label: 'Month Agency',
      data: MonthAgency.map((data) => data.quantity ),
      borderColor: "#50AF95",
      backgroundColor: "#50AF95",
    },
    {
      label: 'Month Error',
      data: MonthError.map((data) => data.quantity ),
      borderColor:"rgba(34,78,192,1)",
      backgroundColor: "rgba(34,78,192,0.5)",
    },
    {
      label: 'Month has product',
      data: MonthHasProduced.map((data) => data.quantity ),
      borderColor:"rgba(75,255,256,1)",
      backgroundColor: "rgba(75,255,256,0.5)",
    }
  ]
}
const Precious = {
    labels: [1,2,3,4],
    datasets: [
    {
      label: 'Dataset 1',
      data: [345,234,345,567],
      borderColor: "#50AF95",
      backgroundColor: "#50AF95",
    },
    {
      label: 'Dataset 2',
      data: [343,314,225,234],
      borderColor:"rgba(75,192,192,1)",
      backgroundColor: "rgba(75,192,192,0.5)",
    }
  ]
}
const Year = [
   
]

const ProductLine = {
  labels: dataProductLine.map((data) => data.productLine ),
  datasets: [
    {
    label: "sold",
    data: dataProductLine.map((data) => data.sold ),
    backgroundColor: [
    "rgba(75,192,192,1)",
    "#ecf0f1",
     "#50AF95",
    ],
    borderColor: "black",
    borderWidth: 2,
    },
    ],
  }

const LineChart = () => {
    const [userData, setUserData] = useState(facilityData)
    const [productLinedata, setProductLinedata] = useState(ProductLine)
    return (
      <div className="container">
        <div>
          <h2>Co so san xuat</h2>
        <div className="select">
        <Button onClick={() => setUserData(facilityData)} variant="secondary">Month</Button>{' '}
        <Button onClick={() => setUserData(Precious)} variant="secondary">Precious</Button>{' '}
        <Button variant="secondary">Year</Button>{' '}
        </div>
        <Line data={userData}/>
        </div>
        <div>
          <h2>Luong hang ban ra</h2>
           <div className="chart">
             <Pie data = {productLinedata} />
           </div>
        </div>
    </div>
    ) 
  }
  
  
  export default LineChart;