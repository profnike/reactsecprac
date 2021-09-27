
import './App.css';
import Homepage from "./Pages/Home/Homepage"
import {Route, Switch} from 'react-router-dom'
import Details from './Pages/Details/Details'
import Shoppage from './Pages/Shoppage/Shoppage'
import List from './Pages/List/List';
  
function App() {
 
  return (
    <div className="App">
      <Switch>
      
       <Route exact path="/" component={Homepage}/>
       <Route exact path="/Details/" component={Details}/>
       <Route exact path="/Shoppage" component={Shoppage}/>
     
       <Route exact path="/Details/:topicid" component={List}/>
     </Switch>
    </div>
  );
}

export default App;
