import { Query } from "./Query/Query";
import { Mutation } from "./Mutation/Mutation";

export interface UserInfo {
  name: string;
  email: string;
  password: string;
  bio?: string;
}

export const resolvers = {
  Query,
  Mutation,
};
