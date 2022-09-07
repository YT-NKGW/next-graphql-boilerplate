import { useQuery } from '@apollo/client';
import { MEMBERS_QUERY, MembersData } from '../graphql/queries/members.query';
import { NextPage } from 'next';

interface PostsListProps {}

const MembersList: NextPage<PostsListProps> = () => {
  const { loading, error, data } = useQuery<MembersData>(MEMBERS_QUERY);

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
          </li>
        );
      })}
    </ul>
  );
};

export default MembersList;