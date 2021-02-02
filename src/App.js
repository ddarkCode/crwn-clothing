import './App.css';
import HomePage from './pages/HomePage';
import ShopPage from './pages/shop/ShopPage';
import Authenticate from './pages/authenticate/Authenticate';
import Header from './components/header/Header';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={Authenticate} />
      </Switch>
    </div>
  );
}

export default App;
