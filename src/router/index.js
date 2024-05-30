import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import RegistrationView from "../views/RegistrationView.vue";
import DashboardView from "../views/DashboardView.vue";
import DesignView from "../views/DesignView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: HomeView,
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: DashboardView,
    },
    {
      path: "/design",
      name: "design",
      component: DesignView,
    },
    {
      path: "/registration",
      name: "registration",
      component: RegistrationView,
    },
  ],
});

export default router;
