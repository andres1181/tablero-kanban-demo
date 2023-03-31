<script>
import { ref, computed } from 'vue'
import ColumnaTareas from 'src/components/Tablero/ColumnaTareas.vue';
import { useTareasStore } from 'src/stores/useTareasStore.js'

import { storeToRefs } from 'pinia'
//import { computed } from "@vue";

export default {
  setup() {
const { getTareasByTipo } = storeToRefs(useTareasStore())
const {cambiarEstado} = useTareasStore()
    const tareasPorHacer = computed(() => { return getTareasByTipo.value('porHacer')})
    const tareasEnProgreso = computed(() => { return getTareasByTipo.value('enProgreso') })
    const tareasTerminadas = computed(() => { return getTareasByTipo.value('terminada') })

    return {
      tareasPorHacer,
      tareasEnProgreso,
      tareasTerminadas,
      cambiarEstado

    }
  },
  components: { ColumnaTareas }
}
</script>
<template>
  <q-page padding>
    <q-card flat class="row my-card q-pa-sm">
      <ColumnaTareas class="col-12 col-sm-4 " :info="{ 'nombre': 'Por Hacer', 'tipo': 'porHacer' }"
        :lista="tareasPorHacer"></ColumnaTareas>
      <ColumnaTareas class="col-12 col-sm-4 " :info="{ 'nombre': 'En progreso', 'tipo': 'enProgreso' }"
        :lista="tareasEnProgreso"></ColumnaTareas>
      <ColumnaTareas class="col-12 col-sm-4" :info="{ 'nombre': 'Terminado', 'tipo': 'terminado' }"
        :lista="tareasTerminadas"></ColumnaTareas>
    </q-card>
  </q-page>
</template>
<style></style>
