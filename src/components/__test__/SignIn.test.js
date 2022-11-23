import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import SignInForm from "../../pages/auth/SignInForm.js";

test("render Home page", () => {
  render(
    <Router>
      <SignInForm />
    </Router>
  );

  const username = screen.getByText("Username");
  expect(username).toBeInTheDocument();
});
