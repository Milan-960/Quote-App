import { Fragment } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";

const Dummy_Quotes = [
  { id: "m1", author: "Milan", text: "Learning React is fun!!" },
  { id: "m2", author: "Amit", text: "Happy Journey Jay" },
];

const QuoteDetail = () => {
  const match = useRouteMatch();
  const params = useParams();

  console.log(match);

  const quote = Dummy_Quotes.find((quote) => quote.id === params.quoteList);

  if (!quote) {
    return <p> No Quote Found!!</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};
export default QuoteDetail;
