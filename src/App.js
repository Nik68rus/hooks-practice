import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { About } from './pages/About.js';
import { Profile } from './pages/Profile';
import { Alert } from './components/Alert';
import { AlertState } from './context/alert/AlertState';
import { GithubState } from './context/github/GithubState';


function App() {
  return (
    <AlertState>
      <GithubState>
        <BrowserRouter>
          <Navbar />
          <div className="container pt-4">
            <Alert alert={{ text: `Test alert` }} />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/profile/:name" component={Profile} />
            </Switch>
          </div>
        </BrowserRouter>
      </GithubState>
    </AlertState>
  );
}

export default App;
