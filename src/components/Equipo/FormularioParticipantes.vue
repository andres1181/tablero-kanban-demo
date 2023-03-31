<script>
import { ref, toRef, onBeforeMount } from 'vue'
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
    const participante = ref({})
    const { getParticipanteById } = storeToRefs(useEquipoStore())
    const esCrear = toRef(props, 'crearProp')
    const idParticipante = toRef(props, 'idProp')
    onBeforeMount(() => {
      if (esCrear.value) {
        participante.value = {
          nombre: "",
          id: '',
          correo: "",
          telefono: "",
        }
      } else {
        participante.value = getParticipanteById.value(idParticipante.value)
      }
    })
    const { crearParticipante, editarParticipante } = useEquipoStore()
    const cerrarForm = () => {
      emit("cerrarFormulario", true);
    }

    const limpiarForm = () => {
      participante.value = {
        nombre: "",
        id: '',
        correo: "",
        telefono: "",
      }
    }

    const procesarFormulario = () => {
      if(esCrear.value){
      crearParticipante(participante.value)
      cerrarForm()
      }else {
        editarParticipante(participante.value)
        cerrarForm()
      }
    }
    return {
      participante,
      esCrear,
      expanded: ref(false),
      procesarFormulario,
      cerrarForm,
      limpiarForm
    }
  },
  components: {}
}
</script>
<template>
  <q-card flat class=" my-card q-pa-md">
    <q-card-section>
      <div class="row items-center no-wrap">
        <div class="col ">
          <div class="text-h6">{{ esCrear ? 'Nuevo ' : 'Editar ' }} participante</div>
        </div>
        <div class="col-auto">
        </div>
      </div>

    </q-card-section>
    <q-card-section>
      <q-form @submit="procesarFormulario" @reset="limpiarForm" class="row q-col-gutter-md">
        <q-input filled dense v-model="participante.id" label="Código *" hint="Código de la participante" lazy-rules
          :rules="[val => val && val.length > 0 || 'Por favor complete el campo']" class="col-12 col-sm-6" />
        <q-input filled dense v-model="participante.nombre" label="Nombre *" hint="Nombre participante" lazy-rules
          :rules="[val => val && val.length > 0 || 'Por favor complete el campo']" class="col-12 col-sm-6" />
        <q-input filled autogrow dense v-model="participante.correo" label="Correo *" hint="Correo del participante"
          lazy-rules :rules="[val => val && val.length > 0 || 'Por favor complete el campo']" class="col-12 col-sm-6" />
        <q-input filled autogrow dense v-model="participante.telefono" label="Teléfono *" hint="Teléfono del participante"
          lazy-rules :rules="[val => val && val.length > 0 || 'Por favor complete el campo']" class="col-12 col-sm-6" />
        <q-separator dark inset />
        <div class="col-12 col-sm-12 q-gutter-y-md" align="right">
          <q-btn v-if="esCrear" flat color="grey" title="Limpiar" type="reset" icon="mdi-broom" />
          <q-btn flat color="grey" titale="Crear" type="submit" icon="mdi-check-bold" />
        </div>
      </q-form>
    </q-card-section>


    <q-card-actions align="center" class="q-pa-lg text-secondary">
      <div>
        <q-btn icon="close" flat round dense v-close-popup type="reset" />
      </div>
    </q-card-actions>

  </q-card>
</template>
<style></style>
