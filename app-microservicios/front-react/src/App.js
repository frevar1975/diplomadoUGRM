import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Login from './components/login';
import Register from './components/register';
import Home from './components/home';
import useToken from './components/usetokem';

import './App.css';

function App() {

/*   return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  ); */

  const { token, setToken } = useToken();

  if(!token) {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/">
              <Login setAccessToken = {token} />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }

  return (
    <div className="App">
      Mis libritos

      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/libro/:id">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
