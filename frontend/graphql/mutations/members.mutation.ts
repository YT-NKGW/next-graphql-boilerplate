import { gql } from '@apollo/client'

export const MEMBERS_MUTATION = gql`
  mutation CreateMember($name: String!, $combatPower: Int!) {
    createMember(data: { name: $name, combatPower: $combatPower }) {
      id
      name
      combatPower
    }
  }

  mutation UpdateMember($updateMemberId: ID!, $data: UpdateMemberInput!) {
    updateMember(id: $updateMemberId, data: $data) {
      id
      name
      combatPower
    }
  }

  mutation DeleteMember($deleteMemberId: ID!) {
    deleteMember(id: $deleteMemberId) {
      id
      name
      combatPower
    }
  }
  
`
