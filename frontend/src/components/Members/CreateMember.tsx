import { useState } from 'react'
import { NextPage } from 'next'

import { MEMBERS_QUERY } from '@/graphql/queries/members.query'
import { useCreateMemberMutation } from '@/graphql/generated'

interface PostsListProps {}

const CreateMember: NextPage<PostsListProps> = () => {
  const [member, setMember] = useState({ name: '', combatPower: 1 })
  const [createMember, { error }] = useCreateMemberMutation({
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
    <div className='flex flex-row bg-white p-2'>
      { error && <p>{error.message}</p> }
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          名前: <input type="text" name='name' value={member.name} required onChange={(e) => handleNameChange(e)} />
        </div>
        <div>
          戦闘力: <input type="number" name='combatPower' value={member.combatPower} min='1' onChange={(e) => handleCombatPowerChange(e)} />
        </div>
        <button type='submit'>作成</button>
      </form>
    </div>
  );
};

export default CreateMember