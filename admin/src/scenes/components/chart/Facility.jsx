import React from "react";
import { Line, Pie, Bar} from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { useState } from "react";
import "./piechar.css"
import Button from 'react-bootstrap/Button';
import {dataHasProduced}  from "../../data.js"
import { MonthAgency,MonthError,MonthHasProduced } from "../../data.js";
import { PreciousAgency,PreciousError,PreciousHasProduced } from "../../data.js";
import { YearAgency,YearError,YearHasProduced } from "../../data.js";
import { MonthProductLine,PreciousProductLine,YearProductLine} from "../../data.js";
import { MonthProduct,PreciousProduct,YearProduct} from "../../data.js";
import { dataErrorFacility,dataErrorAgency,dataErrorProductLine} from "../../data.js";


// ---------------------------xem thống kê và báo cáo  theo trạng thái và theo tháng, quý, năm--------------
const facilityData = {
    labels: MonthAgency.map((data) => data.label ),
    datasets: [
    {
      label: 'Month Agency',
      data: MonthAgency.map((data) => data.quantity ),
      borderColor: "RGBA( 148, 0, 211, 0.5 )",
      backgroundColor: "RGBA( 148, 0, 211, 0.5 )",
    },
    {
      label: 'Month Error',
      data: MonthError.map((data) => data.quantity ),
      borderColor:"RGBA( 255, 140, 0, 0.5 )",
      backgroundColor: "RGBA( 255, 140, 0, 0.5 ))",
    },
    {
      label: 'Month has product',
      data: MonthHasProduced.map((data) => data.quantity ),
      borderColor:"RGBA( 255, 215, 0, 0.5 )",
      backgroundColor: "RGBA( 255, 215, 0, 0.5 ))",
    }
  ]
}

const Precious = {
    labels: PreciousAgency.map((data) => data.label ),
    datasets: [
    {
      label: 'Agency',
      data: PreciousAgency.map((data) => data.quantity ),
      borderColor: "RGBA( 255, 215, 0, 0.5 )",
      backgroundColor: "RGBA( 255, 215, 0, 0.5 )",
    },
    {
      label: 'Error',
      data: PreciousError.map((data) => data.quantity ),
      borderColor:"rgba(75,192,192,1)",
      backgroundColor: "rgba(75,192,192,0.5)",
    },
    {
      label: 'Has Product',
      data: PreciousHasProduced.map((data) => data.quantity ),
      borderColor:"rgba(75,192,192,1)",
      backgroundColor: "rgba(75,192,192,0.5)",
    }
  ]
}

const Year = {
  labels: YearAgency.map((data) => data.label ),
  datasets: [
  {    label: 'Agency',
    data: YearAgency.map((data) => data.quantity ),
    borderColor: "RGBA( 255, 215, 0, 0.5 )",
    backgroundColor: "RGBA( 255, 215, 0, 0.5 )",
  },
  {
    label: 'Error',
    data: YearError.map((data) => data.quantity ),
    borderColor:"rgba(75,192,192,1)",
    backgroundColor: "rgba(75,192,192,0.5)",
  },
  {
    label: 'Has Product',
    data: YearHasProduced.map((data) => data.quantity ),
    borderColor:"rgba(75,192,192,1)",
    backgroundColor: "rgba(75,192,192,0.5)",
  }
]
}

// ----------------------------lượng hàng bán ra theo tháng, quý, năm theo dong san pham--------------

const ProductLine_Month = {
  labels: MonthProductLine.map((data) => data.productLine ),
  datasets: [
    {
    label: "sold",
    data: MonthProductLine.map((data) => data.sold ),
    backgroundColor: [
    "rgba(75,192,192,0.5)",
    "RGBA( 138, 43, 226, 0.5 )",
     "RGBA( 85, 107, 47, 0.5 )",
     "RGBA( 233, 150, 122, 0.5 )",
    ],
    borderColor: "black",
    borderWidth: 2,
    },
    ],
  }

  const ProductLine_Precious = {
    labels: PreciousProductLine.map((data) => data.productLine ),
    datasets: [
      {
      label: "sold",
      data: PreciousProductLine.map((data) => data.sold ),
      backgroundColor: [
      "rgba(75,192,192,0.5)",
      "RGBA( 138, 43, 226, 0.5 )",
       "RGBA( 85, 107, 47, 0.5 )",
       "RGBA( 233, 150, 122, 0.5 )",
      ],
      borderColor: "black",
      borderWidth: 2,
      },
      ],
    }

    const ProductLine_Year = {
      labels: YearProductLine.map((data) => data.productLine ),
      datasets: [
        {
        label: "sold",
        data: YearProductLine.map((data) => data.sold ),
        backgroundColor: [
        "rgba(75,192,192,0.5)",
        "RGBA( 138, 43, 226, 0.5 )",
         "RGBA( 85, 107, 47, 0.5 )",
         "RGBA( 233, 150, 122, 0.5 )",
        ],
        borderColor: "black",
        borderWidth: 2,
        },
        ],
      }

      //----------------------------------theo san pham ------------------------- 

      const Product_Month = {
        labels: MonthProduct.map((data) => data.product ),
        datasets: [
          {
          label: "sold",
          data: MonthProduct.map((data) => data.sold ),
          backgroundColor: [
          "rgba(75,192,192,0.5)",
          "RGBA( 138, 43, 226, 0.5 )",
           "RGBA( 85, 107, 47, 0.5 )",
           "RGBA( 233, 150, 122, 0.5 )",
          ],
          borderColor: "black",
          borderWidth: 2,
          },
          ],
        }
      
        const Product_Precious = {
          labels: PreciousProduct.map((data) => data.product ),
          datasets: [
            {
            label: "sold",
            data: PreciousProduct.map((data) => data.sold ),
            backgroundColor: [
            "rgba(75,192,192,0.5)",
            "RGBA( 138, 43, 226, 0.5 )",
             "RGBA( 85, 107, 47, 0.5 )",
             "RGBA( 233, 150, 122, 0.5 )",
            ],
            borderColor: "black",
            borderWidth: 2,
            },
            ],
          }
      
          const Product_Year = {
            labels: YearProduct.map((data) => data.product ),
            datasets: [
              {
              label: "sold",
              data: YearProduct.map((data) => data.sold ),
              backgroundColor: [
              "rgba(75,192,192,0.5)",
              "RGBA( 138, 43, 226, 0.5 )",
               "RGBA( 85, 107, 47, 0.5 )",
               "RGBA( 233, 150, 122, 0.5 )",
              ],
              borderColor: "black",
              borderWidth: 2,
              },
              ],
            }


      // -----------------------------tỷ lệ sản phẩm lỗi:-------------

  const errorProductLine = {
    labels: dataErrorProductLine.map((data) => data.productLine ),
    datasets: [{
      label: 'Statistical Has Produced',
      data: dataErrorProductLine.map((data) => data.quantity ),
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
  const errorAgency = {
    labels: dataErrorAgency.map((data) => data.agency ),
    datasets: [{
      label: 'Statistical Has Produced',
      data: dataErrorAgency.map((data) => data.quantity ),
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
  const errorFacility = {
    labels: dataErrorFacility.map((data) => data.facility ),
    datasets: [{
      label: 'Statistical Has Produced',
      data: dataErrorFacility.map((data) => data.quantity ),
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

const LineChart = () => {
    const [facilitydata, setFacilityData] = useState(facilityData)
    const [productLinedata, setProductLinedata] = useState(ProductLine_Month)
    const [productdata,setProductdata] = useState(Product_Month)
    const [lossProductRate, setlossProductRate] = useState(errorProductLine)
    return (
      <div className="container-facitily">
        <div className="product-facitily">
          <h4 className="text-center">Co so san xuat</h4>
        <div className="select">
        <Button onClick={() => setFacilityData(facilityData)} variant="secondary">Month</Button>{' '}
        <Button onClick={() => setFacilityData(Precious)} variant="secondary">Precious</Button>{' '}
        <Button onClick={() => setFacilityData(Year)} variant="secondary">Year</Button>{' '}
        </div>
        <Line data={facilitydata}/>
        </div>
        <div>
        <h4 className="text-center ">Luong hang ban ra</h4>
        <div className="quantity-sold">
          <div className="chart-sold ">
            <h5>theo dong san pham</h5>
             <div className="chart-productLine">
              <div className="select-button">
             <Button onClick={() => setProductLinedata(ProductLine_Month)} variant="secondary">Month</Button>{' '}
              <Button onClick={() => setProductLinedata(ProductLine_Precious)} variant="secondary">Precious</Button>{' '}
              <Button onClick={() => setProductLinedata(ProductLine_Year)}variant="secondary">Year</Button>{' '}
              </div >
              <div className="chart">
              <Pie data = {productLinedata} />
              </div>
             </div> 
           </div>
           <div className="chart-sold ">
            <h5>theo san pham</h5>
             <div className="chart-productLine">
              <div className="select-button">
             <Button onClick={() => setProductdata(Product_Month)} variant="secondary">Month</Button>{' '}
              <Button onClick={() => setProductdata(Product_Precious)} variant="secondary">Precious</Button>{' '}
              <Button onClick={() => setProductdata(Product_Year)}variant="secondary">Year</Button>{' '}
              </div >
              <div className="chart">
              <Pie data = {productdata} />
              </div>
             </div> 
           </div>
        </div>
        </div>
        <div className="product-facitily">
          <h4 className="text-center">Ty le san pham loi</h4>
        <div className="select">
        <Button onClick={() => setlossProductRate(errorProductLine)} variant="secondary">Product Line</Button>{' '}
        <Button onClick={() => setlossProductRate(errorAgency)} variant="secondary">Agency</Button>{' '}
        <Button onClick={() => setlossProductRate(errorFacility)} variant="secondary">Facility</Button>{' '}
        </div>
        <Bar data={lossProductRate}/>
        </div>
    </div>
    ) 
  }
  
  
  export default LineChart;