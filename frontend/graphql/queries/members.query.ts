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

export type MembersData = {
  members: {
    id: string
    name: string
    combatPower: number
  }[];
}
