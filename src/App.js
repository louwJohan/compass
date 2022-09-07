import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import SignInForm from "./pages/auth/SignInForm";
import SignUpForm from "./pages/auth/SignUpForm";
import Home from "./pages/home/Home";
import Container from "react-bootstrap/Container";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />

      <Container>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/buy" element={<h1>Buy</h1>} />
          <Route exact path="/sell" element={<h1>Sell</h1>} />
          <Route exact path="/rent" element={<h1>Rent</h1>} />
          <Route exact path="/signin" element={<SignInForm />} />
          <Route exact path="/signup" element={<SignUpForm />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
