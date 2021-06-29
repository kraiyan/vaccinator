
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

 import Forms from "./components/forms"

import Navbar1  from  "./components/navbar"
import Prevention from "./components/Prevention"
import Vaccination from "./components/Vaccination"
import Tracker from "./components/tracker"







function App() {
  return (
   
         <>
                    
                    
          <Router>
          
          <Navbar1/> 
          <Switch>
                   
                <Route exact path="/" component={Forms} />
                 <Route path ="/preventive" component={Prevention}/>
                  <Route path ="/vaccine_info" component={Vaccination}/>
                  <Route path ="/corona_tracker" component={Tracker}/>
                     
              </Switch>
         
          </Router>
         

        </>
  );
}

export default App;
