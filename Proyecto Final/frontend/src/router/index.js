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
    path: "/contact",
    name: "contact",
    component: () => import("../components/contactComponent"),
  },
  {
    path: "/acercade",
    name: "acercade",
    component: () => import("../components/acercadeComponent"),
  },
  {
    path: "/terminos",
    name: "terminos",
    component: () => import("../components/terminosComponent"),
  },
  {
    path: "/detalle/:id",
    name: "detalle",
    component: () => import("../components/detalleProductoComponent"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../components/loginComponent"),
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("../components/adminComponent"),
  },
  {
    path: "/inventory",
    name: "inventory",
    component: () => import("../components/inventoryViewComponent"),
  },
  {
    path: "/create-product",
    name: "create-product",
    component: () => import("../components/inventoryCreateComponent"),
  },
  {
    path: "/edit/:id",
    name: "edit",
    component: () => import("../components/editComponent"),
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("../components/products/cart/CartProducts"),
  },
  {
    path: "/update-user",
    name: "uptate-user",
    component: () => import("../components/actualizarUsuarioComponent"),
  },
  {
    path: "/create-user",
    name: "create-user",
    component: () => import("../components/regUserComponent"),
  },
  {
    path: "/list-user",
    name: "list-user",
    component: () => import("../components/listUserComponent.vue"),
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;