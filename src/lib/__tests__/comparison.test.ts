import Compare from "../comparison";

describe("Comparison Tests", () => {
  describe("Core Logic", () => {
    it("should return an array of users who are in the following list but not the followers list", () => {
      const followers = ["Alice", "Brenda"];
      const following = ["Alice", "Brenda", "Charlie"];
      const result = Compare(following, followers);

      expect(result).toEqual(["Charlie"]);
    });

    it("should return an empty array when both lists are empty", () => {
      const followers: string[] = [];
      const following: string[] = [];
      const result = Compare(following, followers);

      expect(result).toEqual([]);
    });

    it("should return the entire following list if there are not followers to compare to", () => {
      const followers: string[] = [];
      const following = ["Alice", "Brenda", "Charlie", "David"];
      const result = Compare(following, followers);

      expect(result).toEqual(following);
    });
  });

  describe("Business Logic", () => {
    it("should return ex-friend if my ex-friend unfollowed me", () => {
      const followers = ["friend"];
      const following = ["friend", "ex_friend"];
      const result = Compare(following, followers);

      expect(result).toEqual(["ex_friend"]);
    });

    it("should return only celebrities that I expect when no one unfollows me", () => {
      const followers = ["friend", "friend_2"];
      const following = ["friend", "friend_2", "POTUS", "Tom_Cruise"];
      const result = Compare(following, followers);

      expect(result).toEqual(["POTUS", "Tom_Cruise"]);
    });

    it("should return no accounts when I don't follow accounts who follow me", () => {
      const followers = ["friend", "friend_2", "spam_bot"];
      const following = ["friend", "friend_2"];
      const result = Compare(following, followers);

      expect(result).toEqual([]);
    });

    it("should return ex-friend AND celebrity accounts when my ex-friend unfollows me and I follow brand / celerity accounts I don't expect to follow me back", () => {
      const followers = ["friend"];
      const following = ["friend", "ex_friend", "POTUS", "Tom_Cruise"];
      const result = Compare(following, followers);

      expect(result).toEqual(["ex_friend", "POTUS", "Tom_Cruise"]);
    });

  });
});
