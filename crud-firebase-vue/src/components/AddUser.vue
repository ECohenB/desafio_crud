<template>
  <div>
    <h2>Agregar Usuario</h2>
    <form @submit.prevent="addUser">
      <input v-model="nombre" placeholder="Nombre" required />
      <input v-model="correo" placeholder="Correo Electrónico" required />
      <button type="submit">Agregar Usuario</button>
    </form>
  </div>
</template>

<script>
import { db } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

export default {
  data() {
    return {
      nombre: '',
      correo: ''
    };
  },
  methods: {
    async addUser() {
      try {
        const docRef = await addDoc(collection(db, 'users'), {
          nombre: this.nombre,
          correo: this.correo
        });
        console.log("Usuario agregado con ID: ", docRef.id);
        this.nombre = '';
        this.correo = '';
        this.$emit('userAdded');
      } catch (error) {
        console.error("Error al agregar usuario: ", error);
      }
    }
  }
};
</script>
