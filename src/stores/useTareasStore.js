import { defineStore } from "pinia";
export const useTareasStore = defineStore("useTareasStore", {
  state: () => ({
    tareas: [
      {
        id: "1",
        titulo: "Tarea 3",
        descripcion: "Analisis de informacion",
        participantes: ["159", "237"],
        estado: "porHacer",
      },
      {
        id: "2",
        titulo: "Tarea 2",
        descripcion: "Analisis de informacion",
        participantes: ["262", "305"],
        estado: "enProgreso",
      },
      {
        id: "3",
        titulo: "Tarea 4",
        descripcion: "Analisis de informacion",
        participantes: ["262", "356", "375"],
        estado: "porHacer",
      },
      {
        id: "4",
        titulo: "Tarea 5",
        descripcion: "Analisis de informacion",
        participantes: ["305"],
        estado: "porHacer",
      },
      {
        id: "5",
        titulo: "Tarea 6",
        descripcion: "Analisis de informacion",
        participantes: ["3920000", "4989000", "4520000"],
        estado: "porHacer",
      },
      {
        id: "6",
        titulo: "Tarea 1",
        descripcion: "Analisis de informacion",
        participantes: ["4080000", "4989000", "3982000"],
        estado: "terminada",
      },
    ],
    tarea: {},
  }),
  getters: {
    getTareasByTipo() {
      return (estado) => {
        return this.tareas.filter((t) => t.estado === estado);
      };
    },
    getTareaById() {
      return (id) => {
        const index = this.tareas.findIndex((t) => t.id === id);
        if (index >= 0) {
          return this.tareas[index];
        } else return;
      };
    },
  },
  actions: {
    crearTarea(tarea) {
      this.tareas.unshift(tarea);
      console.log(this.tareas);
    },
    listarTareas() {},
    eliminarTarea(id) {
      const index = this.tareas.findIndex((t) => t.id === id);
      if (index >= 0) {
        this.tareas.splice(index, 1);
        console.log(this.tareas);
      }
    },
    editarTarea(dato) {
      const index = this.tareas.findIndex((t) => t.id === dato.id);
      if (index >= 0) {
        this.tareas[index] = { ...dato };
        console.log(this.tareas[index]);
      }
    },
    cambiarEstado(id, nuevoEstado) {
      const index = this.tareas.findIndex((t) => t.id === id);
      if (index >= 0) {
        this.tareas[index].estado = nuevoEstado;
        console.log(this.tareas[index].estado);
      }
    },
  },
});
