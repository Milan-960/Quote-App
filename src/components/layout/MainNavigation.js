import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div>
        <NavLink to="/quotes" className={classes.home}>
          Quotes
        </NavLink>
      </div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/quotes" activeClassName={classes.active}>
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink to="/newquotes" activeClassName={classes.active}>
              Add a New Quote
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" activeClassName={classes.active}>
              Login
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile" activeClassName={classes.active}>
              Profile
            </NavLink>
          </li>
          <li>
            <button>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
