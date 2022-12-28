import { render, screen, fireEvent } from "@testing-library/react";
import NavBar from "../NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import { CurrentUserProvider } from "../../context/CurrentUserContext";
import { ProfileDataProvider } from "../../context/ProfileDataContext";

/*
Test to render nav bar, as logged in user and as not logged in
 */
test("render NavBar", () => {
  render(
    <Router>
      <CurrentUserProvider>
        <ProfileDataProvider>
          <NavBar />
        </ProfileDataProvider>
      </CurrentUserProvider>
    </Router>
  );

  const signInLink = screen.getByRole("link", { name: "Sign In" });
  expect(signInLink).toBeInTheDocument();
});

test("render link to the user profile for a logged in user", async () => {
  render(
    <Router>
      <CurrentUserProvider>
        <ProfileDataProvider>
          <NavBar />
        </ProfileDataProvider>
      </CurrentUserProvider>
    </Router>
  );

  const profileAvatar = await screen.findByText("Profile");
  expect(profileAvatar).toBeInTheDocument();
});

test("renders Sign in and Sign up buttons again on log out", async () => {
  render(
    <Router>
      <CurrentUserProvider>
        <ProfileDataProvider>
          <NavBar />
        </ProfileDataProvider>
      </CurrentUserProvider>
    </Router>
  );

  const signOutLink = await screen.findByRole("link", { name: "Sign out" });
  fireEvent.click(signOutLink);

  const signInLink = await screen.findByRole("link", { name: "Sign In" });
  const signUpLink = await screen.findByRole("link", { name: "Sign Up" });

  expect(signInLink).toBeInTheDocument();
  expect(signUpLink).toBeInTheDocument();
});
