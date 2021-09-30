import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/HomePage/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import OurStory from './pages/Ourstory/Ourstory';
import Feedback from './pages/Feedback/Feedback';
import UploadPage from './pages/UploadPage/UploadPage';
import { Navbar, Footer } from './components';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Switch>
        <Route path="/upload" exact component={UploadPage} />
        <>
          <Navbar />
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/OurStory" exact component={OurStory} />
          <Route path="/Feedback" exact component={Feedback} />
          <Footer />
        </>
      </Switch>
    </Router>
  );
}

export default App;
