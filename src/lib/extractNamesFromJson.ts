// The reason for these interfaces is so that typescript neatly throws an error when a user 
// adds a json that is not a followers.json or following.json format 

interface ExpectedJSON {
  title: string;
  media_list_data: unknown[];
  string_list_data: stringListData[];
}

interface stringListData{
  href: string;
  value: string;
  timestamp: number;
}

export default function ExtractNamesFromJson(json: ExpectedJSON[]) {
  const usernames = json.map(user => user.string_list_data[0].value);
  return usernames;
}
