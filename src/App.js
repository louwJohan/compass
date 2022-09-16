import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import SignInForm from "./pages/auth/SignInForm";
import SignUpForm from "./pages/auth/SignUpForm";
import Home from "./pages/home/Home";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import Sell from "./pages/listings/Sell";
import ListingListDisplay from "./pages/listings/ListingListDisplay";
import ListingPage from "./pages/listings/ListingPage";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />

      <Container>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/buy" render={() => <ListingListDisplay />} />
          <Route exact path="/sell" render={() => <Sell />} />
          <Route exact path="/rent" render={() => <h1>Rent</h1>} />
          <Route exact path="/signin" render={() => <SignInForm />} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route exact path="/profile" render={() => <h1>Profile</h1>} />
          <Route exact path="/listing/:id" render={() => <ListingPage />} />
          <Route render={() => <p>Page not found!</p>} />
        </Switch>
      </Container>
      <hr></hr>
      <Container></Container>
    </div>
  );
}

export default App;
