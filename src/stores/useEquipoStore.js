import { defineStore } from "pinia";
export const useEquipoStore = defineStore("useEquipoStore", {
  state: () => ({
    participantes: [
      {
        nombre: "Frozen Yogurt",
        id: "159",
        correo: "Frozen@email.com",
        telefono: "34000000",
      },
      {
        nombre: "Ice cream sandwich",
        id: "237",
        correo: "IceCream@email.com",
        telefono: "37000000",
      },
      {
        nombre: "Eclair",
        id: "262",
        correo: "Eclair@email.com",
        telefono: "36100000",
      },
      {
        nombre: "Cupcake",
        id: "305",
        correo: "Cupcake@email.com",
        telefono: "37200000",
      },
      {
        nombre: "Gingerbread",
        id: "356",
        correo: "Gingerbread@email.com",
        telefono: "37100000",
      },
      {
        nombre: "Jelly bean",
        id: "375",
        correo: "JellyBean@email.com",
        telefono: "37300000",
      },
      {
        nombre: "Lollipop",
        id: "3920000",
        correo: "Lollipop@email.com",
        telefono: "37400000",
      },
      {
        nombre: "Honeycomb",
        id: "4080000",
        correo: "Honeycomb@email.com",
        telefono: "37500000",
      },
      {
        nombre: "Donut",
        id: "4520000",
        correo: "Donut@email.com",
        telefono: "35100000",
      },
      {
        nombre: "KitKat",
        id: "4989000",
        correo: "KitKat@email.com",
        telefono: "36500000",
      },
      {
        nombre: "Candy",
        id: "3982000",
        correo: "Candy@email.com",
        telefono: "31500000",
      },
    ],
    participante: {},
  }),
  getters: {
    getParticipanteById() {
      return (id) => {
        const index = this.participantes.findIndex((t) => t.id === id);
        if (index >= 0) {
          return this.participantes[index];
        } else return;
      };
    },
  },
  actions: {
    crearParticipante(participante) {
      this.participantes.unshift(participante);
      console.log(this.participantes);
    },
    listarParticipantes() {},
    eliminarParticipante(id) {
      const index = this.participantes.findIndex((t) => t.id === id);
      if (index >= 0) {
        this.participantes.splice(index, 1);
        console.log(this.participantes);
      }
    },
    editarParticipante(dato) {
      const index = this.participantes.findIndex((t) => t.id === dato.id);
      if (index >= 0) {
        this.participantes[index] = { ...dato };
        console.log(this.participantes[index]);
      }
    },
  },
});
