export const typeDefs = `#graphql
  type Query {
    myProfile: User
    users: [User]
    posts: [Post]
  }

  type Mutation {
    signup(
      name: String!,
      email: String!,
      password: String!,
      bio: String
    ): AuthPayload,

    signin(
      email: String!,
      password: String!
    ): AuthPayload
  }

  type AuthPayload {
    error: String
    token: String
  }

  type Post {
    id: ID!
    title: String!
    content: String!
    author: User
    createdAt: String!
    published: Boolean!
  }

  type User {
    id: ID!
    name: String!
    email: String!
    createdAt: String!
    posts: [Post]
  }

  type Profile {
    id: ID!
    bio: String!
    createdAt: String!
    user: User!
  }
`;
