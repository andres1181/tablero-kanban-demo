<script>
import { ref, toRef } from 'vue'



export default {
  props: {
    info: {
      type: Object,
      default() {
        return {
          'titulo': '',
          'descripcion': '',
          'encargado': '',
          'estado': 'porHacer',
        }
      }

    }
  },
  setup(props) {
    const datosTarjeta = toRef(props, 'info')

    return {
      datosTarjeta,
      expanded: ref(false),
    }
  },
  components: {}
}
</script>
<template>
  <q-card class="text-white bg-grey-9 my-card q-pa-sm">
    <q-card-section>
      <div class="row items-center no-wrap">
        <div class="col ">
          <div class="text-h6">{{ datosTarjeta.titulo }}</div>
          <div class="text-caption">A Cargo de {{ datosTarjeta.encargado }}</div>
        </div>
        <div class="col-auto">
          <q-btn color="grey-7" round flat icon="mdi-delete">
          </q-btn>
        </div>
      </div>

    </q-card-section>

    <q-separator dark inset />


    <q-card-actions>
      <q-btn v-if="datosTarjeta.estado !== 'porHacer'" flat color="grey" title="anterior" icon="mdi-page-previous"/>
      <q-btn v-if="datosTarjeta.estado !== 'terminada'" flat color="grey" titale="siguiente" icon="mdi-page-next" />

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
      </div>
    </q-slide-transition>
  </q-card>
</template>
<style></style>
