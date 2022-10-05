import { NextPage } from 'next'
import { BiTrash } from 'react-icons/bi'

import { MEMBERS_QUERY } from '@/graphql/queries/members.query'
import { useDeleteMemberMutation } from '@/graphql/generated'

type PostsListProps = {
  deleteMemberId: string
}

const DeleteMember: NextPage<PostsListProps> = ({ deleteMemberId }) => {
  const [deleteMember, { error }] = useDeleteMemberMutation({
    refetchQueries: [{ query: MEMBERS_QUERY }],
    errorPolicy: 'all'
  })
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    deleteMember({ variables: { deleteMemberId } })
  }

  return (
    <>
    <BiTrash />
      {/* { error && <p>{error.message}</p> }
      <form onSubmit={(e) => handleSubmit(e)}>
        <button type='submit'>削除</button>
      </form> */}
    </>
  )
}

export default DeleteMember
