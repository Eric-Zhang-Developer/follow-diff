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

// Other tests are not necessary here because Typescript already validates the json as formed properly
// If the json is bad then we throw an error outside 

describe("Extract Names Function Tests", () => {
  describe("Core Logic", () => {
    // Happy path
    it("should return an array of usernames when a proper json is input", () => {
      const result = ExtractNamesFromJson(data);
      expect(result).toEqual(["POTUS", "NASA"]);
    });
  });
});
