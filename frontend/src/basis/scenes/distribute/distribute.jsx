import React from "react";
import { Line, Pie, Bar} from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { useState, useEffect } from "react";
import "./piechar.css"
import Button from 'react-bootstrap/Button';
import {dataHasProduced}  from "../data.js"
import { MonthAgency,MonthError,MonthHasProduced } from "../data.js";
import { PreciousAgency,PreciousError,PreciousHasProduced } from "../data.js";
import { YearAgency,YearError,YearHasProduced } from "../data.js";
import { MonthProductLine,PreciousProductLine,YearProductLine} from "../data.js";
import { MonthProduct,PreciousProduct,YearProduct} from "../data.js";
import { dataErrorFacility,dataErrorAgency,dataErrorProductLine} from "../data.js";

const Distribute = () => {
    useEffect(() => {
        async function fetchData() {
            let result1 =await fetch("http://127.0.0.1:8000/api/basis/2/statistictime/month") 
            result1 =await result1.json();
            let result2 =await fetch("http://127.0.0.1:8000/api/basis/2/statistictime/year") 
            result2 =await result2.json();
            let result3 =await fetch("http://127.0.0.1:8000/api/basis/2/statistic/produce") 
            result3 =await result3.json();
            setData1(result1);
            setData2(result2);
            setData3(result3);
            console.log(result1);
        }
        fetchData();
    },[]);
    const [data1, setData1] = useState([]);
    const [data2, setData2] = useState([])
    const [data3, setData3] = useState([])
// ---------------------------xem thống kê và báo cáo  theo trạng thái và theo tháng, quý, năm--------------
const month = {
    labels: data1.map((data) => data.month ),
    datasets: [
    {
      label: 'Sản phẩm',
      data: data1.map((data) => data.amount ),
      borderColor: "RGBA( 148, 0, 211, 0.5 )",
      backgroundColor: "RGBA( 148, 0, 211, 0.5 )",
    }
  ]
}
const dataa = [
  {
    label: "Quý 2"
  },
  {
    label: "Quý 3"
  },
  {
    label: "Quý 1"
  },
]

const Precious = {
    labels: dataa.map((data) => data.label ),
    datasets: [
    {
      label: 'Sản phẩm',
      data: data1.map((data) => data.amount ),
      borderColor: "RGBA( 255, 215, 0, 0.5 )",
      backgroundColor: "RGBA( 255, 215, 0, 0.5 )",
    }
  ]
}

const Year = {
  labels: data2.map((data) => data.year),
  datasets: [
  {    label: 'Sản phẩm',
    data: data2.map((data) => data.amount ),
    borderColor: "RGBA( 255, 215, 0, 0.5 )",
    backgroundColor: "RGBA( 255, 215, 0, 0.5 )",
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
    const [facilitydata, setFacilityData] = useState(month)
    const [productLinedata, setProductLinedata] = useState(ProductLine_Month)
    const [productdata,setProductdata] = useState(Product_Month)
    const [lossProductRate, setlossProductRate] = useState(errorProductLine)
    return (
      <div className="container-facitily">
        <div className="product-facitily">

        <div className="select">
        <Button onClick={() => setFacilityData(month)} variant="secondary">Month</Button>{' '}
        <Button onClick={() => setFacilityData(Precious)} variant="secondary">Precious</Button>{' '}
        <Button onClick={() => setFacilityData(Year)} variant="secondary">Year</Button>{' '}
        </div>
        <Line data={facilitydata}
        options={{
            plugins: {
            title: {
                display: true,
                align: 'center',
                position: 'top',
                text: "Lượng hàng đã phân phối theo thời gian",
                font:{
                    size:15
                }
                }
            }
            }}/>
        </div>
        <div>
        
         
              
       

        </div>
    </div>
    ) 
  }
  export default Distribute;