import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home'
import Services from './components/pages/Sevices'
import Product from './components/pages/Product'
import SignUp from './components/pages/SignUP'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/services' component={Services}/>
            <Route path='/products' component={Product}/>
            <Route path='/sign-up' component={SignUp}/>
        </Switch>
      </Router>
    </>
             
    
  );
}

export default App;
