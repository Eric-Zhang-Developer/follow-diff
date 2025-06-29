import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "../page";

import mockFollowers from "./__fixtures__/followers.json";
import mockFollowing from "./__fixtures__/following.json";

describe("User Flow", () => {
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
});
