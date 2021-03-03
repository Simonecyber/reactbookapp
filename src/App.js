import React  from 'react';
import './App.css';
import Home from './page/Home'
import Bookdetail from './page/Bookdetail';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return(
    
    <Router>
      
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/:id' component={Bookdetail} />
            </Switch>
    </Router>
    
  );
}

export default App;