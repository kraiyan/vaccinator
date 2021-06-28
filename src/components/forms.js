

import React from 'react'

import  Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import "./forms.css"
import  Card from "react-bootstrap/Card"


 const  Forms = () => {
    return (
        <div className="form1">
            <Card   clasName= "card">
<Form>
 
    <Form.Label  className="label" size='lg'>Please Enter the Pincode of your district</Form.Label>
    <Form.Control  maxlength= "6"size="lg" type="formgridzip" placeholder="pincode" />
    <Form.Text className="text-muted">
      We'll never share your data  with anyone else.
    </Form.Text>
  

  
  <Form.Group  className= "chkbox"controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out to agree with our terms and condition" />
  </Form.Group>
  <Button  className="submitbtn"  size= "lg" variant="primary" type="submit">
         Find the Vaccine Slots near me!!
  </Button>
</Form>  
</Card>
      </div>
    )
}
export default Forms;