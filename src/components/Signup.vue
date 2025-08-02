<template>
  <div class="contenedor-formulario">
    <h2>Registro de Usuario</h2>
    <form @submit.prevent="handleSignup">
      <label for="nombre">Nombre:</label>
      <input type="text" id="nombre" v-model="nombre" required />
      <div class="error" v-if="errors.nombre">{{ errors.nombre }}</div>

      <label for="apellido">Apellido:</label>
      <input type="text" id="apellido" v-model="apellido" required />
      <div class="error" v-if="errors.apellido">{{ errors.apellido }}</div>

      <label for="correo">Correo Electrónico:</label>
      <input type="email" id="correo" v-model="correo" required />
      <div class="error" v-if="errors.correo">{{ errors.correo }}</div>

      <label for="telefono">Número de Teléfono:</label>
      <input type="tel" id="telefono" v-model="telefono" required />
      <div class="error" v-if="errors.telefono">{{ errors.telefono }}</div>

      <label for="password">Contraseña:</label>
      <input type="password" id="password" v-model="password" required />
      <div class="error" v-if="errors.password">{{ errors.password }}</div>

      <label for="confirmPassword">Confirmar contraseña:</label>
      <input type="password" id="confirmPassword" v-model="confirmPassword" required />
      <div class="error" v-if="errors.confirmPassword">{{ errors.confirmPassword }}</div>

      <label for="fechaNacimiento">Fecha de Nacimiento:</label>
      <input type="date" id="fechaNacimiento" v-model="fechaNacimiento" required />
      <div class="error" v-if="errors.fechaNacimiento">{{ errors.fechaNacimiento }}</div>

      <button type="submit">Registrarse</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SignupPage',
  data() {
    return {
      nombre: '',
      apellido: '',
      correo: '',
      telefono: '',
      password: '',
      confirmPassword: '',
      fechaNacimiento: '',
      errors: {}
    };
  },
  methods: {
    handleSignup() {
      this.errors = {};
      
      // Lógica de validación
      if (!this.nombre) this.errors.nombre = 'El nombre es obligatorio.';
      if (!this.apellido) this.errors.apellido = 'El apellido es obligatorio.';
      if (!this.correo) this.errors.correo = 'El correo es obligatorio.';
      if (this.password !== this.confirmPassword) {
        this.errors.confirmPassword = 'Las contraseñas no coinciden.';
      }
      
      if (Object.keys(this.errors).length === 0) {
        console.log('Registrando usuario:', { ...this.$data });
        alert('Registro exitoso!');
      }
    }
  }
};
</script>

<style scoped>
/* Usa este bloque si no tienes estilos adecuados */
.contenedor-formulario {
  max-width: 400px;
  margin: 40px auto;
  background-color: #f4f4f4;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

form label {
  display: block;
  margin-top: 10px;
  font-weight: bold;
}

form input {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 6px;
}

.error {
  color: red;
  font-size: 0.85em;
  margin-top: 3px;
}

button[type="submit"] {
  width: 100%;
  margin-top: 20px;
  background-color: #3498db;
  color: white;
  border: none;
  padding: 10px;
  font-size: 1em;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button[type="submit"]:hover {
  background-color: #2980b9;
}
</style>