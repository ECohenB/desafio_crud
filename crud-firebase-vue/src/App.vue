<template>
  <div id="app">
    <AddUser @userAdded="fetchUsers" />
    <UserList :users="users" @userDeleted="fetchUsers" />
  </div>
</template>

<script>
import { db } from './firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import AddUser from './components/AddUser.vue';
import UserList from './components/UserList.vue';

export default {
  components: {
    AddUser,
    UserList
  },
  data() {
    return {
      users: []
    };
  },
  async created() {
    await this.fetchUsers(); 
  },
  methods: {
    async fetchUsers() {
  try {
    const usersCollection = collection(db, 'users');
    const querySnapshot = await getDocs(usersCollection);
    const fetchedUsers = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    this.users = fetchedUsers;
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
  }
}

  }
};
</script>

