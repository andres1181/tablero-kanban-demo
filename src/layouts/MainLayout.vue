<template>
  <q-layout view="lHh lpr lFf" class="
    q-layout-space">
    <q-header elevated class="bg-black">
      <q-toolbar>
        <q-btn flat @click="drawer = !drawer" round dense icon="menu"></q-btn>
        <q-toolbar-title>Header</q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-drawer v-model="drawer" show-if-above :mini="miniState" @mouseover="miniState = false" @mouseout="miniState = true"
      :width="200" :breakpoint="500" bordered class="bg-grey-3">
      <q-scroll-area class="fit" :horizontal-thumb-style="{ opacity: 0 }">
        <q-list padding>
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="inbox"></q-icon>
            </q-item-section>

            <q-item-section>
              Inbox
            </q-item-section>
          </q-item>

          <q-item active clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="star"></q-icon>
            </q-item-section>

            <q-item-section>
              Star
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="send"></q-icon>
            </q-item-section>

            <q-item-section>
              Send
            </q-item-section>
          </q-item>

          <q-separator></q-separator>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="drafts"></q-icon>
            </q-item-section>

            <q-item-section>
              Drafts
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
  overflow-y: auto;
  /* para agregar scroll si es necesario */
}
</style>
