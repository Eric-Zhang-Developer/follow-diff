import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "../page";
// fs and path are for the malformed json so Jest does not freak out and throw a syntax error
import fs from "fs";
import path from "path";

import mockFollowers from "./__fixtures__/followers.json";
import mockFollowing from "./__fixtures__/following.json";
import nonConformingData from "./__fixtures__/nonConformingData.json";

// Since we are testing similar user flows the initial code is almost line for like the same

describe("User Flow", () => {
  describe("On File Upload", () => {
    it("should show the users that don't follow me back and not show mutuals when I drop my following and followers files", async () => {
      // Assemble
      render(<Home></Home>);
      const user = userEvent.setup();
      const followers = new File(
        [JSON.stringify(mockFollowers)],
        "followers.json",
        {
          type: "application/json",
        },
      );
      const following = new File(
        [JSON.stringify(mockFollowing)],
        "following.json",
        {
          type: "application/json",
        },
      );

      // Act
      const fileInput = screen.getByTestId("file-input");
      await user.upload(fileInput, [followers, following]);

      await waitFor(() => {
        expect(screen.queryByTestId("file-input")).not.toBeInTheDocument();
      });

      // Assert
      const nonFollowerFriend = await screen.findByRole("listitem", {
        name: /ex_friend_dorthy/i,
      });
      expect(nonFollowerFriend).toBeInTheDocument();

      const nonFollowerOrganization = await screen.findByRole("listitem", {
        name: /NASA/i,
      });
      expect(nonFollowerOrganization).toBeInTheDocument();

      const mutualFollowerItem = screen.queryByRole("listitem", {
        name: /friend_alice/i,
      });
      expect(mutualFollowerItem).not.toBeInTheDocument();
    });

    // =================== //
    // Single File Uploads
    // =================== //

    it("should display the Followers List Uploaded! banner when uploading a single proper followers.json file", async () => {
      // Assemble
      render(<Home></Home>);
      const user = userEvent.setup();
      const followers = new File(
        [JSON.stringify(mockFollowers)],
        "followers.json",
        {
          type: "application/json",
        },
      );

      // Act
      const fileInput = screen.getByTestId("file-input");
      await user.upload(fileInput, [followers]);

      // Assert
      const followersListUploaded = await screen.findByText(
        "Followers List Uploaded!",
      );
      expect(followersListUploaded).toBeInTheDocument();
    });

    // This is almost the exact same as the previous test cause well its almost the exact same process to check for the banner.
    it("should display the Followers List Uploaded! banner when uploading a single proper followers.json file", async () => {
      // Assemble
      render(<Home></Home>);
      const user = userEvent.setup();
      const following = new File(
        [JSON.stringify(mockFollowing)],
        "following.json",
        {
          type: "application/json",
        },
      );

      // Act
      const fileInput = screen.getByTestId("file-input");
      await user.upload(fileInput, [following]);

      // Assert
      const followingListUploaded = await screen.findByText(
        "Following List Uploaded!",
      );
      expect(followingListUploaded).toBeInTheDocument();
    });

    // ============ //
    // Error States
    // ============ //

    it("should an error message to the user when uploading a single nonConforming json file", async () => {
      // Assemble
      render(<Home></Home>);
      const user = userEvent.setup();
      const nonConforming = new File(
        [JSON.stringify(nonConformingData)],
        "following.json",
        {
          type: "application/json",
        },
      );

      // Act
      const fileInput = screen.getByTestId("file-input");
      await user.upload(fileInput, [nonConforming]);

      // Assert
      const errorFlag = await screen.findByText("Upload Failed!");
      expect(errorFlag).toBeInTheDocument();
    });

    it("should an error message to the user when uploading a single malformed json file", async () => {
      // Assemble
      render(<Home></Home>);
      const user = userEvent.setup();

      // This is the test case where we need fs and path due to syntax error
      const malformedFilePath = path.join(
        __dirname,
        "__fixtures__",
        "malformed.json",
      );
      const malformedFileContent = fs.readFileSync(malformedFilePath, "utf-8");
      const malformedFile = new File([malformedFileContent], "malformed.json", {
        type: "application/json",
      });

      // Act
      const fileInput = screen.getByTestId("file-input");
      await user.upload(fileInput, [malformedFile]);

      // Assert
      const errorFlag = await screen.findByText("Upload Failed!");
      expect(errorFlag).toBeInTheDocument();
    });
  });

  describe("Reset Button", () => {
    it("should return me back to the drop / default section when I hit the reset button", async () => {
      render(<Home></Home>);
      const user = userEvent.setup();
      const followers = new File(
        [JSON.stringify(mockFollowers)],
        "followers.json",
        {
          type: "application/json",
        },
      );
      const following = new File(
        [JSON.stringify(mockFollowing)],
        "following.json",
        {
          type: "application/json",
        },
      );

      // Act (Part 1)
      const fileInput = screen.getByTestId("file-input");
      await user.upload(fileInput, [followers, following]);

      // Assert (Intermediate)
      const resetButton = await screen.findByRole("button", {
        name: /Reset Button/i,
      });
      expect(resetButton).toBeInTheDocument();

      // Act (Part 2)
      await userEvent.click(resetButton);

      // Assert (Final)
      const fileInputAfterReset = await screen.findByTestId("file-input");
      expect(fileInputAfterReset).toBeInTheDocument();
    });
  });

  describe("Try Again Button", () => {
    it("should reset the to the dropbox when the button is clicked", async () => {
      // This logic is almost the exact same for the error button check but we do another step which is clicking to complete the user flow
      // Honestly could be bundled in with the other test but not for clarity

      // Assemble
      render(<Home></Home>);
      const user = userEvent.setup();

      // This is the test case where we need fs and path due to syntax error
      const malformedFilePath = path.join(
        __dirname,
        "__fixtures__",
        "malformed.json",
      );
      const malformedFileContent = fs.readFileSync(malformedFilePath, "utf-8");
      const malformedFile = new File([malformedFileContent], "malformed.json", {
        type: "application/json",
      });

      // Act (Intermediate)
      const fileInput = screen.getByTestId("file-input");
      await user.upload(fileInput, [malformedFile]);

      // Assert (Intermediate)
      const tryAgainButton = await screen.findByText("Try Again");
      expect(tryAgainButton).toBeInTheDocument();

      // Act (Final)
      await user.click(tryAgainButton);

      // Assert (Final)
      const fileInputAfterTryAgain = await screen.findByTestId("file-input");
      expect(fileInputAfterTryAgain).toBeInTheDocument();
    });
  });
});
