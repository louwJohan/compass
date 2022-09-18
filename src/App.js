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
import { useCurrentUser } from "./context/CurrentUserContext";

function App() {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";
  return (
    <div className={styles.App}>
      <NavBar />

      <Container>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route
            exact
            path="/buy"
            render={() => (
              <ListingListDisplay
                message="No results found. Adjust the search keyword or follow a user."
                filter={`commerce_type=sell`}
              />
            )}
          />
          <Route exact path="/sell" render={() => <Sell />} />
          <Route
            exact
            path="/rent"
            render={() => (
              <ListingListDisplay
                message="No results found. Adjust the search keyword or follow a user."
                filter={`commerce_type=rent`}
              />
            )}
          />
          <Route
            exact
            path="/saved"
            render={() => (
              <ListingListDisplay
                message="No results found. Adjust the search keyword or follow a user."
                filter={`saved__owner__profile=${profile_id}&ordering=-saved__created_at&`}
              />
            )}
          />
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
