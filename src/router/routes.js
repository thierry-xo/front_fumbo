const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "categorie", component: () => import("pages/CategoriePage.vue") },
      { path: "histoire", component: () => import("pages/HistoirePage.vue") },
      { path: "auteur", component: () => import("pages/AuteurPage.vuee") },
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
