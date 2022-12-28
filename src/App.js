import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import Layout from './components/layout/Layout';
import AddQuotes  from './pages/AddQuotes';
import AllQuotes from './pages/AllQuotes';
import DetailQuotes from './pages/DetailQuotes';
import NotFound from './pages/NotFound';



function App() {
  return (
    <React.Fragment>
      <Layout>
        <Switch>
        <Route path="/" exact>
                <Redirect to="/quotes"/>
          </Route>
          <Route path="/quotes" exact>
                <AllQuotes/>
          </Route>
          <Route path="/quotes/:quoteId">
                <DetailQuotes/>
          </Route>
          <Route path="/add-quote">
                <AddQuotes/>
          </Route>
          <Route path="/*">
                <NotFound/>
          </Route>
        </Switch>
      </Layout>
    </React.Fragment>
  );
}

export default App;
