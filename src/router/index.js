import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/example/HomeView.vue";

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
    component: () => import("@/views/example/AboutView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login/LoginView.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/login/RegisterView.vue"),
  },
  {
    path: "/user",
    name: "user",
    component: () => import("../views/user/UserView.vue"),
  },
  {
    path: "/pay",
    name: "payment",
    children: [
      {
        path: "/pay",
        name: "payment",
        component: () => import("../views/pay/IndexView.vue"),
      },
      {
        path: "/pay/scan",
        name: "scan code",
        component: () => import("../views/pay/ScanView.vue"),
      },
      {
        path: "/pay/show",
        name: "show code",
        component: () => import("../views/pay/CodeView.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
