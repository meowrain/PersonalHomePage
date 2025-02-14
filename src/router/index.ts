import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@views/Home.vue"),
  },
  {
    path: "/about",
    name: "Abount",
    component: () => import("@views/About.vue"),
  },
  {
    path: "/projects",
    name: "Projects",
    component: () => import("@views/MyProjects.vue"),
  },
  {
    path: "/album",
    name: "Album",
    component: () => import("@views/Album.vue"),
  },
  {
    path: "/loved-videos",
    name: "LovedVideos",
    component: () => import("@views/LovedVideos.vue"),
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
