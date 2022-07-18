const ADD = 'USER/ADD';
const DELETE = 'USER/DELETE';

export const create = () => ({
  type: ADD,
});

export const decrement = () => ({
  type: DELETE,
});

const initialState = { usersList: [] };
const usersReduser = (state = initialState, { type, user }) => {
  switch (type) {
    case ADD:
      return {
        ...state,
        usersList: state.usersList.concat(user),
      };
    case DELETE:
      return {
        ...state,
        usersList: state.usersList.filter(({ id }) => id !== user.id),
      };
    default:
      return state;
  }
};

export default usersReduser;
