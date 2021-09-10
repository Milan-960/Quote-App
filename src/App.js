import { Route, Switch, Redirect } from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import NewQutoes from "./pages/NewQuotes";
import QuoteDetail from "./pages/QuoteDetail";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="quotes" />
        </Route>
        <Route path="/quotes" exact>
          <AllQuotes />
        </Route>
        <Route path="/quotes/:quotelist">
          <QuoteDetail />
        </Route>
        <Route path="/newquotes">
          <NewQutoes />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
