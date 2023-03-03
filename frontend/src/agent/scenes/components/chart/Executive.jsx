import React from "react";
import { Doughnut, Bar } from "react-chartjs-2";
import "./piechar.css"
import 'bootstrap/dist/css/bootstrap.min.css';

// --------------------------- thống cơ cơ sở sản xuất,ttbh,đại lý--------------------
const StatisticalFacility = {
  labels: dataStatisticalFacility.map((data) => data.label ),
  datasets: [
    {
    label: "Users Gained",
    data: dataStatisticalFacility.map((data) => data.quantity ),
    backgroundColor: [
      'rgb(42, 122, 5, 0.3)',
      'rgb(186, 6, 66 , 0.3)',
      'rgb(5, 60, 122,0.3)',
    ],
    borderColor: "black",
    borderWidth: 2,
    },
    ],
}

const StatisticalDistribution = {
  labels: dataStatisticalDistribution.map((data) => data.label ),
  datasets: [
    {
    label: "Users Gained",
    data: dataStatisticalDistribution.map((data) => data.quantity ),
    backgroundColor: [
      'rgb(42, 122, 5, 0.3)',
      'rgb(186, 6, 66 , 0.3)',
      'rgb(5, 60, 122,0.3)',
    ],
    borderColor: "black",
    borderWidth: 2,
    },
    ],
}

const StatisticalMaintenance = {
  labels: dataStatisticalMaintenance.map((data) => data.label ),
  datasets: [
    {
    label: "Users Gained",
    data: dataStatisticalMaintenance.map((data) => data.quantity ),
    backgroundColor: [
      'rgb(42, 122, 5, 0.3)',
      'rgb(186, 6, 66 , 0.3)',
      'rgb(5, 60, 122,0.3)',
    ],
    borderColor: "black",
    borderWidth: 2,
    },
    ],
}

// ---------------------  lượng hàng đã sản xuất: tên, số lượng-------------
const statisticalHasProduced = {
  labels: dataHasProduced.map((data) => data.product ),
  datasets: [{
    label: 'Statistical Has Produced',
    data: dataHasProduced.map((data) => data.quantity ),
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
// --------------------------theo trạng thái của từng(hoặc tất cả) sản phẩm-------------------
const statistical = {
  labels: dataStatistical.map((data) => data.label ),
  datasets: [{
    label: 'Statistical Has Produced',
    data: dataStatistical.map((data) => data.quantity ),
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

const PieChart = () => {
  return (
    <div className="excution">
      <div className="statistical">
      <div className="hasProduced">
        <h5 className="text-center">Thống kê lượng hàng đã sản xuất</h5>
        <Bar data={statisticalHasProduced}
        />
        </div>     

      <div className="hasProduced ">
      <h5 className="text-center">Thống kê lượng hàng </h5>
        <Bar data={statistical}/>
        </div>
        </div>
    <div className="pie-chart ">   
      <div className="chart chart-facitily">
        <h5 className="text-center" >Cơ sở sản xuất</h5>
        <Doughnut data={StatisticalFacility} />
      </div>
      <div className="chart">
      <h5 className="text-center">trung tâm bảo hành </h5>
        <Doughnut data={StatisticalMaintenance} />
      </div>
      <div className="chart">
      <h5 className="text-center"> đại lý phân phối </h5>
        <Doughnut data={StatisticalDistribution} />
      </div>
    </div>  
  </div>
   ) 
 }
 export default PieChart;