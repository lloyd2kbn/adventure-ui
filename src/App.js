import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home'
import About from './components/pages/About'
import Tours from './components/pages/Tours'
import SignUp from './components/pages/SignUP'
import SignIn from './components/pages/SignIN'
import {Button} from './components/Button.js'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import {useState,useEffect} from 'react'
function App() {
  const [scrollTop,setScrollTop]=useState(false);
  console.log(scrollTop)
  const handleScroll=()=>{
    if(window.scrollY>500){
        setScrollTop(!scrollTop)
    }else{
      setScrollTop(false)
    }
}
  useEffect(()=>{
    window.addEventListener('scroll',handleScroll)
  },[])
  const goToTop=()=>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  }
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/tours' component={Tours}/>
            <Route path='/about' component={About}/>
            <Route path='/sign-up' component={SignUp}/>
            <Route path='/sign-in' component={SignIn}/>
        </Switch>
        { scrollTop&&<button style={{position:"fixed",bottom:20,right:20,padding:20,cursor:'pointer'}} onClick={goToTop}>Go to Top</button>}
      </Router>
     
    </>
             
    
  );
}

export default App;
