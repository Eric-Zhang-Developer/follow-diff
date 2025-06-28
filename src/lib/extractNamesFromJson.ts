import { FollowingList, FollowerList } from "./types";

export default function ExtractNamesFromJson(json: FollowingList | FollowerList) {
  const usernames = json.map(user => user.string_list_data[0].value);
  return usernames;
}
