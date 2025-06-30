import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "../page";

import mockFollowers from "./__fixtures__/followers.json";
import mockFollowing from "./__fixtures__/following.json";

// Since we are testing similar user flows the initial code is almost line for like the same

describe("User Flow", () => {
  describe("On File Upload", () => {
    it("should show the users that don't follow me back and not show mutuals when I drop my following and followers files", async () => {
      // Assemble
      render(<Home></Home>);
      const user = userEvent.setup();
      const followers = new File([JSON.stringify(mockFollowers)], "followers.json", {
        type: "application/json",
      });
      const following = new File([JSON.stringify(mockFollowing)], "following.json", {
        type: "application/json",
      });

      // Act
      const fileInput = screen.getByTestId("file-input");
      await user.upload(fileInput, [followers, following]);

      await waitFor(() => {
        expect(screen.queryByTestId("file-input")).not.toBeInTheDocument();
      });

      // Assert
      const nonFollowerFriend = await screen.findByRole("listitem", { name: /ex_friend_dorthy/i });
      expect(nonFollowerFriend).toBeInTheDocument();

      const nonFollowerOrganization = await screen.findByRole("listitem", { name: /NASA/i });
      expect(nonFollowerOrganization).toBeInTheDocument();

      const mutualFollowerItem = screen.queryByRole("listitem", { name: /friend_alice/i });
      expect(mutualFollowerItem).not.toBeInTheDocument();
    });

    it("should display the Followers List Uploaded! banner when uploading a single proper followers.json file", async () => {
      // Assemble
      render(<Home></Home>);
      const user = userEvent.setup();
      const followers = new File([JSON.stringify(mockFollowers)], "followers.json", {
        type: "application/json",
      });

      // Act
      const fileInput = screen.getByTestId("file-input");
      await user.upload(fileInput, [followers]);

      // Assert
      const followersListUploaded = await screen.findByText("Followers List Uploaded!");
      expect(followersListUploaded).toBeInTheDocument();
    });
  });

  describe("Reset Button", () => {
    it("should return me back to the drop / default section when I hit the reset button", async () => {
      render(<Home></Home>);
      const user = userEvent.setup();
      const followers = new File([JSON.stringify(mockFollowers)], "followers.json", {
        type: "application/json",
      });
      const following = new File([JSON.stringify(mockFollowing)], "following.json", {
        type: "application/json",
      });

      // Act (Part 1)
      const fileInput = screen.getByTestId("file-input");
      await user.upload(fileInput, [followers, following]);

      // Assert (Intermediate)
      const resetButton = await screen.findByRole("button", { name: /Reset Button/i });
      expect(resetButton).toBeInTheDocument();

      // Act (Part 2)
      await userEvent.click(resetButton);

      // Assert (Final)
      const fileInputAfterReset = await screen.findByTestId("file-input");
      expect(fileInputAfterReset).toBeInTheDocument();
    });
  });
});
