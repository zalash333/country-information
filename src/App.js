import React from 'react';
import Header from './page/Header';
import Home from './page/Home';
import Page404 from './page/Page404';
import Footer from './page/Footer';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <React.Fragment>
      <ToastContainer />
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={Page404} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
