<template>
    <div>
      <h2>Lista de Usuarios</h2>
      <ul>
        <li v-for="user in users" :key="user.id">
          <span>{{ user.nombre }} - {{ user.correo }}</span>
          <button @click="deleteUser(user.id)">Eliminar</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      users: {
        type: Array,
        required: true,
      },
    },
    methods: {
        async deleteUser(userId) {
    try {
      const userDoc = doc(db, 'users', userId); 
      await deleteDoc(userDoc); 
      this.$emit('userDeleted'); 
    } catch (error) {
      console.error('Error al eliminar el usuario:', error);
    }
  }
    },
  };
  </script>
  