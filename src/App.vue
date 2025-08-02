
<template>


  <div id="app">
    <header>
      <img src="https://i.pinimg.com/236x/f3/76/97/f3769760a58054675ff6d54827155529.jpg" alt="Fitness Header" style="width: 10%; height: auto; max-height: 400px; object-fit: cover;">
      <h1>FitTrack</h1>
      <p>Bienestar, Nutrición y Ejercicio</p>
    </header>

    <nav>
      <div class="auth-links">
        <a href="#fitness">Fitness</a>
        <a href="#alimentacion">Alimentación</a>
        <a href="#rutina">Rutina</a>
        <a href="#calendario">Calendario</a>
        <a href="#calorias">Calorías</a>
        <router-link to="/login">Sesion</router-link>
        <router-link to="/signup">Registrar</router-link>
      <router-view/>
  
      </div>
    </nav>
   <section id="fitness" class="section">
    <img
      src="https://img.freepik.com/premium-vector/gym-fitness-web-banner-template-cover-design-gym-fitness_635705-1490.jpg"
      alt="Entrenamiento fitness"
      style="display: block; margin: 0 auto; width: 500%; max-width: 800px; border-radius: 10px;"
    />
    </section>
    <section id="alimentacion" class="section">
      <img
        src="https://cdn-icons-png.flaticon.com/512/2965/2965567.png"
        alt="Logo Nutrición y Fitness"
        class="logo"
      />

      <h2>Nutrición y Alimentación Saludable</h2>

      <p>
        Una alimentación equilibrada es la base de cualquier estilo de vida fitness. No se trata de hacer dietas extremas, sino de aprender a nutrir tu cuerpo con lo que realmente necesita. Aquí te dejamos algunas claves:
      </p>

      <div class="card-grid">
        <div class="card">
          <h3>🍎 Frutas y Verduras</h3>
          <p>Agrega variedad de colores a tus platos. Son fuente de vitaminas, fibra y antioxidantes.</p>
        </div>
        <div class="card">
          <h3>💧 Hidratación</h3>
          <p>Bebe al menos 2 litros de agua al día. Evita bebidas azucaradas y energizantes.</p>
        </div>
        <div class="card">
          <h3>🥩 Proteínas Magras</h3>
          <p>Incluye pollo, pavo, pescado, huevo o legumbres para una buena recuperación muscular.</p>
        </div>
        <div class="card">
          <h3>🧂 Menos Procesados</h3>
          <p>Reduce el consumo de ultraprocesados, azúcares añadidos y sal en exceso.</p>
        </div>
        <div class="card">
          <h3>🗓️ Planificación</h3>
          <p>Organiza tus comidas con antelación para evitar improvisaciones poco saludables.</p>
        </div>
      </div>

      <img
        src="https://images01.nicepagecdn.com/page/76/45/es/diseno-de-paginas-web-preview-76457.jpg"
        alt="Bienestar y alimentación saludable"
        class="main-image"
      />

      <h2>🌿 Consejos de Bienestar</h2>

      <div class="card-grid">
        <div class="card">
          <h3>💪 Actividad Física</h3>
          <p>Haz al menos 30 minutos de ejercicio al día para fortalecer tu cuerpo y mejorar tu estado de ánimo.</p>
        </div>

        <div class="card">
          <h3>😴 Sueño Reparador</h3>
          <p>Duerme entre 7 y 8 horas por noche. Tu cuerpo se recupera y regenera mientras descansas.</p>
        </div>

        <div class="card">
          <h3>🧘‍♀️ Relajación</h3>
          <p>Incorpora técnicas como meditación, yoga o respiración consciente para reducir el estrés.</p>
        </div>

        <div class="card">
          <h3>🧍‍♂️ Pausas Activas</h3>
          <p>Levántate, estira y camina cada cierto tiempo si trabajas mucho tiempo sentado.</p>
        </div>

        <div class="card">
          <h3>⚖️ Equilibrio</h3>
          <p>Mantén un balance saludable entre trabajo, descanso y ocio para evitar el agotamiento.</p>
        </div>
      </div>

      <p>
        Recuerda que una buena nutrición es clave para lograr tus metas de salud y rendimiento físico. Come bien, muévete más y cuida tu bienestar integral.
      </p>
    </section>

    <section id="rutina">
      <h2>Rutina</h2>
      <p>Las rutinas de ejercicio ofrecen una amplia gama de beneficios para la salud física y mental...</p>
      <h4>
        Puedes crear una rutina personalizada aquí,
      </h4>
      <RutinaEjercicio />

      <div style="text-align: center; margin-top: 30px;">
        <img
          src="https://images.pexels.com/photos/2247179/pexels-photo-2247179.jpeg?cs=srgb&dl=pexels-thelazyartist-2247179.jpg&fm=jpg"
          alt="Rutina saludable"
          style="width:70%; max-width:1500px; border-radius:80px;"
        />
      </div>
    </section>

    <section id="calendario">
      <h2>Calendario de Rutina Semanal</h2>
      <table>
        <tr>
          <th>Día</th>
          <th>Actividad</th>
        </tr>
        <tr v-for="(actividad, dia) in calendario" :key="dia">
          <td>{{ dia }}</td>
          <td><input v-model="calendario[dia]" /></td>
        </tr>
      </table>
    </section>

    <section id="calorias">
      <h2>Conteo de Calorías</h2>
      <p>Para perder peso, debes consumir menos calorías de las que quemas...</p>
      <table>
        <tr>
          <th>Comida</th>
          <th>Calorías</th>
        </tr>
        <tr v-for="(valor, comida) in calorias" :key="comida">
          <td>{{ comida }}</td>
          <td><input type="number" v-model.number="calorias[comida]" /></td>
        </tr>
        <tr>
          <th>Total Diario</th>
          <th>{{ totalCalorias }}</th>
        </tr>
      </table>
    </section>

    <footer class="footer">
      <div class="footer-container">
        <div class="footer-about">
          <h3>FitnessLife</h3>
          <p>Tu aliado en nutrición, bienestar y rutinas fitness para lograr tus objetivos.</p>
        </div>

        <div class="footer-contact">
          <h4>Contáctanos</h4>
          <p><strong>Dirección:</strong> Calle Falsa 123, Ciudad Fitness, País</p>
          <p><strong>Email:</strong> contacto@fitnesslife.com</p>
          <p><strong>Teléfono:</strong> +1 234 567 890</p>
        </div>

        <div class="footer-social">
          <h4>Síguenos</h4>
          <div class="social-icons">
            <a href="https://www.facebook.com/tuusuario" target="_blank" aria-label="Facebook" class="social-link facebook">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="28" height="28">
                <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.333v21.333C0 23.403.597 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.66-4.788 1.325 0 2.464.099 2.797.143v3.243l-1.922.001c-1.506 0-1.797.716-1.797 1.766v2.315h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.324-.597 1.324-1.333V1.333C24 .597 23.403 0 22.675 0z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/tuusuario" target="_blank" aria-label="Instagram" class="social-link instagram">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="28" height="28">
                <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 2A3.75 3.75 0 004 7.75v8.5A3.75 3.75 0 007.75 20h8.5a3.75 3.75 0 003.75-3.75v-8.5A3.75 3.75 0 0016.25 4h-8.5zm8.495 1.302a1.01 1.01 0 110 2.02 1.01 1.01 0 010-2.02zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z"/>
              </svg>
            </a>
            <a href="https://twitter.com/tuusuario" target="_blank" aria-label="Twitter" class="social-link twitter">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="28" height="28">
                <path d="M23.954 4.569a10 10 0 01-2.825.775 4.936 4.936 0 002.163-2.724 9.865 9.865 0 01-3.127 1.196 4.92 4.92 0 00-8.384 4.482A13.978 13.978 0 011.671 3.149a4.93 4.93 0 001.524 6.574 4.903 4.903 0 01-2.228-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.085 4.92 4.92 0 004.604 3.417 9.868 9.868 0 01-6.102 2.104c-.396 0-.79-.023-1.17-.067a13.945 13.945 0 007.557 2.212c9.054 0 14.002-7.496 14.002-13.986 0-.21 0-.423-.015-.634a9.936 9.936 0 002.46-2.548l-.047-.02z"/>
              </svg>
            </a>
            <a href="https://www.youtube.com/tuusuario" target="_blank" aria-label="YouTube" class="social-link youtube">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="28" height="28">
                <path d="M19.615 3.184a2.828 2.828 0 00-1.987-1.99C16.192 1 12 1 12 1s-4.192 0-5.627.194a2.828 2.828 0 00-1.987 1.99A29.16 29.16 0 004 7.74v8.52a29.16 29.16 0 00.386 4.556 2.828 2.828 0 001.987 1.99C7.808 22 12 22 12 22s4.192 0 5.627-.194a2.828 2.828 0 001.987-1.99 29.16 29.16 0 00.386-4.556v-8.52a29.16 29.16 0 00-.386-4.556zM10 15.5v-7l6 3.5-6 3.5z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">

        <p>&copy; 2025 FitnessLife. Todos los derechos reservados.</p>
      </div>
    </footer>
    
  </div>
  
</template>

<script>
import RutinaEjercicio from './components/RutinaEjercicio.vue';

export default {
  name: "App",
    components: {
    RutinaEjercicio
  },
  data() {
    return {
      calendario: {
        Lunes: "Cardio",
        Martes: "Fuerza",
        Miércoles: "Descanso",
        Jueves: "Yoga",
        Viernes: "HIIT",
        Sábado: "Natación",
        Domingo: "Descanso",
      },
      calorias: {
        Desayuno: 300,
        Almuerzo: 600,
        Cena: 500,
        Snacks: 200,
      },
    };
  },
  computed: {
    totalCalorias() {
      return Object.values(this.calorias).reduce((a, b) => a + b, 0);
    },
  },
  methods: {
    goToRutinas() {
      // Si usas Vue Router, reemplaza con $router.push()
      // Sino usa window.location:
      window.location.href = "rutinas.html";
    },
  },
};
</script>

<style scoped>
/* Aquí puedes pegar todo tu CSS o importarlo desde styles.css */

/* Ejemplo simple, si quieres que se aplique solo a este componente */
header {
  background: url('https://www.transparenttextures.com/patterns/cubes.png'), #0984e3;
  background-blend-mode: overlay;
  color: white;
  text-align: center;
  padding: 2px; 
  font-size: 1.5rem;
  font-weight: bold;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}
/* Puedes agregar aquí más estilos que tengas en styles.css */
</style>
