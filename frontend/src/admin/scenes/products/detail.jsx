import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Divider, Grid, Paper } from '@mui/material';
import { Stack } from '@mui/system';
import { styled } from '@mui/material/styles';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import "bootstrap/dist/css/bootstrap.min.css";
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CardHeader from '@mui/material/CardHeader';
import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom'


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


export default function MultiActionAreaCard() {

    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
    setExpanded(!expanded);
    };
    let {id}= useParams();
      const [data, setData] = useState([]);
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
                    subheader="September 14, 2016"
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
                        
                    </CardContent>
                <CardActions disableSpacing>
                <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
                >
                <ExpandMoreIcon />
                </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                    <Typography paragraph>Method:</Typography>
                    <Typography paragraph>
                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                        aside for 10 minutes.
                    </Typography>  
                    </CardContent>
                </Collapse>
            </Card>
        </Grid>
        ))
}   
    </Grid>
  );
}





