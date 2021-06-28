

import logo from '../vaccines.png'

import Form from "./forms"

import "./main.css"
const Main = ()=>{



return (
        <>
      <div className="banner">
    
      
    <div  >
    <h1>Vaccinator</h1>
    </div>
    <div className="header" >
    <img style={{ height:"40px",width:"40px"}} src={logo} alt="Logo" />
    </div>

   

    </div>

     <Form/>
    
    </>

);




};

export default Main