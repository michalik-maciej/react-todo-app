import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Info from '../Info/Info';
import Home from '../Home/HomeContainer';
import MainLayout from '../MainLayout/MainLayout';
import FAQ from '../FAQ/FAQ';

const App = () => (
  <BrowserRouter>
    <MainLayout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/info" component={Info} />
        <Route exact path="/faq" component={FAQ} />
      </Switch>
    </MainLayout>
  </BrowserRouter>
);

export default App;
