
const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      {
        path: "/tablero",
        name: "tablero",
        component: () => import("src/pages/TableroVista.vue"),
      },
      {
        path: "/equipo",
        name: "equipo",
        component: () => import("src/pages/EquipoVista.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes
