import React from "react";
import { Doughnut, Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import {dataHasProduced,dataStatistical}  from "../data.js"
import {dataStatisticalDistribution,dataStatisticalFacility,dataStatisticalMaintenance}  from "../data.js"
import "./piechar.css"
import 'bootstrap/dist/css/bootstrap.min.css';

import {useState, useEffect} from 'react';


const Report = () => {
  const [data1,setData1]= useState([]);
  const [data2,setData2]= useState([]);
  const [data3,setData3]= useState([]);




// --------------------------- thống kê lượng hàng lỗi-------------------
const StatisticalDistribution = {
  labels: data1.map((data) => data.product_name ),
  datasets: [
    {
    label: "Users Gained",
    data: data1.map((data) => data.amount),
    backgroundColor: [
      'rgb(42, 122, 5, 0.3)',
      'rgb(186, 6, 66 , 0.3)',
      'rgb(5, 60, 122,0.3)',
      'rgb(240,128,128)',
      'rgb(255,165,0)'
    ],
    borderColor: "black",
    borderWidth: 2,
    },
    ],
}



// ---------------------  lượng hàng đã sản xuất-------------
const statisticalHasProduced = {
  labels: data3.map((data) => data.product_name ),
  datasets: [{
    label: 'Statistical Has Produced',
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
// --------------------------lượng hàng xuất cho đại lý-------------------
const statistical = {
  labels: data2.map((data) => data.product_name ),
  datasets: [{
    label: 'Statistical Has Produced',
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
        let result1 =await fetch("http://127.0.0.1:8000/api/basis/2/statistic/return") 
        result1 =await result1.json();
        let result2 =await fetch("http://127.0.0.1:8000/api/basis/2/statistic/export") 
        result2 =await result2.json();
        let result3 =await fetch("http://127.0.0.1:8000/api/basis/2/statistic/produce") 
        result3 =await result3.json();
        setData1(result1);
        setData2(result2);
        setData3(result3);
    }
    fetchData();
},[]);
  
  return (
    <div className="excution">
      <div className="statistical">
      <div className="hasProduced">
        <Bar data={statisticalHasProduced}
        options={{
          plugins: {
          title: {
              display: true,
              align: 'center',
              position: 'top',
              text: "Biểu thống kê số lượng đã sản xuất",
              font:{
                  size:15
              }
              }
          }
          }}
        />
        </div>     

      <div className="hasProduced ">
        <Bar data={statistical}
        options={{
          plugins: {
          title: {
              display: true,
              align: 'center',
              position: 'top',
              text: "Biểu đồ thống kê số lượng đã phân phối",
              font:{
                  size:15
              }
              }
          }
          }}/>
        </div>
        </div>
    <div className="pie-chart ">   
     
      
      <div className="chart">
        <Doughnut data={StatisticalDistribution}
        options={{
          plugins: {
          title: {
              display: true,
              align: 'center',
              position: 'top',
              text: "Biểu đồ thống kê số lượng hàng lỗi",
              font:{
                  size:20
              }
              }
          }
          }} />
      </div>
    </div>  
  </div>
   ) 
 }
 export default Report;