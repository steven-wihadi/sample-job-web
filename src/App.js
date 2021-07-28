import './App.scss';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route 
} from 'react-router-dom';
import LoginPage from './pages/login/login.page';
import JobListPage from './pages/job-list/job-list.page';
import JobDetailPage from './pages/job-detail/job-detail.page';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/'><LoginPage /></Route>
          <Route exact path='/job-list'><JobListPage /></Route>
          <Route exact path='/job-detail/:id'><JobDetailPage /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
