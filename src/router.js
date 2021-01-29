import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';

import Products from './routes/ProductDemo/index';
import MainPage from './routes/MainPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/products" exact component={Products} />
        <Route path="/mainpage" exact component={MainPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
