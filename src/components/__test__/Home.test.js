import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "../../pages/home/Home";

/* 
Test to see if Home page is rendered
*/
test("render Home page", () => {
  render(
    <Router>
      <Home />
    </Router>
  );

  const sell = screen.getByRole("link", { name: "Buy Find the perfect house" });
  expect(sell).toBeInTheDocument();
});
