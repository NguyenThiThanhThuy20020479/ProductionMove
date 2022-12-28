
import {Line, Bar} from 'react-chartjs-2';
import * as React from 'react';
import {useState, useEffect} from 'react';
import { Button, Stack,Divider } from '@mui/material';
import { red } from '@mui/material/colors';

function Table() {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [data4, setData4] = useState([]);
  const [data5, setData5] = useState([]);
  let txt = "";
  const [selected, setSelected] = useState("");
  useEffect(() => {
    async function fetchData() {
      let result1 = await fetch("http://127.0.0.1:8000/api/admin/statistic/product/sold") 
      let result2 = await fetch("http://127.0.0.1:8000/api/admin/statistic/product/produce") 
      let result3 = await fetch("http://127.0.0.1:8000/api/admin/statistic/product/insuarance0") 
      let result4 = await fetch("http://127.0.0.1:8000/api/admin/statistic/product/insuarance1") 
      let result5 = await fetch("http://127.0.0.1:8000/api/admin/statistic/product/exchange") 
      result1 = await result1.json();
      result2 = await result2.json();
      result3 = await result3.json();
      result4 = await result4.json();
      result5 = await result5.json();
      setData1(result1)
      setData2(result2)
      setData3(result3)
      setData5(result5)
      setData4(result4)
    }
    fetchData();
  },[]);
    

  const soldData = {
    labels: data1.map((dt) => dt.product_name ),
    datasets: [
      {
        label: 'amount',
        data: data1.map((dt) => dt.amount ),
        borderColor: "#FFFF99"	,
        backgroundColor: "#50AF95",
        maxBarThickness: 20,

      }
    ]
  }
  const [userData, setUserData] = useState(soldData);

  const produceData = {
    labels: data2.map((dt) => dt.product_name ),
    datasets: [
      {
        label: 'amount',
        data: data2.map((dt) => dt.amount ),
        borderColor: "#FFFF99"	,
        backgroundColor: "#50AF95",
      }
    ]
  }
  const insuaranceData = {
    labels: data3.map((dt) => dt.product_name ),
    datasets: [
      {
        label: 'amount',
        data: data3.map((dt) => dt.amount ),
        borderColor: "#FFFF99"	,
        backgroundColor: "#50AF95",
      }
    ]
  }
  const returnData = {
    labels: data4.map((dt) => dt.product_name ),
    datasets: [
      {
        label: 'amount',
        data: data4.map((dt) => dt.amount ),
        borderColor: "#FFFF99"	,
        backgroundColor: "#50AF95",
      }
    ]
  }
  const exchangeData = {
    labels: data5.map((dt) => dt.product_name ),
    datasets: [
      {
        label: 'amount',
        data: data5.map((dt) => dt.amount ),
        borderColor: "#FFFF99"	,
        backgroundColor: "#50AF95",
      }
    ]
  }
  return (
    <div>
      <div className='tab'>
      <Stack direction="row" spacing={1}  divider={<Divider orientation="vertical" flexItem />}>
      <Button size ={'small'} selected={selected}  variant="contained" onClick={()=> {
        setUserData(soldData);
        txt ="Bieu do luong hang ban ra"
        }}>
      Lượng hàng đã bán
      </Button>
      <Button  size ={'small'} selected={selected}  variant="contained"  onClick={()=> setUserData(produceData)}>
        Lượng hàng đã sản xuất
      </Button>
      <Button size ={'small'} selected={selected}  variant="contained" onClick={()=> setUserData(insuaranceData)}>
        Lượng hàng đang bảo hành
      </Button>
      <Button size ={'small'} selected={selected}  variant="contained" onClick={()=> setUserData(returnData)}>
        Lượng hàng không thể bảo hành
      </Button>
      <Button size ={'small'} selected={selected}  variant="contained" onClick={()=> setUserData(exchangeData)}>
        Lượng hàng đổi cho khách
      </Button>
    </Stack>
      </div>
      <div className='table'>
        <Bar  data={userData}
        options={{
          plugins: {
              title: {
                  display: true,
                  align: 'center',
                  position: 'bottom',
                  font:{
                    size:20,
                    color: red
                  }
              }
          }
      }}/>
      </div>
      <h1>{txt}</h1>
        
    </div>
    );
}

export default Table;