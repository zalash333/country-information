import React from 'react';
import Header from './page/Header';
import Home from './page/Home';
import Page404 from './page/Page404';
import Footer from './page/Footer';
import { Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/event/:slug" component={EventPage} /> */}
        <Route component={Page404} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
