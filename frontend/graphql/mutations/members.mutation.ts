import { gql } from '@apollo/client'

export const CREATE_MEMBER = gql`
  mutation CreateMember($name: String!, $combatPower: Int!) {
    createMember(data: { name: $name, combatPower: $combatPower }) {
      id
      name
      combatPower
    }
  }
`

export type CreateMemberType = {
  members: {
    id: string
    name: string
    combatPower: number
  }
}