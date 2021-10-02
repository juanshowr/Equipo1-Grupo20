import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../components/ViewProductComponent"),
  },
  {
    path: "/checkout",
    name: "checkout",
    component: () => import("../components/CheckoutComponent"),
  },
  {
    path: "/empty",
    name: "empty",
    component: () => import("../components/emptyComponent"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
