<script>
import { ref, toRef } from 'vue'
import TarjetaComp from 'components/Tarjetas/TarjetaComp.vue'
import TarjetaForm from '../Tarjetas/TarjetaForm.vue'
export default {
  props: {
    info: {
      type: Object
    },
    lista: {
      type: Array
    }

  },
  setup(props) {
    const infoColumna = toRef(props, 'info')
    const listaTareas = toRef(props, 'lista')
    const crear = ref(false)
    const editar = ref(false)
    const cerrarFormulario = () => {
      crear.value = false
      editar.value = false
    }
    return {
      cerrarFormulario,
      infoColumna,
      listaTareas,
      crear,
      editar
    }
  },
  components: { TarjetaComp, TarjetaForm }
}
</script>
<template>
  <div class="q-pa-sm">
    <q-card flat bordered class="my-card  ">
      <q-card-section>
        <div class="row items-center no-wrap">
          <div class="col ">
            <div class=" text-overline text-grey-7">{{ infoColumna.nombre }}</div>
            <div class="text-subtitle2 text-caption">{{ listaTareas.length }} {{ (listaTareas.length === 1) ? 'tarea' :
              'tareas' }}</div>
        </div>

          <div class="col-auto">
            <q-btn v-if="infoColumna.tipo === 'porHacer'" color="grey-7" round flat icon="mdi-plus" @click="crear = true">

            </q-btn>
          </div>
        </div>
      </q-card-section>
      <q-separator />
      <!--  <q-card-section v-if="infoColumna.tipo === 'porHacer'">
          <q-btn fab color="primary" icon="mdi-plus" class="absolute"
            style="top: 0; right: 8px; transform: translateY(-50%);" />
        </q-card-section> -->
      <q-card-section class=" ">
       <div class="q-gutter-md  ">
        <TarjetaForm v-if="crear" @cerrarFormulario="cerrarFormulario" :crearProp="true"></TarjetaForm>

          <!-- contenido de la tercera sección -->
          <TarjetaComp v-for="(tarea, index) in listaTareas"  :key="index" :info="tarea"></TarjetaComp>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>
<style>
.scrollable {
  height: 100%;
  overflow-y: auto;
  padding-right: 10px; /* para evitar que el contenido sea ocultado por la barra de desplazamiento */
}

/* .scrollable-content {
  height: 100%;
  padding-right: 10px;
  // para evitar que el contenido sea ocultado por la barra de desplazamiento
} */
</style>
