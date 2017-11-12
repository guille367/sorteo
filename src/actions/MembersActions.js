import { MembersActionTypes } from './ActionTypes';

export const addMember = (member) => {
  return {
    type: MembersActionTypes.ADD_MEMBER,
    member
  }
}