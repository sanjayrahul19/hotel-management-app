const addUser = (user) => {
  return {
    type: "ADD_USER",
    payload: user,
  };
};

export const deleteUser = (id) => {
  return {
    type: "DELETE_USER",
    payload: id,
  };
};
export const editUser = (user, index) => {
  return {
    type: "EDIT_USER",
    index: index,
    payload: user,
  };
};

export default addUser;
