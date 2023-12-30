import Home from "./components/Home";
import New from "./components/New";
import Header from "./components/Header";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Header />
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/new">
              <New />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
      </Router>
    </>
  );

}

export default App;
