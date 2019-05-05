import ACTIONS from "./action";
const defaultState = {
  users: []
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.Types.EDIT_USER: {
      // update state with passed in user
      // let newUser = action.payload;
      // let newState = _.cloneDeep(state);
      // newState.users.push(newUser);
      // return newState;
      break;
    }

    case ACTIONS.Types.DELETE_USER: {
      // delete user with id
      // let newState = _.cloneDeep(state);
      // newState.items.splice(index, 1);
      // return newState;
      break;
    }

    default:
      return state;
  }
};

export default userReducer;