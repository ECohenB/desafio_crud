import { createStore } from 'vuex';
import { db } from './firebaseConfig'; 
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';

const store = createStore({
  state() {
    return {
      users: [],
    };
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    removeUser(state, userId) {
      state.users = state.users.filter(user => user.id !== userId);
    },
  },
  actions: {
    async fetchUsers({ commit }) {
      const usersCollection = collection(db, 'users');
      const querySnapshot = await getDocs(usersCollection);
      const users = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      commit('setUsers', users);
    },
    async deleteUser({ commit }, userId) {
      const userDoc = doc(db, 'users', userId);
      await deleteDoc(userDoc);
      commit('removeUser', userId);
    },
  },
  getters: {
    getUsers(state) {
      return state.users;
    },
  },
});

export default store;
