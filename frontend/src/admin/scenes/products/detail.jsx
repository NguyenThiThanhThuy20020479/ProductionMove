import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "bootstrap/dist/css/bootstrap.min.css";
import CardHeader from '@mui/material/CardHeader';
import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom'
export default function MultiActionAreaCard() {
    const [expanded, setExpanded] = React.useState(false);
    let {id}= useParams();
    const [data, setData] = useState([]);
    //fetch API chi tiết sản phẩm theo dòng sản phẩm
    useEffect(() => {
    async function fetchData() {
        let result = await fetch(`http://127.0.0.1:8000/api/admin/list/productlines/${id}`) 
        result = await result.json();
        console.warn("data", result);
        setData(result)
        console.warn(result)
    }
        fetchData();
    }, []);
    return (
    <Grid className='tab' container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {
        data.map((item)=> (
        <Grid item xs={6}>
            <Card>
                <CardHeader
                    title= {item.product_name}
                    subheader= {item.text2}
                />
                    <CardMedia
                    component="img"
                    height="194"
                    image= {item.image}
                    alt="green iguana"
                    />
                     <CardContent >
                     <Typography gutterBottom variant="h5" component="div" sx={{
                                color: 'warning.dark',
                                display: 'inline',
                                fontWeight: 'bold',
                                mx: 0.5,
                                fontSize: 15,
                            }}>
                        Giới thiệu

                        </Typography>
                        <Typography variant="body2" color="text.secondary"  >
                        {item.text1}
                        </Typography><br/>
                        <Typography gutterBottom variant="h5" component="div" sx={{
                                color: 'warning.dark',
                                display: 'inline',
                                fontWeight: 'bold',
                                mx: 0.5,
                                fontSize: 15,
                            }}>
                        Thông số kĩ thuật
                        </Typography>
                        <Typography variant="body2" color="text.secondary"  >
                        {item.des1}<br/>
                        {item.des2}<br/>
                        {item.des3}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div" sx={{
                                color: 'warning.dark',
                                display: 'inline',
                                fontWeight: 'bold',
                                mx: 0.5,
                                fontSize: 15,
                            }}>
                        Giá bán hiện tại
                        </Typography>
                        <Typography variant="body2" color="text.secondary"  >
                        {item.text3}<br/>
                       
                        </Typography>   
                    </CardContent>                
            </Card>
        </Grid>
        ))
        }   
    </Grid>
  );
}





