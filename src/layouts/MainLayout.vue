<template>
  <q-layout view="hHh lpr lFf" class="
    q-layout-space">
    <q-header bordered class="text-grey-9 bg-white">
      <q-toolbar>
        <q-btn flat @click="drawer = !drawer" round dense icon="menu"></q-btn>
        <q-toolbar-title>Demo 'Tablero Kanban'</q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-drawer v-model="drawer" show-if-above :mini="miniState" @mouseover="miniState = false" @mouseout="miniState = true"
      :width="200" :breakpoint="500" bordered class="text-white bg-grey-9">
      <q-scroll-area class="fit" :horizontal-thumb-style="{ opacity: 0 }">
        <q-list padding>
          <q-item clickable v-ripple to="/tablero">
            <q-item-section avatar>
              <q-icon name="mdi-cards"></q-icon>
            </q-item-section>

            <q-item-section>
              Tablero
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/equipo">
            <q-item-section avatar>
              <q-icon name="mdi-account"></q-icon>
            </q-item-section>

            <q-item-section>
              Equipo
            </q-item-section>
          </q-item>

        </q-list>
      </q-scroll-area>
    </q-drawer>



    <q-page-container class="q-page-container-space">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'


export default defineComponent({
  name: 'MainLayout',

  components: {

  },

  setup() {
    const drawer = ref(false)

    const miniState = ref(true)

    return {
      drawer,
      miniState,

    }
  }
})
</script>
<style>
.my-menu-link {
  color: white;
  background: green;
}
.q-layout-space {
  height: 100vh;
  /* altura igual al 100% de la pantalla */
  width: 100vw;
  /* ancho igual al 100% de la pantalla */
  display: flex;
  flex-direction: column;
  overflow: hidden;
  /* para evitar que el contenido se salga del contenedor */

}

.q-page-container-space {
  flex: 1;
  /* para que ocupe todo el espacio disponible en el contenedor */
  overflow-y: scroll;
  /* para agregar scroll si es necesario */
 /*  padding-right: 20px; */
}
</style>
