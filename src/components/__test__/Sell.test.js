import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Sell from "../../pages/listings/Sell";
import { CurrentUserProvider } from "../../context/CurrentUserContext";

test("render listing create form", async () => {
  render(
    <Router>
      <CurrentUserProvider>
        <Sell />
      </CurrentUserProvider>
    </Router>
  );
  const title = await screen.findByText("Title");
  expect(title).toBeInTheDocument();
});

test("Unauthorized user redirected to signin", async () => {
  render(
    <Router>
      <Sell />
    </Router>
  );

  expect(<div />).toMatchInlineSnapshot(`<div />`);
});
