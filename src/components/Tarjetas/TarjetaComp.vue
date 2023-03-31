<script>
import { ref, toRef, computed  } from 'vue'
import { useTareasStore } from 'src/stores/useTareasStore.js'
import { useEquipoStore } from 'src/stores/useEquipoStore'
import { storeToRefs } from 'pinia'
import TarjetaForm from './TarjetaForm.vue'


export default {
  props: {
    info: {
      type: Object,
      default() {
        return {
          'id': '',
          'titulo': '',
          'descripcion': '',
          'participantes': '',
          'estado': 'porHacer',
        }
      }

    }
  },
  setup(props) {
    const { cambiarEstado, eliminarTarea } = useTareasStore()
    const { getParticipanteById } = storeToRefs(useEquipoStore())
    const datosTarjeta = toRef(props, 'info')
    const editar = ref(false)
    const participantes = computed(()=>{
      let lista = []
      for (let index = 0; index < datosTarjeta.value.participantes.length; index++) {
        const element = datosTarjeta.value.participantes[index];
        window.console.info('part:', datosTarjeta.value.participantes[index])
        lista.push(getParticipanteById.value(element))
      }
      return lista
    })
    const cerrarFormulario = () => {

      editar.value = false
    }
    const siguienteEstado = (estado) => {
      if(estado === 'porHacer'){
         cambiarEstado(datosTarjeta.value.id, 'enProgreso')
      }
      if (estado === 'enProgreso') {
        cambiarEstado(datosTarjeta.value.id, 'terminada')
      }

    }
    const anteriorEstado = (estado) => {
      if (estado === 'enProgreso') {
        cambiarEstado(datosTarjeta.value.id, 'porHacer')
      }
      if (estado === 'terminada') {
        cambiarEstado(datosTarjeta.value.id, 'enProgreso')
      }
    }

    return {
      datosTarjeta,
      expanded: ref(false),
      editar,
      cerrarFormulario,
      siguienteEstado,
      anteriorEstado,
      eliminarTarea,
      participantes
    }
  },
  components: { TarjetaForm }
}
</script>
<template>
  <q-card class="text-white bg-grey-9 my-card q-pa-sm">
    <q-card-section>
      <div class="row items-center no-wrap">
        <div class="col ">
          <div class="text-h6">{{ datosTarjeta.titulo }}</div>

        </div>
         <div class="col-auto">
         <q-btn flat size="md" color="grey-7" round dense icon="mdi-pencil"
                @click="editar = true"></q-btn></div>
        <div class="col-auto">
          <q-btn color="grey-7" round flat icon="mdi-delete" @click="eliminarTarea(datosTarjeta.id)">
          </q-btn>
        </div>
      </div>

    </q-card-section>

    <q-separator dark inset />


    <q-card-actions>
      <q-btn v-if="datosTarjeta.estado !== 'porHacer'" flat color="grey" title="anterior" icon="mdi-page-previous" @click="anteriorEstado(datosTarjeta.estado)" />
      <q-btn v-if="datosTarjeta.estado !== 'terminada'" flat color="grey" titale="siguiente" icon="mdi-page-next"  @click="siguienteEstado(datosTarjeta.estado)" />

      <q-space />

      <q-btn color="grey" round flat dense :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
        @click="expanded = !expanded" />
    </q-card-actions>

    <q-slide-transition>
      <div v-show="expanded">
        <q-separator dark />
        <q-card-section class="text-subitle2">
          {{ datosTarjeta.descripcion }}
        </q-card-section>
          <q-separator dark />
        <q-card-section class="text-subitle2">
             <div class="text-caption">A Cargo de <span v-for="(p, index) in participantes" :key="index"> <div> {{ '| ' + p.nombre + ' | ' }} </div></span></div>
          </q-card-section>
      </div>
    </q-slide-transition>
  </q-card>
   <q-dialog v-model="editar">
      <q-card>

        <q-card-section style="max-height: 90vh" class="scroll">
         <TarjetaForm @cerrarFormulario="cerrarFormulario" :crearProp="false" :idProp="datosTarjeta.id"></TarjetaForm>
        </q-card-section>

      </q-card>
    </q-dialog>
</template>
<style></style>
