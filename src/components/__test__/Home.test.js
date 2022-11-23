import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "../../pages/home/Home";

test("render Home page", () => {
  render(
    <Router>
      <Home />
    </Router>
  );

  const sell = screen.getByRole("link", { name: "Buy Find the perfect house" });
  expect(sell).toBeInTheDocument();
});
