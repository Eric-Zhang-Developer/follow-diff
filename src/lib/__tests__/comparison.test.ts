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
      const followers = [""];
      const following = [""];
      const result = Compare(following, followers);

      expect(result).toEqual([]);
    });

    it("should return the entire following list if there are not followers to compare to", () => {
      const followers = [""];
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

    it("should return only ex-friend when my ex-friend unfollows me and I follow brand / celerity accounts I don't expect to follow me back", () => {});
  });
});
