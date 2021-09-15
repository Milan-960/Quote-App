import classes from "./NoQuotesFound.module.css";
import { Link } from "react-router-dom";

const NoQuotesFound = () => {
  return (
    <div className={classes.noquotes}>
      <p>!! No Quote Found !!</p>
      <Link className="btn" to="/newquotes">
        Add a Quote
      </Link>
    </div>
  );
};

export default NoQuotesFound;
