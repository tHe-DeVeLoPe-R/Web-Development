import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import adminlogin from './components/adminlogin';
import Signupuser from './components/signupuser';
import Userlogin from './components/userlogin';

function App() {
  return (
    <Router>
      <div>
        <Switch>

          <Route exact path='/' component={Userlogin} />
          <Route exact path='/admin' component={adminlogin} />
          <Route exact path='/user' >

          <Userlogin component= "user" />

          </Route>

          <Route exact path='/signup' component={Signupuser} />



        </Switch>
        
      </div>
    </Router>

  );
}

export default App;
