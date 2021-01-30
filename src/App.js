import './App.css';
import HomePage from './pages/HomePage';
import { Route, Switch } from 'react-router-dom';

function HatsPage() {
  return <div>This is the hats page</div>;
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
