
 
 
 
import CountUp from 'react-countup';
import Main from './main';

 import { useEffect,useState } from 'react';
 import Card from '@material-ui/core/Card';
 import CardActions from '@material-ui/core/CardActions';
 import CardContent from '@material-ui/core/CardContent';
import Button from "@material-ui/core/Button"
 import Typography from '@material-ui/core/Typography' 
 import { makeStyles } from '@material-ui/core/styles';

 


import React from 'react'
const useStyles = makeStyles({
    root: {
      minWidth: 275,
      width:300,
      marginRight: "10px",
      marginTop : "20px",
      backgroundColor: "lightgreen"
       
    },
     
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 18,
      marginBottom : "10px"
    },
    pos: {
      marginBottom: 12,
    },
    layout:{
        display: "flex"
        
    },
  });

  

   const Tracker=()=>{
    const classes = useStyles();
         
         const[countryinfo,setcountryinfo]= useState({})
         

         useEffect( async()=>{


             await fetch("https://disease.sh/v3/covid-19/countries/india")
            .then((res)=>res.json())
            .then ((data)=>{

                setcountryinfo(data)
            })
         },[]);

     console.log(countryinfo)
    return (

           <>
             <Main/>
            
            <div className={classes.layout}>
            <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
               Total Cases
        </Typography>
        <Typography variant="h5" component="h2">
        <CountUp start={0} end={countryinfo.cases!=null?countryinfo.cases:10000}  duration={5} separator=","/>
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
            people got effected by covid in india
        </Typography>
        <Typography variant="body2" component="p">
        India stands on 2 when it comes to number of Covid cases
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
               Total Deaths
        </Typography>
        <Typography variant="h5" component="h2">
        <CountUp start={0} end={countryinfo.deaths!=null?countryinfo.deaths:10000}  duration={5} separator=","/>
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
            people lost their life in India
        </Typography>
        <Typography variant="body2" component="p">
                   Indeed 
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
               Total Recovered
        </Typography>
        <Typography variant="h5" component="h2">
        <CountUp start={0} end={countryinfo.recovered!=null?countryinfo.recovered:10000}  duration={5} separator=","/>
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
            people got Recovered in India 
        </Typography>
        <Typography variant="body2" component="p">
             India stands on top with highest Recovery rate till date
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
              Cases Registerd Today
        </Typography>
        <Typography variant="h5" component="h2">
        <CountUp start={0} end={countryinfo.todayCases!=null?countryinfo.todayCases:10000}  duration={5} separator=","/>
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
             Its time to get vaccinated folks to end this!!
        </Typography>
        <Typography variant="body2" component="p">
            Prevention is better then cure
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    
    </div>



            </>
              

    );
   };


   export default Tracker