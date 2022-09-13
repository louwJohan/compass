import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import SignInForm from "./pages/auth/SignInForm";
import SignUpForm from "./pages/auth/SignUpForm";
import Home from "./pages/home/Home";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />

      <Container>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/buy" render={() => <h1>Buy</h1>} />
          <Route exact path="/sell" render={() => <h1>Sell</h1>} />
          <Route exact path="/rent" render={() => <h1>Rent</h1>} />
          <Route exact path="/signin" render={() => <SignInForm />} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route render={() => <p>Page not found!</p>} />
        </Switch>
      </Container>
      <hr></hr>
      <Container></Container>
    </div>
  );
}

export default App;
