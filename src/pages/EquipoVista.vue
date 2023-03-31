<script>
import { ref } from 'vue'
import ListaParticipantes from 'components/Equipo/ListaParticipantes.vue';
import FormularioParticipantes from 'src/components/Equipo/FormularioParticipantes.vue';
export default {
  setup() {
    const verFormCrear = ref(false)
    const tipoForm = ref('')
    const cerrarFormulario = () => {
      verFormCrear.value = false
    }
    return {
       expanded: ref(false),
      cerrarFormulario,
      verFormCrear
    }
  },
  components: { ListaParticipantes, FormularioParticipantes }
}
</script>
<template>
  <q-page padding>
  <div class="q-pa-md">
    <q-card class="text-white bg-grey-9 my-card q-pa-md">
      <q-card-section>
        <div class="row items-center no-wrap">
          <div class="col ">
            <div class="text-h6"> Listado de participantes</div>
            <div class="text-caption"></div>
          </div>
          <div class="col-auto">
            <q-btn color="grey-7" round flat :icon="!expanded ? 'mdi-plus': 'mdi-minus'" @click="(verFormCrear = true) && (expanded = !expanded)">
            </q-btn>
          </div>
        </div>

      </q-card-section>
      <q-slide-transition>
        <div v-show="expanded">
          <q-separator dark />
          <q-card-section class="text-subitle2">
             <FormularioParticipantes v-if="verFormCrear" :crearProp="true" @cerrarFormulario="cerrarFormulario"></FormularioParticipantes>
          </q-card-section>
        </div>
      </q-slide-transition>
    </q-card>

    <ListaParticipantes></ListaParticipantes>
  </div>
  </q-page>
</template>
