import { gql } from "apollo-server";

export default gql`
  type CreateNewAccountResult {
    ok: Boolean!
    error: String
  }
  type Mutation {
    createNewAccount(
      username: String!
      password: String!
      name: String!
      birth: String!
      gender: String!
      phoneNumber: String!
    ): CreateNewAccountResult!
  }
`;
