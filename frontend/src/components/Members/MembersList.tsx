import { NextPage } from 'next'

import { useMemberListQuery } from '@/graphql/generated'
import UpdateMember from './UpdateMember'
import DeleteMember from './DeleteMember'

interface PostsListProps {}

const MembersList: NextPage<PostsListProps> = () => {
  const { loading, error, data } = useMemberListQuery()

  if (loading || !data) return <p>Loading...</p>
  if (error) return <p>Error: {JSON.stringify(error)}</p>
  if (!data) return null

  const { members } = data
  if (!members) return null

  return (
    <ul>
      {members.map((member, index) => {
        return (
          <li key={index}>
            {member.name}
            <br />
            戦闘力: {member.combatPower}
            <UpdateMember memberProps={{ updateMemberId: member.id, name: member.name, combatPower: member.combatPower }} />
            <DeleteMember deleteMemberId={member.id} />
          </li>
        );
      })}
    </ul>
  );
};

export default MembersList;