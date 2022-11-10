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
import ListingEditForm from "./pages/listings/ListingEditForm";
import Profile from "./pages/profile/Profile";
import EditProfile from "./pages/profile/EditProfile";

function App() {
  const currentUser = useCurrentUser();

  const pk = currentUser?.profile_id || "";
  const owner = currentUser?.pk;

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
                message="No results found."
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
                message="No results found."
                filter={`commerce_type=rent`}
              />
            )}
          />
          <Route
            exact
            path="/saved"
            render={() => (
              <ListingListDisplay
                message="You have no saved listings."
                filter={`saved__owner__profile=${pk}&ordering=-saved__created_at&`}
              />
            )}
          />
          <Route exact path="/signin" render={() => <SignInForm />} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route exact path="/profile" render={() => <Profile />} />
          <Route exact path="/listing/:id" render={() => <ListingPage />} />
          <Route exact path="/edit_profile" render={() => <EditProfile />} />
          <Route
            exact
            path="/listings/:id/edit"
            render={() => <ListingEditForm />}
          />
          <Route
            exact
            path="/mylistings"
            render={() => (
              <ListingListDisplay
                message="You have no listings at the moment."
                filter={`owner=${owner}`}
              />
            )}
          />
          <Route render={() => <p>Page not found!</p>} />
        </Switch>
      </Container>
      <hr></hr>
      <Container></Container>
    </div>
  );
}

export default App;
