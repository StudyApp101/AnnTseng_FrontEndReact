import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route, withRouter, Redirect} from 'react-router-dom';
import Home from './pages/HomePage/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import OurStory from './pages/Ourstory/Ourstory';
import Feedback from './pages/Feedback/Feedback';
import UploadPage from './pages/UploadPage/UploadPage';

import MynotesPage from './pages/MynotesPage/MynotesPage';

import { Navbar, Navbar2, Footer} from './components';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Switch>
        {/* Inner pages */}
        <Route path="/mynotes" exact> 
            <Navbar2/>
            <MynotesPage/>
        </Route>


        {/* Upload page */}
        <Route path="/upload" exact> 
            <UploadPage/>
        </Route>

        {/* Outer pages */}
          <Route path="/" exact> 
            <Navbar/>
            <Home/>
            <Footer/>
          </Route>
          <Route path="/login" exact> 
            <Navbar/>
            <Login/>
            <Footer/>
          </Route>
          <Route path="/signup" exact> 
            <Navbar/>
            <Signup/>
            <Footer/>
          </Route>
          <Route path="/ourstory" exact> 
            <Navbar/>
            <OurStory/>
            <Footer/>
          </Route>
          <Route path="/feedback" exact> 
            <Navbar/>
            <Feedback/>
            <Footer/>
          </Route>
          {/* <Route path="/contactus" exact> 
            <Navbar/>
            <Feedback/>
            <Footer/>
          </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
