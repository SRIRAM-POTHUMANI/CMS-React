import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Footer from "./Footer";
import Navbar from "./Navbar";
import UserHomePage from "./UserHomePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/UserHomePage">
            <UserHomePage />
          </Route>
          <Route path="/">
            <Navbar />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
