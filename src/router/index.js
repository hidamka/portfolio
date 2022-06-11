import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SkillSet from "../views/SkillSet.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutMe.vue"),
  },
  {
    path: "/skills",
    name: "SkillSet",
    component: SkillSet,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
