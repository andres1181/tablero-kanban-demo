<script>
import { ref } from 'vue'
import { useEquipoStore } from 'src/stores/useEquipoStore'
import { storeToRefs } from 'pinia'
import FormularioParticipantes from 'src/components/Equipo/FormularioParticipantes.vue'
const columnas = [
  {
    name: "id",
    label: "ID",
    align: "center",
    field: "id",
    sortable: true,
  },

  {
    name: "nombre",
    label: "Nombre",
    align: "center",
    field: "nombre",
    sortable: true,
  },
  {
    name: "correo",
    label: "Correo",
    align: "center",
    field: "correo",
    sortable: true,
  },
  {
    name: "telefono",
    label: "Teléfono",
    align: "center",
    field: "telefono",
    sortable: true,
  },
]
const rows = [
  {
    nombre: 'Frozen Yogurt',
    id: 159,
    correo: 'Frozen@email.com',
    telefono: '34000000',
  },
  {
    nombre: 'Ice cream sandwich',
    id: 237,
    correo: 'IceCream@email.com',
    telefono: '37000000',
  },
  {
    nombre: 'Eclair',
    id: '262',
    correo: 'Eclair@email.com',
    telefono: '36100000',
  },
  {
    nombre: 'Cupcake',
    id: '305',
    correo: 'Cupcake@email.com',
    telefono: '37200000',
  },
  {
    nombre: 'Gingerbread',
    id: '356',
    correo: 'Gingerbread@email.com',
    telefono: '37100000',
  },
  {
    nombre: 'Jelly bean',
    id: '375',
    correo: 'JellyBean@email.com',
    telefono: '37300000',

  },
  {
    nombre: 'Lollipop',
    id: '3920000',
    correo: 'Lollipop@email.com',
    telefono: '37400000',
  },
  {
    nombre: 'Honeycomb',
    id: '4080000',
    correo: 'Honeycomb@email.com',
    telefono: '37500000',
  },
  {
    nombre: 'Donut',
    id: '4520000',
    correo: 'Donut@email.com',
    telefono: '35100000',
  },
  {
    nombre: 'KitKat',
    id: '4989000',
    correo: 'KitKat@email.com',
    telefono: '36500000',
  }
]
export default {

  setup() {
    const { participantes } = storeToRefs(useEquipoStore())
    const { eliminarParticipante, } = useEquipoStore()
    const dialogEditar = ref(false)
    const idEditar = ref('')
    const editarParticipante = (id) => {
      dialogEditar.value = true
      idEditar.value = id
    }
     const cerrarFormulario = () => {
       dialogEditar.value  = false
    }
    return {
      rows,
      columnas,
      participantes,
      dialogEditar,
      idEditar,
      eliminarParticipante,
      editarParticipante,
      cerrarFormulario
    }
  },
  components: { FormularioParticipantes }
}
</script>
<template>
  <div class="q-pa-md">
    <q-table :column="columnas" :rows="participantes" row-key="id" flat bordered>
      <template v-slot:header="props">
        <q-tr :props="props">
          <q-th auto-width></q-th>
          <q-th auto-width></q-th>
          <q-th v-for="col in props.cols" :key="col.name" :props="props">
            {{ col.label }}
          </q-th>
        </q-tr>
      </template>

      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td auto-width>
            <q-btn flat size="md" color="primary" round dense icon="mdi-pencil"
              @click="editarParticipante(props.row.id)"></q-btn>
          </q-td>
          <q-td auto-width>
            <q-btn flat size="md" color="primary" round dense icon="mdi-delete"
              @click="eliminarParticipante(props.row.id)"></q-btn>
          </q-td>
          <q-td v-for="col in props.cols" :key="col.name" :props="props">
            {{ col.value }}
          </q-td>
        </q-tr>
        <q-tr v-show="props.expand" :props="props">
          <q-td colspan="100%">
            <div class="text-left">This is expand slot for row above: {{ props.row.name }}.</div>
          </q-td>
        </q-tr>

      </template>
    </q-table>
  </div>
  <q-dialog v-model="dialogEditar">
    <q-card>

      <q-card-section style="max-height: 90vh" class="scroll">
        <FormularioParticipantes :crearProp="false" :idProp="idEditar" @cerrarFormulario="cerrarFormulario"></FormularioParticipantes>
      </q-card-section>

    </q-card>
  </q-dialog>
</template>
