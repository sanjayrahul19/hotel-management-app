const initialState = {
  users: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        users: [...state.users, action.payload],
      };

    case "DELETE_USER":
      const tempUsers = state.users.filter((_, index) => {
        return index !== action.payload;
      });
      return {
        users: [...tempUsers],
      };

    case "EDIT_USER":
      let updatedUserData = [...state.users];
      updatedUserData[action.index] = action.payload;
      console.log(updatedUserData);
      return {
        users: updatedUserData,
      };
    default:
      return state;
  }
};

export default userReducer;
