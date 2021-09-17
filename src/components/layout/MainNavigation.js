import { NavLink } from "react-router-dom";
import { useContext } from "react";
import classes from "./MainNavigation.module.css";
import AuthContext from "../../Store/authcontext";

const MainNavigation = () => {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  return (
    <header className={classes.header}>
      <div>
        <NavLink to="/quotes" className={classes.home}>
          Quotes
        </NavLink>
      </div>
      <nav className={classes.nav}>
        <ul>
          {isLoggedIn && (
            <li>
              <NavLink to="/quotes" activeClassName={classes.active}>
                All Quotes
              </NavLink>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <NavLink to="/newquotes" activeClassName={classes.active}>
                Add a New Quote
              </NavLink>
            </li>
          )}
          {!isLoggedIn && (
            <li>
              <NavLink to="/login" activeClassName={classes.active}>
                Login
              </NavLink>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <NavLink to="/profile" activeClassName={classes.active}>
                Profile
              </NavLink>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <button>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
