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
import Footer from "./components/Footer";
import Ticket from "./components/Ticket";
import { useState } from "react";
import MyBooking from "./components/MyBooking";

function App() {
  const [signedIn, setSignedIn] = useState(false);
  return (
    <Router>
      <>
        <Navbar signedIn={signedIn} setSignedIn={setSignedIn} />
        <Switch>
          <Route path='/login' exact>
            <Login setSignedIn={setSignedIn} />
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
          <Route path='/flights' exact>
            <SearchResults />
          </Route>
          <Route path='/booking' exact>
            <BookingPage />
          </Route>
          <Route path='/ticket' exact>
            <Ticket />
          </Route>
          <Route path='/mybookings' exact>
            <MyBooking />
          </Route>
          <Route path='/'>
            <Search setSignedIn={setSignedIn} />
          </Route>
        </Switch>
        <Footer />
        {/* navbar*/}
        {/*  */}
        {/*  */}
        {/* booking */}
        {/* payment */}
        {/* flight seat layout */}
        {/* ticket */}
      </>
    </Router>
  );
}

export default App;
