import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './frontend/store/store';
import App from './frontend/components/App';
import Links from './frontend/components/Links';
import NestedLinks from './frontend/components/NestedLinks';
import Users from './frontend/components/Users';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';

const Root = () => {
  const store = configureStore();
  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path='/' component={App}></Route>
        <Route path='links' component={Links}>
          <Route path='nested' component={NestedLinks}></Route>
        </Route>
        <Route path='users/:userId' component={Users}></Route>
      </Router>
    </Provider>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<Root />, root);
});
