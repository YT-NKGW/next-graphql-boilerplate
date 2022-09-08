import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CreateMemberInput = {
  combatPower: Scalars['Int'];
  name: Scalars['String'];
};

export type Member = {
  __typename?: 'Member';
  combatPower: Scalars['Int'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createMember: Member;
  deleteMember: Member;
  updateMember: Member;
};


export type MutationCreateMemberArgs = {
  data: CreateMemberInput;
};


export type MutationDeleteMemberArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateMemberArgs = {
  data: UpdateMemberInput;
  id: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  members: Array<Member>;
};


export type QueryMembersArgs = {
  query?: InputMaybe<Scalars['String']>;
};

export type UpdateMemberInput = {
  combatPower: Scalars['Int'];
  name: Scalars['String'];
};

export type CreateMemberMutationVariables = Exact<{
  name: Scalars['String'];
  combatPower: Scalars['Int'];
}>;


export type CreateMemberMutation = { __typename?: 'Mutation', createMember: { __typename?: 'Member', id: string, name: string, combatPower: number } };

export type UpdateMemberMutationVariables = Exact<{
  updateMemberId: Scalars['ID'];
  data: UpdateMemberInput;
}>;


export type UpdateMemberMutation = { __typename?: 'Mutation', updateMember: { __typename?: 'Member', id: string, name: string, combatPower: number } };

export type DeleteMemberMutationVariables = Exact<{
  deleteMemberId: Scalars['ID'];
}>;


export type DeleteMemberMutation = { __typename?: 'Mutation', deleteMember: { __typename?: 'Member', id: string, name: string, combatPower: number } };

export type MemberListQueryVariables = Exact<{ [key: string]: never; }>;


export type MemberListQuery = { __typename?: 'Query', members: Array<{ __typename?: 'Member', id: string, name: string, combatPower: number }> };


export const CreateMemberDocument = gql`
    mutation CreateMember($name: String!, $combatPower: Int!) {
  createMember(data: {name: $name, combatPower: $combatPower}) {
    id
    name
    combatPower
  }
}
    `;
export type CreateMemberMutationFn = Apollo.MutationFunction<CreateMemberMutation, CreateMemberMutationVariables>;

/**
 * __useCreateMemberMutation__
 *
 * To run a mutation, you first call `useCreateMemberMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMemberMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMemberMutation, { data, loading, error }] = useCreateMemberMutation({
 *   variables: {
 *      name: // value for 'name'
 *      combatPower: // value for 'combatPower'
 *   },
 * });
 */
export function useCreateMemberMutation(baseOptions?: Apollo.MutationHookOptions<CreateMemberMutation, CreateMemberMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateMemberMutation, CreateMemberMutationVariables>(CreateMemberDocument, options);
      }
export type CreateMemberMutationHookResult = ReturnType<typeof useCreateMemberMutation>;
export type CreateMemberMutationResult = Apollo.MutationResult<CreateMemberMutation>;
export type CreateMemberMutationOptions = Apollo.BaseMutationOptions<CreateMemberMutation, CreateMemberMutationVariables>;
export const UpdateMemberDocument = gql`
    mutation UpdateMember($updateMemberId: ID!, $data: UpdateMemberInput!) {
  updateMember(id: $updateMemberId, data: $data) {
    id
    name
    combatPower
  }
}
    `;
export type UpdateMemberMutationFn = Apollo.MutationFunction<UpdateMemberMutation, UpdateMemberMutationVariables>;

/**
 * __useUpdateMemberMutation__
 *
 * To run a mutation, you first call `useUpdateMemberMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMemberMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMemberMutation, { data, loading, error }] = useUpdateMemberMutation({
 *   variables: {
 *      updateMemberId: // value for 'updateMemberId'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateMemberMutation(baseOptions?: Apollo.MutationHookOptions<UpdateMemberMutation, UpdateMemberMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateMemberMutation, UpdateMemberMutationVariables>(UpdateMemberDocument, options);
      }
export type UpdateMemberMutationHookResult = ReturnType<typeof useUpdateMemberMutation>;
export type UpdateMemberMutationResult = Apollo.MutationResult<UpdateMemberMutation>;
export type UpdateMemberMutationOptions = Apollo.BaseMutationOptions<UpdateMemberMutation, UpdateMemberMutationVariables>;
export const DeleteMemberDocument = gql`
    mutation DeleteMember($deleteMemberId: ID!) {
  deleteMember(id: $deleteMemberId) {
    id
    name
    combatPower
  }
}
    `;
export type DeleteMemberMutationFn = Apollo.MutationFunction<DeleteMemberMutation, DeleteMemberMutationVariables>;

/**
 * __useDeleteMemberMutation__
 *
 * To run a mutation, you first call `useDeleteMemberMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteMemberMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteMemberMutation, { data, loading, error }] = useDeleteMemberMutation({
 *   variables: {
 *      deleteMemberId: // value for 'deleteMemberId'
 *   },
 * });
 */
export function useDeleteMemberMutation(baseOptions?: Apollo.MutationHookOptions<DeleteMemberMutation, DeleteMemberMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteMemberMutation, DeleteMemberMutationVariables>(DeleteMemberDocument, options);
      }
export type DeleteMemberMutationHookResult = ReturnType<typeof useDeleteMemberMutation>;
export type DeleteMemberMutationResult = Apollo.MutationResult<DeleteMemberMutation>;
export type DeleteMemberMutationOptions = Apollo.BaseMutationOptions<DeleteMemberMutation, DeleteMemberMutationVariables>;
export const MemberListDocument = gql`
    query MemberList {
  members {
    id
    name
    combatPower
  }
}
    `;

/**
 * __useMemberListQuery__
 *
 * To run a query within a React component, call `useMemberListQuery` and pass it any options that fit your needs.
 * When your component renders, `useMemberListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMemberListQuery({
 *   variables: {
 *   },
 * });
 */
export function useMemberListQuery(baseOptions?: Apollo.QueryHookOptions<MemberListQuery, MemberListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MemberListQuery, MemberListQueryVariables>(MemberListDocument, options);
      }
export function useMemberListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MemberListQuery, MemberListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MemberListQuery, MemberListQueryVariables>(MemberListDocument, options);
        }
export type MemberListQueryHookResult = ReturnType<typeof useMemberListQuery>;
export type MemberListLazyQueryHookResult = ReturnType<typeof useMemberListLazyQuery>;
export type MemberListQueryResult = Apollo.QueryResult<MemberListQuery, MemberListQueryVariables>;