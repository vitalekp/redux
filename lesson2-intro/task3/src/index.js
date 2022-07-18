import store from './store';
import { addUser, deleteUser } from './users.actions';

const onAddUser = () => {
  store.dispatch(addUser({ id: 20, name: 'Tom' }));
};

const onDeleteUser = () => {
  store.dispatch(deleteUser({ id: 20 }));
};

// window.addEventListener('click', onAddUser);
window.addEventListener('click', onDeleteUser);

store.subscribe(() => {
  const state = store.getState();
  console.log(state);
});
