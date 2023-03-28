<script>
import { ref } from 'vue'
import ColumnaTareas from 'src/components/Tablero/ColumnaTareas.vue';

export default {
  setup() {
    const tareasPorHacer = ref([{
      'titulo': 'Tarea 3', 'descripcion': 'Analisis de informacion',
      'encargado': 'Juan',
      'estado': 'porHacer',
    },
    {
      'titulo': 'Tarea 4', 'descripcion': 'Analisis de informacion',
      'encargado': 'Juan',
      'estado': 'porHacer',
    },
    {
      'titulo': 'Tarea 5', 'descripcion': 'Analisis de informacion',
      'encargado': 'Juan',
      'estado': 'porHacer',
    },
    {
      'titulo': 'Tarea 6', 'descripcion': 'Analisis de informacion',
      'encargado': 'Juan',
      'estado': 'porHacer',
    }
  ])
    const tareasEnProgreso = ref([{
      'titulo': 'Tarea 2', 'descripcion': 'Analisis de informacion',
      'encargado': 'Juan',
      'estado': 'enProgreso',
    }])
    const tareasTerminadas = ref([{
      'titulo': 'Tarea 1', 'descripcion': 'Analisis de informacion',
      'encargado': 'Juan',
      'estado': 'terminada',
    }])

    return {
      tareasPorHacer,
      tareasEnProgreso,
      tareasTerminadas

    }
  },
  components: { ColumnaTareas }
}
</script>
<template>
  <q-page padding >
    <q-card flat class="row my-card q-pa-sm">
      <ColumnaTareas class="col-12 col-sm-4 " :info="{ 'nombre': 'Por Hacer', 'tipo': 'porHacer' }"
        :lista="tareasPorHacer"></ColumnaTareas>
      <ColumnaTareas class="col-12 col-sm-4 " :info="{ 'nombre': 'En progreso', 'tipo': 'enProgreso' }"
        :lista="tareasEnProgreso"></ColumnaTareas>
      <ColumnaTareas class="col-12 col-sm-4" :info="{ 'nombre': 'Terminado', 'tipo': 'terminado' }"
        :lista="tareasTerminadas"></ColumnaTareas>
    </q-card>
</q-page></template>
<style></style>
