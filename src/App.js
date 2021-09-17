import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// import AllQuotes from "./pages/AllQuotes";
// import QuoteDetail from "./pages/QuoteDetail";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import UserProfile from "./components/Profile/UserProfile";

const NewQuotes = React.lazy(() => import("./pages/NewQuotes"));
const QuoteDetail = React.lazy(() => import("./pages/QuoteDetail"));
const AllQuotes = React.lazy(() => import("./pages/AllQuotes"));
const AuthPage = React.lazy(() => import("./pages/AuthPage"));

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Switch>
          <Route path="/" exact>
            <Redirect to="quotes" />
          </Route>
          <Route path="/quotes" exact>
            <AllQuotes />
          </Route>
          <Route path="/quotes/:quoteId">
            <QuoteDetail />
          </Route>
          <Route path="/newquotes">
            <NewQuotes />
          </Route>
          <Route path="/login">
            <AuthPage />
          </Route>
          <Route path="/profile">
            <UserProfile />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
