import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/example/HomeView.vue";

const routes = [
  {
    path: "/",
    redirect: "/index",
  },
  {
    path: "/index",
    name: "home",
    component: HomeView,
    meta: {
      title: "Home",
    },
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
    children: [
      {
        path: "",
        name: "user",
        component: () => import("../views/user/UserInfo.vue"),
      },
      {
        path: "setting",
        name: "setting",
        component: () => import("../views/user/UserSetting.vue"),
      },
      {
        path: "history",
        name: "history",
        component: () => import("../views/user/PayHistory.vue"),
      },
      {
        path: "apikey",
        name: "api-key",
        component: () => import("../views/user/ApiKey.vue"),
      },
    ],
  },
  {
    path: "/admin",
    component: () => import("../views/admin/IndexView.vue"),
    children: [
      // {
      //   path: "user",
      //   name: "admin-user",
      //   component: () => import("../views/admin/UserAccount.vue"),
      // },
      {
        path: "key",
        name: "admin-key",
        component: () => import("../views/admin/ApiKey.vue"),
      },
      {
        path: "role",
        name: "admin-role",
        component: () => import("../views/admin/RoleRequest.vue"),
      },
    ],
  },
  {
    path: "/pay",
    children: [
      {
        path: "",
        name: "payment",
        component: () => import("../views/pay/IndexView.vue"),
      },
      {
        path: "scan",
        name: "scan-code",
        component: () => import("../views/pay/ScanView.vue"),
      },
      {
        path: "show",
        name: "show-code",
        component: () => import("../views/pay/CodeView.vue"),
      },
    ],
  },
  {
    path: "/test",
    name: "test",
    component: () => import("../views/example/TestView.vue"),
  },
  {
    path: "/test1",
    name: "test1",
    component: () => import("../views/example/ElTestView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
