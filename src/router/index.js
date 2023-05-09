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
    meta: {
      title: "About",
    },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login/LoginView.vue"),
    meta: {
      title: "Login",
    },
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/login/RegisterView.vue"),
    meta: {
      title: "Register",
    },
  },
  {
    path: "/user",
    children: [
      {
        path: "",
        name: "user",
        component: () => import("../views/user/UserInfo.vue"),
        meta: {
          title: "User Info",
        },
      },
      {
        path: "setting",
        name: "setting",
        component: () => import("../views/user/UserSetting.vue"),
        meta: {
          title: "User Setting",
        },
      },
      {
        path: "history",
        name: "history",
        component: () => import("../views/user/PayHistory.vue"),
        meta: {
          title: "Payment History",
        },
      },
      {
        path: "apikey",
        name: "api-key",
        component: () => import("../views/user/ApiKey.vue"),
        meta: {
          title: "Api Key",
        },
      },
    ],
  },
  {
    path: "/admin",
    component: () => import("../views/admin/IndexView.vue"),
    meta: {
      title: "Admin",
    },
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
        meta: {
          title: "Key Management",
        },
      },
      {
        path: "role",
        name: "admin-role",
        component: () => import("../views/admin/RoleRequest.vue"),
        meta: {
          title: "Role Management",
        },
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
        meta: {
          title: "Pay View",
        },
      },
      {
        path: "scan",
        name: "scan-code",
        component: () => import("../views/pay/ScanView.vue"),
        meta: {
          title: "Scan Code",
        },
      },
      {
        path: "show",
        name: "show-code",
        component: () => import("../views/pay/CodeView.vue"),
        meta: {
          title: "Show Code",
        },
      },
    ],
  },
  {
    path: "/test",
    name: "test",
    component: () => import("../views/example/TestView.vue"),
    meta: {
      title: "Test Shop View",
    },
  },
  {
    path: "/test1",
    name: "test1",
    component: () => import("../views/example/ElTestView.vue"),
    meta: {
      title: "UI Test View",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
