import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./HomePage";
import { Redirect } from "react-router";
import Pricing from "./Pricing";
import { Login } from "@mui/icons-material";
import PersistentDrawerLeft from "./UserEditPage";
import FAQs from "./FAQs";
import Signin from "./Signin";
export default function UserHomePage(){
    return(
        <>
        <Router>
        <header class="p-3 bg-primary text-white-warning  ">
          <div class="container">
            <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <a
                href="/"
                class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
              >
                <svg
                  class="bi me-2"
                  width="40"
                  height="32"
                  role="img"
                  aria-label="Bootstrap"
                >
                  <use href="#bootstrap"></use>
                </svg>
              </a>

              <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li>
                  <Link to="/UserHome" class="nav-link px-2 text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/UserFeatures" class="nav-link px-2 text-white">
                    Features
                  </Link>
                </li>
                <li>
                  <Link to="/UserPricing" class="nav-link px-2 text-white">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link to="/UserFAQs" class="nav-link px-2 text-white">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link to="/UserAbout" class="nav-link px-2 text-white">
                    About
                  </Link>
                </li>
              </ul>

              <div class="text-end">
                <Link to="/UserLogout" class="btn btn-light">
                  Logout
                </Link>
              </div>
            </div>
          </div>
        </header>
        <Switch>
          <Redirect exact from ="/UserHomePage" to="/UserHome"/>
          <Route path="/UserHome">
            <PersistentDrawerLeft />
          </Route>
          <Route path="/UserFeatures">
            <HomePage />
          </Route>
          <Route path="/UserPricing">
            <Pricing />
          </Route>
          <Route path="/UserFAQs">
            <FAQs />
          </Route>
          <Route path="/UserAbout">
            <HomePage />
          </Route>
          <Route path="/UserLogout">
            <Signin />
          </Route>
        </Switch>
      </Router>
  </>    );
}