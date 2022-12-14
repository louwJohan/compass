import { render, screen } from "@testing-library/react";
import Profile from "../../pages/profile/Profile";
import { BrowserRouter as Router } from "react-router-dom";
import { CurrentUserProvider } from "../../context/CurrentUserContext";

test("profile be displayed for logged in user", async () => {
  render(
    <Router>
      <CurrentUserProvider>
        <Profile />
      </CurrentUserProvider>
    </Router>
  );
  const editProfile = await screen.findByText("Edit Profile");

  expect(editProfile).toBeInTheDocument();
});
