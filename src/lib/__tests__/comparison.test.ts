import Compare from "../comparison"; 

describe('Comparison Tests', () => {
  it('should return an array of users who are in the following list but not the followers list', () => {

    const followers = ["Alice", "Brenda"];
    const following = ["Alice", "Brenda", "Charlie"];
    const result = Compare(followers, following);

    expect(result).toEqual(["Charlie"]); 
  });
});