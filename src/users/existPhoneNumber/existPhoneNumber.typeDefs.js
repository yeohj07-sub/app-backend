import { gql } from "apollo-server";

export default gql`
  type ExistPhoneNumberResult {
    ok: Boolean!
    error: String
  }
  type Mutation {
    existPhoneNumber(phoneNumber: String!): ExistPhoneNumberResult!
  }
`;
