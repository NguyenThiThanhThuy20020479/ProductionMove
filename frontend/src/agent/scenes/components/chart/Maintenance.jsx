import React from 'react'
import { PolarArea} from "react-chartjs-2";
import "./piechar.css"
const maintenance = {
    labels: dataMaintenance.map((data) => data.label ),
    datasets: [
      {
      label: "sold",
      data: dataMaintenance.map((data) => data.quantity ),
      backgroundColor: [
      "rgba(75,192,192,0.5)",
      "RGBA( 138, 43, 226, 0.5 )",
       "RGBA( 85, 107, 47, 0.5 )",
       "RGBA( 233, 150, 122, 0.5 )",
      ],
      borderColor: "black",
      borderWidth: 1,
      },
      ],
    }
const Maintenance = () => {
  return (
    <div className='polarArea'>
    <PolarArea data={maintenance}/>
    </div>
  )
}
export default Maintenance;