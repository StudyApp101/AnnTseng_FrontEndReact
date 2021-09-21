import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/HomePage/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import OurStory from './pages/Ourstory/Ourstory';
import { Navbar, Footer } from './components';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/OurStory" exact component={OurStory} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
