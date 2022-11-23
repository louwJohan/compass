import { render, screen } from "@testing-library/react";
import ListingListDisplay from "../../pages/listings/ListingListDisplay.js";
import { BrowserRouter as Router } from "react-router-dom";
import { CurrentUserProvider } from "../../context/CurrentUserContext";

test("render buy property listings", async () => {
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

  const listingDetails = await screen.findByRole("link", {
    name: "Listing Details",
  });
  expect(listingDetails).toBeInTheDocument();
});
