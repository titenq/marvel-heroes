import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import Loading from './components/Loading';
import Home from './pages/Home';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';

const Characters = lazy(() => import('./pages/Characters'));
const Comics = lazy(() => import('./pages/Comics'));

const Routes = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/comics' component={Comics} />
        <Route exact path='/characters' component={Characters} />
        <Route exact path='/login' component={Login} />
        <Route component={PageNotFound} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
