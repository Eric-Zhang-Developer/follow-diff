// Calculates the difference between two lists of users to find who is not following back.
// Uses a set to reduce time from O(n*m) to O(n + m)
// For each user name in your following it checks to see if its in the followers set, O(n) time total
export default function Compare(followingData: string[], followerData: string[]) {
  const followerDataSet = new Set(followerData);
  const doesNotFollowBack = followingData.filter(userName => {
    return !followerDataSet.has(userName);
  });
  return doesNotFollowBack;
}


