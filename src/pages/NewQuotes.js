import QuoteForm from "../components/quotes/QuoteForm";

const NewQutoes = () => {
  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);
  };
  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQutoes;
