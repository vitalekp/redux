export const addUser = ({ name, id }) => ({
  type: 'USER/ADD',
  user: {
    id,
    name,
  },
});

export const deleteUser = id => ({
  type: 'USER/DELETE',
  user: {
    id,
  },
});
