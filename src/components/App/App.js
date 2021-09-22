import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Info from '../Info/Info';
import Home from '../Home/HomeContainer';
import MainLayout from '../MainLayout/MainLayout';

const App = () => (
  <BrowserRouter>
    <MainLayout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/info" component={Info} />
      </Switch>
    </MainLayout>
  </BrowserRouter>
);

export default App;
