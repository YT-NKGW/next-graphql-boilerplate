import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { CREATE_MEMBER, CreateMemberType } from '../../graphql/mutations/members.mutation'
import { MEMBERS_QUERY } from '../../graphql/queries/members.query'
import { NextPage } from 'next'

interface PostsListProps {}

const MembersList: NextPage<PostsListProps> = () => {
  const [member, setMember] = useState({ name: '', combatPower: 1 })
  const [createMember, { error }] = useMutation<CreateMemberType>(CREATE_MEMBER, {
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
    const { data } = await createMember({ variables: { name: member.name, combatPower: member.combatPower } })
    if (data) { setMember({ name: '', combatPower: 0 }) }
  }

  return (
    <>
      { error && <p>{error.message}</p> }
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" name='name' value={member.name} required onChange={(e) => handleNameChange(e)} />
        <input type="number" name='combatPower' value={member.combatPower} min='1' onChange={(e) => handleCombatPowerChange(e)} />
        <button type='submit'>作成</button>
      </form>
    </>
  );
};

export default MembersList