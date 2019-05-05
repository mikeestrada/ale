const Types = {
  EDIT_USER: "EDIT_USER",
  DELETE_USER: "DELETE_USER"
};

const editUserAction = user => ({
  type: Types.EDIT_USER,
  payload: user
});

const deleteUserAction = id => ({
  type: Types.DELETE_USER,
  payload: id
});

export default {
  editUserAction,
  deleteUserAction,
  Types
};