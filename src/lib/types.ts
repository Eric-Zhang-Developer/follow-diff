import { z } from "zod";

// Using Zod
// The reason for these interfaces is so that typescript neatly throws an error when a user
// adds a json that is not a followers.json or following.json format

const stringListDataSchema = z.object({
  href: z.string(),
  value: z.string(),
  timestamp: z.number(),
});

const ExpectedJSONSchema = z.object({
  title: z.string(),
  media_list_data: z.array(z.unknown()),
  string_list_data: z.array(stringListDataSchema),
});


// I have no idea why the following list has an extra relationships layer but followers does not
// Zucc going to Zucc 
export const FollowingListSchema = z.object({
  relationships_following: z.array(ExpectedJSONSchema),
});

export const FollowerListSchema = z.array(ExpectedJSONSchema);

// Types for extractNamesFromJson
export type FollowingList = z.infer<typeof FollowingListSchema>['relationships_following'];
export type FollowerList = z.infer<typeof FollowerListSchema>;