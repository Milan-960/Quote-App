import { Fragment } from "react";
import { useParams, Route } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const Dummy_Quotes = [
  { id: "m1", author: "Milan", text: "Learning React is fun!!" },
  { id: "m2", author: "Amit", text: "Happy Journey Jay" },
];

const QuoteDetail = () => {
  const params = useParams();
  const quote = Dummy_Quotes.find((quote) => quote.id === params.quotelist);

  if (!quote) {
    return <p> No Qute Found!!</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};
export default QuoteDetail;
