import Home from "./components/Home";
import New from "./components/New";
import Header from "./components/Header";
import Login from "./components/Login";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Header />
          <Routes>
            <Route path="/login" element={ <Login /> } />
            <Route path="/new" element={ <New /> } />
            <Route path="/" element={ <Home /> } />
          </Routes>
      </Router>
    </>
  );

}

export default App;
