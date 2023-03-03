
import {Line, Bar} from 'react-chartjs-2';
import * as React from 'react';
import {useState, useEffect} from 'react';
import { Button, Stack,Divider } from '@mui/material';
import { red } from '@mui/material/colors';
/*------------------------Thống kê theo trung tâm bảo hành-------------------------*/
function CenterStatistic() {
    const [data1, setData1] = useState([]);
    const [data, setData] = useState([]);
    const [id, setId] =useState("");
    const [status, setStatus] =useState("");
    const[agent, setAgent] = useState([]);
    useEffect(() => {
        async function fetchData() {
            let result =await fetch("http://127.0.0.1:8000/api/admin/list/servicecenters") 
            result =await result.json();
            setAgent(result);
        }
        fetchData();
    },[]);
    const Submit = (e)=>{
            e.preventDefault();
            async function fetchData() {
            let result1 = await fetch(`http://127.0.0.1:8000/api/admin/center/${status}/${id}`) 
            result1 = await result1.json();
            setData1(result1)
            let result2 =await fetch(`http://127.0.0.1:8000/api/admin/center/${status}/all`) 
            result2 =await result2.json();
            setData(result2)
        }
        fetchData()
    }
    const produceData = {
        labels: data.map((dt) => dt.product_name ),
        datasets: [
        {
            label: 'Cơ sở',
            data: data1.map((dt) => dt.amount ),
            borderColor: "#FFFF99"	,
            backgroundColor: "#50AF95",
            maxBarThickness: 20,

        },
        {
            label: 'Tổng',
            data: data.map((dt) => dt.amount ),
            borderColor:"rgba(34,78,192,1)",
            backgroundColor: "rgba(34,78,192,0.5)",
            maxBarThickness: 20,
        }
        ]
    }
    return (
        <div>
            <div className='tab'>
                <div >
                    <form action="" onSubmit={Submit}>
                        <Stack direction="row" spacing={2}>
                        <select onChange={(e) => {
                        setId(e.target.value);
                        }} size="sm" >
                        {
                            agent.map((item)=>(
                            <option value={item.id}>
                                {item.name}
                            </option>
                            ))
                        }
                        </select>
                        <select onChange={(e) => {
                        setStatus(e.target.value);
                        }} size="sm" >
                            <option value= "receive">
                                Số lượng nhận về
                            </option>
                            <option value= "backtoagent">
                                Số lượng sửa thành công
                            </option>
                            <option value= "backtobasis">
                                Số lượng không sửa được
                            </option>
                        </select>
                        <Button variant="contained" color="warning" type='submit'>
                            Submit
                        </Button>
                        </Stack>
                    </form>
                </div>
                <Bar  data={produceData}
                options={{
                plugins: {
                title: {
                    display: true,
                    align: 'center',
                    position: 'bottom',
                    text: "Bảng thống kê số lượng theo trung tâm bảo hành",
                    font:{
                        size:20,
                        color: red
                    }
                    }
                }
                }}/>
            </div>   
        </div>
    );
}
export default CenterStatistic;