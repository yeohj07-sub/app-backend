import { gql } from "apollo-server";

export default gql`
  type User {
    id: Int!

    mentor: Boolean!

    username: String!
    name: String!
    birth: String!
    gender: String!
    phoneNumber: String!

    counselPrice: Int
    major: String
    field: String

    bio: String
    avatar: String

    firstName: String!
    lastName: String
    photos: [Photo]
    likes: [Like]
    followers: [User]
    following: [User]
    createdAt: String!
    updatedAt: String!
    totalFollowing: Int!
    totalFollowers: Int!
    isMe: Boolean!
    isFollowing: Boolean!
  }
`;
