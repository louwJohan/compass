import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import SignUpForm from "../../pages/auth/SignUpForm";

//Test to render sign up page
test("render Home page", () => {
  render(
    <Router>
      <SignUpForm />
    </Router>
  );

  const pass = screen.getByText("Password");
  expect(pass).toBeInTheDocument();
});
