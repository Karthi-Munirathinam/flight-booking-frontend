import "./App.css";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Search from "./components/Search_components/Search";
import SearchResults from "./components/Search_components/SearchResults";
import Login from "./components/SignIN_SignUP_components/Login";
import Register from "./components/SignIN_SignUP_components/Register";
import ForgotPassword from "./components/SignIN_SignUP_components/ForgotPassword";
import ForgotPasswordReset from "./components/SignIN_SignUP_components/ForgotPasswordReset";
import EmailVerified from "./components/SignIN_SignUP_components/EmailVerified";
import BookingPage from "./components/Booking_components/BookingPage";

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route path='/login' exact>
            <Login />
          </Route>
          <Route path='/register' exact>
            <Register />
          </Route>
          <Route path='/forgotpassword' exact>
            <ForgotPassword />
          </Route>
          <Route path='/resetpassword' exact>
            <ForgotPasswordReset />
          </Route>
          <Route path='/verifyemail' exact>
            <EmailVerified />
          </Route>
          <Route path='/flights'>
            <SearchResults />
          </Route>
          <Route path='/booking'>
            <BookingPage />
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
      </>
    </Router>
  );
}

export default App;
