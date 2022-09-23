import { useState } from 'react'
import { NextPage } from 'next'

import { MEMBERS_QUERY } from '@/graphql/queries/members.query'
import { useUpdateMemberMutation } from '@/graphql/generated'

type PostsListProps = {
  memberProps: {
    updateMemberId: string
    name: string
    combatPower: number
  }
}

const UpdateMember: NextPage<PostsListProps> = ({ memberProps }) => {
  const [member, setMember] = useState({ name: memberProps.name, combatPower: memberProps.combatPower })
  const [updateMember, { error }] = useUpdateMemberMutation({
    refetchQueries: [{ query: MEMBERS_QUERY }],
    errorPolicy: 'all'
  })
  const handleNameChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget
    setMember(prev => ({ ...prev, name: value }))
  }
  const handleCombatPowerChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget
    setMember(prev => ({ ...prev, combatPower: Number(value) }))
  }
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await updateMember({
      variables: {
        updateMemberId: memberProps.updateMemberId,
        data: {
          name: member.name,
          combatPower: member.combatPower
        }
      }
    })
  }

  return (
    <>
      { error && <p>{error.message}</p> }
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          名前: <input type="text" name='name' value={member.name} required onChange={(e) => handleNameChange(e)} />
        </div>
        <div>
          戦闘力: <input type="number" name='combatPower' value={member.combatPower} min='1' onChange={(e) => handleCombatPowerChange(e)} />
        </div>
        <button type='submit'>更新</button>
      </form>
    </>
  );
};

export default UpdateMember