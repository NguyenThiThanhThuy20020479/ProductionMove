
import { red } from '@mui/material/colors';
/*------------------Thống kê theo đại lý phân phối------------------------*/
function AgentStatistic() {
    const [data1, setData1] = useState([]);
    const [data, setData] = useState([]);
    const [id, setId] =useState("");
    const [status, setStatus] =useState("");
    const[agent, setAgent] = useState([]);
    //fetch API danh sách đại lý phân phối
    useEffect(() => {
        async function fetchData() {
            let result =await fetch("http://127.0.0.1:8000/api/admin/list/agents") 
            result =await result.json();
            setAgent(result);
        }
        fetchData();
    },[]);
    const Submit = (e)=>{
            e.preventDefault();
            async function fetchData() {
            let result1 = await fetch(`http://127.0.0.1:8000/api/admin/agent/${status}/${id}`) 
            result1 = await result1.json();
            setData1(result1)
            let result2 =await fetch(`http://127.0.0.1:8000/api/admin/agent/${status}/all`) 
            result2 =await result2.json();
            setData(result2)
        }
        fetchData()
    }
    const produceData = {
        labels: data.map((dt) => dt.product_name ),
        datasets: [
        {
            label: 'Đại lí',
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
                        
                       <Stack  direction="row" spacing={2}>
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
                            <option value= "import">
                                Số lượng nhập về
                            </option>
                            <option value= "export">
                                Số lượng xuất ra
                            </option>
                            <option value= "fault">
                                Số lượng lỗi
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
                    text: "Bảng thống kê số lượng theo đại lí phân phối",
                    font:{
                        size:20,
                        color: red
                    }
                    }
                }
                }}/>
            </div>   
            <div> 
            </div>
        </div>
    );
}

export default AgentStatistic;