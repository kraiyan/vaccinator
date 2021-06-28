
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Main from "./components/main"

import Navbar1  from  "./components/navbar"
import Prevention from "./components/Prevention"
import Vaccination from "./components/Vaccination"






function App() {
  return (
   
         <>
        
          <Router>
          <Navbar1/> 
          <Switch>
              
                <Route exact path="/" component={Main} />
                 <Route path ="/preventive" component={Prevention}/>
                  <Route path ="/vaccine_info" component={Vaccination}/>
             
              </Switch>
         
          </Router>
         

        </>
  );
}

export default App;
