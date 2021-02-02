import { Component } from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import ShopPage from './pages/shop/ShopPage';
import Authenticate from './pages/authenticate/Authenticate';
import Header from './components/header/Header';
import { Route, Switch } from 'react-router-dom';
import { auth } from './firebase/firebase.utils';

class App extends Component {
  state = {
    currentUser: null,
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={Authenticate} />
        </Switch>
      </div>
    );
  }
}

export default App;
