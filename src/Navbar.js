import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FAQs from "./FAQs";
import HomePage from "./HomePage";
import Pricing from "./Pricing";
import Signin from "./Signin";
import Signup from "./Signup";

export default function Navbar(){
    return(
        <>
        <Router>
<header class="p-3 bg-primary text-white-warning  ">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use href="#bootstrap"></use></svg>
        </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li>
          <Link to="/Home" class="nav-link px-2 text-white">
                  Home
                </Link></li>
          <li><Link to="/Features" class="nav-link px-2 text-white">
                  Features
                </Link></li>
          <li><Link to="/Pricing" class="nav-link px-2 text-white">Pricing</Link></li>
          <li><Link to="/FAQs" class="nav-link px-2 text-white">FAQs</Link></li>
          <li><Link to="/About" class="nav-link px-2 text-white">About</Link></li>
        </ul>

        <div class="text-end">
        <Link to="/Login" class="btn btn-outline-light me-2">Login</Link>
        <Link to="/Signup" class="btn btn-warning">Get Started</Link>
        </div>
      </div>
    </div>
  </header>
  <Switch>
          <Route path="/Home">
            <HomePage />
          </Route>
          <Route path="/Features">
          <HomePage />
          </Route>
          <Route path="/Pricing">
          <Pricing />
          </Route>
          <Route path="/FAQs">
            <FAQs />
          </Route>
          <Route path="/About">
            <HomePage />
          </Route>
          <Route path="/Login">
          <Signin />
          </Route>
          <Route path="/Signup">
          <Signup />
          </Route>
          <Route path="/my-drive">
          <HomePage />
          </Route>
          <Route path="/my-drive-upload">
          <HomePage />
          </Route>
        </Switch>
      </Router>
  </>    );
}