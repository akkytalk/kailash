
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Community from './components/Community/Community';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LinkPage from './components/LinkPage/LinkPage';
import Login from './components/Login/Login';
import NewPaste from './components/NewPaste/NewPaste';
import Paste from './components/Paste/Paste';
import Setting from './components/Setting/Setting';


function App() {
  return (
    <div className="app">
      
      <Switch>

      <Route path="/setting">
          <Setting />
        </Route>
      <Route path="/newpaste">
          <NewPaste />
        </Route>

      <Route path="/link">
          <LinkPage />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/">
             <Header />
             <Paste />
             <Community />
             <Footer />
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
