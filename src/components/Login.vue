<template>
  <div class="login-container">
    <div class="contenedor-formulario">
      <h2>Iniciar Sesión</h2>
      <form @submit.prevent="handleLogin" novalidate>
        <label for="correo">Correo Electrónico:</label>
        <input type="email" id="correo" v-model="email" required />
        <div class="error" v-if="emailError">{{ emailError }}</div>
        
        <label for="password">Contraseña:</label>
        <input type="password" id="password" v-model="password" required />
        <div class="error" v-if="passwordError">{{ passwordError }}</div>

        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: '',
      emailError: '',
      passwordError: ''
    };
  },
  methods: {
    handleLogin() {
      this.emailError = '';
      this.passwordError = '';

      // Validación campo email obligatorio
      if (!this.email) {
        this.emailError = 'El correo electrónico es obligatorio.';
      } else {
        // Validación formato email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(this.email)) {
          this.emailError = 'El correo electrónico no es válido.';
        }
      }

      // Validación campo contraseña obligatorio
      if (!this.password) {
        this.passwordError = 'La contraseña es obligatoria.';
      } else {
        // Validación longitud mínima
        if (this.password.length < 6) {
          this.passwordError = 'La contraseña debe tener al menos 6 caracteres.';
        }
      }

      if (!this.emailError && !this.passwordError) {
        // Lógica para iniciar sesión
        console.log('Iniciando sesión con:', this.email);
        alert('Sesión iniciada con éxito!');
      }
    }
  }
};
</script>

<style scoped>
.login-container {
   max-width: 400px;
  margin: 40px auto;
  background-color: #f4f4f4;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.contenedor-formulario {
   max-width: 400px;
  margin: 40px auto;
  background-color: #f4f4f4;
  padding: 25px;
  border-radius: 12px;
  
}

h2 {
  text-align: center;
  margin-bottom: 24px;
  font-size: 1.8em;
  color: #333;
}

form label {
  display: block;
  margin-top: 12px;
  margin-bottom: 5px;
  font-weight: 600;
  color: #444;
}

form input {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-sizing: border-box;
  font-size: 1em;
  transition: border-color 0.3s;
}

form input:focus {
  border-color: #3498db;
  outline: none;
}

.error {
  color: #e74c3c;
  font-size: 0.85em;
  margin-top: 4px;
}

button[type="submit"] {
  width: 100%;
  margin-top: 24px;
  background-color: #3498db;
  color: white;
  border: none;
  padding: 12px;
  font-size: 1em;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s;
}

button[type="submit"]:hover {
  background-color: #2980b9;
  transform: scale(1.02);
}
</style>