import { MembersActionTypes } from '../actions/ActionTypes';

export const members = (state = {}, action) => {
  switch(action.type){
    case MembersActionTypes.ADD_MEMBER:
      return { ...state, [action.member.id]: action.member };
    default:
      return state;
  }
}