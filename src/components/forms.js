

import React from 'react'
import { useState } from 'react'
import  Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import "./forms.css"
import  Card from "react-bootstrap/Card"
import Moment from "moment"


 const  Forms = () => {

       const[pincode,setpincode]=useState("");
       const [date,setDate]=useState("");
       const [locations,setLocations]= useState([])
              
          const formatdate = Moment(date).format("DD-MM-YYYY");
       console.log(formatdate,pincode);

       const doSomething=(e)=>{

                e.preventDefault();
             console.log("form Submitted")
             fetch(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pincode}&date=${formatdate}`).then(

             res=> {

                return res.json();
             }

                      
             ).then(
                 response=>{
                    
                    setLocations(response['sessions'])
                    console.log(locations);
                 }
             )
             .catch(error=>{
                 console.log(error);
             })
       }

    return (
        <div className="form1">
            <Card   clasName= "card">

<Form onSubmit={doSomething}>
 
    <Form.Label  className="label" size='lg'>Please Enter the Pincode of your district</Form.Label>
    <Form.Control value={pincode} required onChange={(e)=>setpincode(e.target.value)}  maxLength= "6"size="lg" type="formgridzip" placeholder="pincode" />
    <Form.Text className="text-muted">
      We'll never share your data  with anyone else.
    </Form.Text>
    <Form.Label  className="label" size='lg'>Please Enter the date for vaccination</Form.Label>
    <Form.Control required  value={date} onChange={(e)=>setDate(e.target.value)} size="lg" type="date" placeholder="pincode" />
    
  
  

  
  <Form.Group  className= "chkbox"controlId="formBasicCheckbox">
    <Form.Check  required type="checkbox" label="Check me out to agree with our terms and condition" />
  </Form.Group>
  <Button  className="submitbtn"  size= "lg" variant="primary" type="submit">
         Find the Vaccine Slots near me!!
  </Button>
</Form>  
</Card>

         {locations.length=== 0? <h1>Sorry!! No locations found</h1>:<div>
             
               {locations.map((location,index)=>{

                   return(
                         
                          <Card style={{  backgroundColor:"lightgreen", marginLeft : "390px", borderRadius:"30px",   height:"300px",width:"500px" } }>
                         <h1>{location.name}</h1>
                         <h4>Address: {location.address}</h4>
                         <h4> vaccine type :{location.vaccine}</h4>
                         <h4>availablity : {location.available_capacity}</h4>
                         <h4>Fee Type : {location.fee_type}</h4>
                         </Card>
                   )
               })}
             
             
             </div>}
      
    </div>
    );

    };

export default Forms