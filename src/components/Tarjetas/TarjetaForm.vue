<script>
import { ref, toRef, onBeforeMount } from 'vue'
import { useTareasStore } from 'src/stores/useTareasStore.js'
import { useEquipoStore } from 'src/stores/useEquipoStore'
import { storeToRefs } from 'pinia'


export default {
  emits: ["cerrarFormulario"],
  props: {
    crearProp: {
      type: Boolean,
    },
    idProp: {
      type: String,
    }
  },
  setup(props, { emit }) {
    const tarea = ref({})
    const { crearTarea, editarTarea } = useTareasStore()
    const { getTareaById } = storeToRefs(useTareasStore())
    const { participantes } = storeToRefs(useEquipoStore())
    const esCrear = toRef(props, 'crearProp')
    const idTarea = toRef(props, 'idProp')
    const cerrarForm = () => {
      emit("cerrarFormulario", true);
    }
    onBeforeMount(() => {
      if (esCrear.value) {
        tarea.value = {
          id: "",
          titulo: "",
          descripcion: "",
          participantes: [],
          estado: "porHacer",
        }
      } else {
        tarea.value = getTareaById.value(idTarea.value)
      }
    })

    const limpiarForm = () => {
      tarea.value = {
        id: "",
        titulo: "",
        descripcion: "",
        participantes: [],
        estado: "porHacer",
      }
    }

    const procesarFormulario = () => {

      if (esCrear.value) {
        crearTarea(tarea.value)
        cerrarForm()
      } else {
        editarTarea(tarea.value)
        cerrarForm()
      }
    }
    return {
      tarea,
      esCrear,
      expanded: ref(false),
      procesarFormulario,
      cerrarForm,
      limpiarForm,
      participantes
    }
  },
  components: {}
}
</script>
<template>
  <q-card flat  class="text-white my-card">
    <q-card-section>
      <div class="row items-center no-wrap">
        <div class="col ">
          <div class="text-h6">Nueva Tarea</div>
        </div>
        <div class="col-auto">
          <q-btn color="grey-7" round flat icon="mdi-close" @click="cerrarForm">
          </q-btn>
        </div>
      </div>

    </q-card-section>
    <q-card-section>
      <q-form @submit="procesarFormulario" @reset="limpiarForm" class="row q-col-gutter-md">
        <q-input filled dense v-model="tarea.id" label="Código *" hint="Código de la tarea" lazy-rules
          :rules="[val => val && val.length > 0 || 'Por favor complete el campo']"  class="col-12 col-sm-6" />
        <q-input filled dense v-model="tarea.titulo" label="Titulo *" hint="Titulo para la tarea" lazy-rules
          :rules="[val => val && val.length > 0 || 'Por favor complete el campo']" class="col-12 col-sm-6" />
        <q-input filled autogrow dense v-model="tarea.descripcion" label="Descripción *" hint="Descripción para la tarea"
          lazy-rules :rules="[val => val && val.length > 0 || 'Por favor complete el campo']" class="col-12 col-sm-12" />
        <q-select
            filled
            v-model="tarea.participantes"
            multiple
            :options="participantes"
            option-value="id"
            option-label="nombre"
            use-chips
            stack-label
            emit-value
          map-options
            label="Multiple selection"
            class="col-12 col-sm-12"
          />
          <q-separator dark inset />
        <div class="col-12 col-sm-12 q-gutter-y-md" align="right">
          <q-btn v-if="esCrear" flat color="grey" title="Limpiar" type="reset" icon="mdi-broom" />
          <q-btn flat color="grey" titale="Crear" type="submit" icon="mdi-check-bold" />
        </div>
      </q-form>
    </q-card-section>



    <q-card-actions>


      <q-space />


    </q-card-actions>

  </q-card>
</template>
<style></style>
