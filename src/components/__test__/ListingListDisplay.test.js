import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import ListingListDisplay from "../../pages/listings/ListingListDisplay";
import { CurrentUserProvider } from "../../context/CurrentUserContext";
import { ProfileDataProvider } from "../../context/ProfileDataContext";

test("render Listing sell page", async () => {
  render(
    <Router>
      <CurrentUserProvider>
        <ProfileDataProvider>
          <ListingListDisplay
            message="No results found."
            filter={`commerce_type=sell`}
          />
        </ProfileDataProvider>
      </CurrentUserProvider>
    </Router>
  );
  const listing = await screen.findAllByText("Listing Details");
  expect(listing[0]).toBeInTheDocument();
});
