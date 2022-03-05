import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from './homecomponents/Slider';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Cards from './homecomponents/Cards';
import Counter from './homecomponents/Counter';
import Input from './homecomponents/Input';
import Contact from './homecomponents/Contact';
import Weather from './homecomponents/Weather';



function App() {
  return (

    <>
      <Router>
        <div className='navbar'>
          <span>< Link className='navigationbar' to="/OnePageApp">Home</Link></span>
          <span><Link className='navigationbar' to="/Counter">Counter</Link></span>
          <span><Link className='navigationbar' to="/Weather">Weather APP</Link> </span>
          <span><Link className='navigationbar' to="/todolist">To-Do List APP</Link></span>
          <span><Link className='navigationbar' to="/Contact">Contact Me</Link></span>
        </div>

        <Switch>
          <Route exact path="/OnePageApp">
            <Slider />
          </Route>
          <Route exact path="/Weather">
            <Weather />
          </Route>
          <Route exact path="/Contact">
            < Contact />
          </Route>
          <Route exact path="/Counter">
            <Counter />
          </Route>
          <Route exact path="/todolist">
            <Input />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
