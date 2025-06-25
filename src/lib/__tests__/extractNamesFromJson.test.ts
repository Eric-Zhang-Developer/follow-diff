import ExtractNamesFromJson from "../extractNamesFromJson";

const data = [
  {
    title: "",
    media_list_data: [],
    string_list_data: [
      {
        href: "https://www.instagram.com/POTUS",
        value: "POTUS",
        timestamp: 2248397812,
      },
    ],
  },
  {
    title: "",
    media_list_data: [],
    string_list_data: [
      {
        href: "https://www.instagram.com/NASA",
        value: "NASA",
        timestamp: 1267694584,
      },
    ],
  },
];

describe("Extract Names Function Tests", () => {
  describe("Core Logic", () => {
    it("should return an array of usernames when a proper json is input", () => {
      const result = ExtractNamesFromJson(data);
      expect(result).toEqual(["POTUS", "NASA"]);
    });
  });
});
