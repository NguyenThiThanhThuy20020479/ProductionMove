import React from 'react'
import { Line} from "react-chartjs-2";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
 const Mothdata= {
  labels: dataErrorMonth.map((data) => data.label ),
  datasets: [
    {
    label: 'Error',
    data: dataErrorMonth.map((data) => data.quantity ),
    borderColor: "RGBA( 148, 0, 211, 0.5 )",
    backgroundColor: "RGBA( 148, 0, 211, 0.5 )",
    },
   {
    label: 'Import',
    data: dataImportMonth.map((data) => data.quantity ),
    borderColor:"RGBA( 255, 140, 0, 0.5 )",
    backgroundColor: "RGBA( 255, 140, 0, 0.5 ))",
    },
   {
    label: 'Sold',
    data: dataSoldMonth.map((data) => data.quantity ),
    borderColor:"RGBA( 255, 215, 0, 0.5 )",
    backgroundColor: "RGBA( 255, 215, 0, 0.5 ))",
    }
    ]
  }
const Preciousdata = {
    labels: dataErrorPrecious.map((data) => data.label ),
    datasets: [
    {
      label: 'Error',
      data: dataErrorPrecious.map((data) => data.quantity ),
      borderColor: "RGBA( 148, 0, 211, 0.5 )",
      backgroundColor: "RGBA( 148, 0, 211, 0.5 )",
    },
    {
      label: 'Import',
      data: dataImportPrecious.map((data) => data.quantity ),
      borderColor:"RGBA( 255, 140, 0, 0.5 )",
      backgroundColor: "RGBA( 255, 140, 0, 0.5 ))",
    },
    {
      label: 'Sold',
      data: dataSoldPrecious.map((data) => data.quantity ),
      borderColor:"RGBA( 255, 215, 0, 0.5 )",
      backgroundColor: "RGBA( 255, 215, 0, 0.5 ))",
    }
  ]
}         
const Yeardata = {
  labels: dataErrorYear.map((data) => data.label ),
  datasets: [
  {
    label: 'Error',
    data: dataErrorYear.map((data) => data.quantity ),
    borderColor: "RGBA( 148, 0, 211, 0.5 )",
    backgroundColor: "RGBA( 148, 0, 211, 0.5 )",
  },
  {
    label: 'Import',
    data: dataImportYear.map((data) => data.quantity ),
    borderColor:"RGBA( 255, 140, 0, 0.5 )",
    backgroundColor: "RGBA( 255, 140, 0, 0.5 ))",
  },
  {
    label: 'Sold',
    data: dataSoldYear.map((data) => data.quantity ),
    borderColor:"RGBA( 255, 215, 0, 0.5 )",
    backgroundColor: "RGBA( 255, 215, 0, 0.5 ))",
  }
]
}   
const Distribution = () => {
  const [distributionData, setDistributionData] = useState(Mothdata)
  return (
    <div className="container-facitily">
        <div className="product-facitily">
          <h4 className="text-center">Co so san xuat</h4>
        <div className="select">
        <Button onClick={() => setDistributionData(Mothdata)} variant="secondary">Month</Button>{' '}
        <Button onClick={() => setDistributionData(Preciousdata)} variant="secondary">Precious</Button>{' '}
        <Button onClick={() => setDistributionData(Yeardata)}variant="secondary">Year</Button>{' '}
        </div>
        <Line data={distributionData}/>
        </div>
    </div>
  )
}
export default Distribution;