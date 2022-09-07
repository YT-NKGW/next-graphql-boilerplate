import { gql } from 'apollo-server'

const typeDefs = gql`
  type Query {
    members(query: String): [Member!]!
  }

  type Mutation {
    createMember(data: CreateMemberInput!): Member!
    deleteMember(id: ID!): Member!
    updateMember(id: ID!, data: UpdateMemberInput!): Member!
  }

  input CreateMemberInput {
    name: String!
    combatPower: Int!
  }

  input UpdateMemberInput {
    name: String!
    combatPower: Int!
  }

  type Member {
    id: ID!
    name: String!
    combatPower: Int!
  }
`

export default typeDefs