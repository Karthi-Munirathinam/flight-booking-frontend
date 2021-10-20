import "./App.css";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Search from "./components/Search";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/'>
            <Search />
          </Route>
        </Switch>
        {/* navbar -> company and login/register/forgot password*/}
        {/* search flights */}
        {/* search results */}
        {/* booking */}
        {/* payment */}
        {/* footer */}
        {/* flight seat layout */}
        {/* ticket */}
      </div>
    </Router>
  );
}

export default App;
