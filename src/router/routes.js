const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("src/pages/IndexPage.vue") },
      {
        path: "/inscription",
        component: () => import("src/components/RegisterCount.vue"),
      },
      {
        path: "/categorie",
        component: () => import("pages/CategoriePage.vue"),
      },
      { path: "/histoire", component: () => import("pages/HistoirePage.vue") },
      {
        path: "/ouvrage",
        component: () => import("src/pages/OuvragePage.vue"),
      },
      {
        path: "/connection",
        component: () => import("pages/LogginPage.vue"),
      },
      { path: "/Ecrire", component: () => import("src/pages/EcrirePage.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
