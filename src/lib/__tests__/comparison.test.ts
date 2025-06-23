import Compare from "../comparison"; 

describe('Comparison Tests', () => {
  it('should return an array of users who are in the following list but not the followers list', () => {
    const followers = ["Alice", "Brenda"];
    const following = ["Alice", "Brenda", "Charlie"];
    const result = Compare(following, followers);

    expect(result).toEqual(["Charlie"]); 
  });

  it('should return an empty array when both lists are empty' , () => {
    const followers = [""];
    const following = [""];
    const result = Compare(following, followers);

    expect(result).toEqual([]);
  })
});