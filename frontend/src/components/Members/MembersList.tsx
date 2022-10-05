import { NextPage } from 'next'

import { useMemberListQuery } from '@/graphql/generated'
import UpdateMember from './UpdateMember'
import DeleteMember from './DeleteMember'

const MembersList: NextPage = () => {
  const { loading, error, data } = useMemberListQuery()

  if (loading || !data) return <p>Loading...</p>
  if (error) return <p>Error: {JSON.stringify(error)}</p>
  if (!data) return null

  const { members } = data
  if (!members) return null

  const maxCombatPower = () => members.map(member => member.combatPower).reduce((a, b) => Math.max(a, b))
  const widthParcent = (combatPower: number) => combatPower / maxCombatPower() * 100

  return (
    <ul>
      <li className='flex flex-row text-center text-xs font-bold p-2'>
        <div className='basis-3/12'>
          名前
        </div>
        <div className='basis-7/12'>
          戦闘力
        </div>
      </li>
      {members.map((member, index) => {
        return (
          <li key={index} className='flex flex-row px-2 py-3 items-center hover:bg-gray-100'>
            <div className='basis-3/12'>
              {member.name}
            </div>
            <div className='basis-7/12'>
              <div
                className='bg-gradient-to-r from-yellow-500 to-red-500 min-w-[15%] rounded text-white font-bold p-2'
                style={{ width: `${widthParcent(member.combatPower)}%` }}
              >
                {member.combatPower}
              </div>
            </div>
            <div className='basis-1/12'>
              <UpdateMember memberProps={{ updateMemberId: member.id, name: member.name, combatPower: member.combatPower }} />
            </div>
            <div className='basis-1/12'>
              <DeleteMember deleteMemberId={member.id} />
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default MembersList
