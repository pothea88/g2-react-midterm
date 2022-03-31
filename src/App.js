import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Thelayout from './components/layout/index';
import { Redirect } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        {/* <Route exact path='/login' name="login page" render={props => <Login {...props}/>} /> */}
        <Thelayout />
      </Switch>
    </Router>
  );
}

export default App;
