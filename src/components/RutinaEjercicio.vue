<template>
  <div class="container">
    <h1>Rutinas de Ejercicio</h1>

    <section class="section">
      <h2>Selecciona una rutina</h2>
      <select v-model="selectedRutina">
        <option value="">--Elegir rutina--</option>
        <option value="principiante">Principiante</option>
        <option value="intermedio">Intermedio</option>
        <option value="avanzado">Avanzado</option>
      </select>
      <ul class="routine-list">
        <li v-for="(ej, index) in ejerciciosMostrados" :key="index">
          <strong>{{ ej.nombre }}</strong><br />
          <img :src="ej.imagen" :alt="ej.nombre" style="width: 150px; margin-top: 5px; display: block;" />
        </li>
      </ul>
    </section>

    <section class="section">
      <h2>Crea tu propia rutina</h2>
      <input v-model="nuevoEjercicio" type="text" placeholder="Ejemplo: Sentadillas" @keyup.enter="addExercise" />
      <button @click="addExercise">Agregar</button>

      <ul class="routine-list">
        <li v-for="(ej, index) in customRoutine" :key="index">{{ ej }}</li>
      </ul>

      <button @click="saveRoutine" class="save-button">Guardar Rutina</button>
    </section>

    <section class="section">
      <h2>Rutinas Guardadas</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Ejercicios</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(rutina, index) in savedRoutines" :key="rutina.id">
            <td>{{ index + 1 }}</td>
            <td>{{ rutina.ejercicios.join(', ') }}</td>
            <td><button @click="eliminarRutina(rutina.id)">Eliminar</button></td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script>
export default {
  name: "RutinaEjercicio",
  data() {
    return {
      selectedRutina: "",
      nuevoEjercicio: "",
      customRoutine: [],
      savedRoutines: [],
      db: null,
      rutinas: {
        principiante: {
          ejercicios: [
            { nombre: "Flexiones 4x15", imagen: "https://fitcron.com/wp-content/uploads/2021/03/06621301-Push-up-m_Chest-FIX_720.gif" },
            { nombre: "Sentadillas 4x15", imagen: "https://fitenium.com/wp-content/uploads/2021/03/11971301-Squat-m_Thighs_180.gif" },
            { nombre: "Crunch Cruzado 4x15", imagen: "https://fitcron.com/wp-content/uploads/2024/05/00031301-air-bike-m_waist_FIX_720.gif" }
          ]
        },
        intermedio: {
          ejercicios: [
            { nombre: "Burpees 4x20", imagen: "https://www.inspireusafoundation.org/wp-content/uploads/2023/11/half-burpee.gif" },
            { nombre: "Peso muerto 4x10", imagen: "https://fitcron.com/wp-content/uploads/2021/04/00851301-Barbell-Romanian-Deadlift_Hips_720.gif" },
            { nombre: "Plancha 2min", imagen: "https://image.tuasaude.com/media/article/jv/yf/tres-ejercicios-faciles-para-hacer-en-casa-y-perder-barriga_70848.gif" }
          ]
        },
        avanzado: {
          ejercicios: [
            { nombre: "Dominadas 4x30", imagen: "https://fitcron.com/wp-content/uploads/2021/04/18661301-Wide-Grip-Pull-Up-on-Dip-Cage_Back_720.gif" },
            { nombre: "Sprint 200m", imagen: "https://fitnessprogramer.com/wp-content/uploads/2023/06/sprint.gif" },
            { nombre: "Clean & Press 4x8", imagen: "https://i.pinimg.com/originals/83/b9/2b/83b92bf7e895d001d7fb28cf59a9b033.gif" }
          ]
        }
      }
    };
  },
  computed: {
    ejerciciosMostrados() {
      return this.selectedRutina && this.rutinas[this.selectedRutina]
        ? this.rutinas[this.selectedRutina].ejercicios
        : [];
    }
  },
  mounted() {
    this.initDB();
  },
  methods: {
    initDB() {
      const request = indexedDB.open("rutinasDB", 1);
      request.onerror = (event) => console.error("Error DB:", event);
      request.onsuccess = (event) => {
        this.db = event.target.result;
        this.cargarRutinas();
      };
      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        db.createObjectStore("rutinas", { keyPath: "id", autoIncrement: true });
      };
    },
    addExercise() {
      if (this.nuevoEjercicio.trim()) {
        this.customRoutine.push(this.nuevoEjercicio.trim());
        this.nuevoEjercicio = "";
      }
    },
saveRoutine() {
  if (!this.db || this.customRoutine.length === 0) return;

  const rutinaLimpia = JSON.parse(JSON.stringify(this.customRoutine)); // <-- ¡Copia profunda segura!

  const trans = this.db.transaction(["rutinas"], "readwrite");
  const store = trans.objectStore("rutinas");
  const request = store.add({ ejercicios: rutinaLimpia });

  request.onsuccess = () => {
    this.customRoutine = [];
    this.cargarRutinas();
  };

  request.onerror = (e) => console.error("Error al guardar:", e);
},

    cargarRutinas() {
      if (!this.db) return;
      const trans = this.db.transaction(["rutinas"], "readonly");
      const store = trans.objectStore("rutinas");
      const request = store.getAll();
      request.onsuccess = () => {
        this.savedRoutines = request.result;
      };
    },
    eliminarRutina(id) {
      const trans = this.db.transaction(["rutinas"], "readwrite");
      const store = trans.objectStore("rutinas");
      const request = store.delete(id);
      request.onsuccess = () => this.cargarRutinas();
    }
  }
};
</script>

<style scoped>
/* ... (mantén el estilo que ya tienes) ... */
</style>
