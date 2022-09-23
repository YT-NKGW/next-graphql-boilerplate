import { gql } from '@apollo/client'

export const MEMBERS_QUERY = gql`
  query MemberList {
    members {
      id
      name
      combatPower
    }
  }
`
