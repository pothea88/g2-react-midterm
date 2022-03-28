import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './webpages/auth/login/index';
import Thelayout from './components/layout/index';

function App() {
  return (
    <Router>
      <Switch>
        {/* <Route exact path='/login' name="login page" render={props => <Login {...props}/>} /> */}
        {/* <Route exact path='/' render={props => <Thelayout {...props}/>} /> */}
        <Thelayout />
      </Switch>
    </Router>
  );
}

export default App;
