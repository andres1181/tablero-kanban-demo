<template>
  <q-page class="flex flex-center">

  </q-page>
</template>

<script>
import { defineComponent, onBeforeMount } from 'vue'
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'IndexPage',
  setup() {
    const router = useRouter();
    onBeforeMount(() => {
      router.push('/tablero')
    })
    return {

    }
  }
})
</script>
