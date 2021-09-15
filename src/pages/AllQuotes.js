import QuoteList from "../components/quotes/QuoteList";
import useHttp from "../Hooks/useHttp";
import { getAllQuotes } from "../Lib/api";

const Dummy_Quotes = [
  { id: "m1", author: "Milan", text: "Learning React is fun!!" },
  { id: "m2", author: "Amit", text: "Happy Journey Jay" },
];

const AllQuotes = () => {
  return <QuoteList quotes={Dummy_Quotes} />;
};

export default AllQuotes;
