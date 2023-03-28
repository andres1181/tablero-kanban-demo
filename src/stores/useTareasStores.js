import { defineStore } from "pinia";
export const useTareasStore = defineStore("useTareasStore", {
  state: () => ({
    tareas: [],
    tarea: {   }
  }),
  getters: {
    getTareasByTipo(){
      return (tipo) => {
        return this.tareas.filter(t => t.tipo === tipo)
      }
    }
  },
  actions: {
    crearTarea(tarea) {
      this.tareas.push(tarea);
    },
    listarTareas() {},
    eliminarTarea() {},
    cambiarEstado() {},
  },
});
