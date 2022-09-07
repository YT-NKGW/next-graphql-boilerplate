import { gql } from '@apollo/client'

export const MEMBERS_QUERY = gql`
  query {
    members {
      id
      name
      combatPower
    }
  }
`

export interface MembersData {
  members: { id: string, name: string, combatPower: number }[];
}
