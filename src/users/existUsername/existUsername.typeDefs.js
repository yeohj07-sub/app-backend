import { gql } from "apollo-server";

export default gql`
  type ExistUsernameResult {
    ok: Boolean!
    error: String
  }
  type Mutation {
    existUsername(username: String!): ExistUsernameResult!
  }
`;
