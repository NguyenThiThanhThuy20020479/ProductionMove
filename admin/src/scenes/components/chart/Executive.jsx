

import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import {manufactureFactory}  from "../../data.js"
import { useState } from "react";
import "./piechar.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const Mydata = {
  labels: manufactureFactory.map((data) => data.label ),
  datasets: [
    {
    label: "Users Gained",
    data: manufactureFactory.map((data) => data.quantity ),
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


const PieChart = () => {
  const [userData, setUserData] = useState(Mydata)
  return (
    <div className="thongke">
      <div>bang thong ke so luowng</div>
    <div className="pie-chart ">   
      <div className="chart">
        <h2 text-center >Cơ sở sản xuất</h2>
        <Doughnut data={userData} />
      </div>
      <div className="chart">
      <h2 text-center >Cơ sở sản xuất</h2>
        <Doughnut data={userData} />
      </div>
      <div className="chart">
      <h2 text-center >Cơ sở sản xuất</h2>
        <Doughnut data={userData} />
      </div>
    </div>  
  </div>
  ) 
}


export default PieChart;