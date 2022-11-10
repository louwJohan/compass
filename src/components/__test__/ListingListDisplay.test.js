import { render, screen, fireEvent } from "@testing-library/react";
import ListingListDisplay from "../../pages/listings/ListingListDisplay.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { CurrentUserProvider } from "../../contexts/CurrentUserContext";

test("render buy property listings", () => {
  render(
    <Router>
      <CurrentUserProvider>
        <ListingListDisplay
          message="No results found."
          filter={`commerce_type=rent`}
        />
      </CurrentUserProvider>
    </Router>
  );
});
