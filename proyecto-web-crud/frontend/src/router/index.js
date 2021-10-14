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
    path: "/viewcontact",
    name: "viewcontact",
    component: () => import("../components/ViewMsgComponent"),
  },
  {
    path: "/viewmsg",
    name: "viewmsg",
    component: () => import("../components/contactMsgViewComponent"),
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
    path: "/detalle",
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
    component: () => import("../components/cartComponent"),
  },
  {
    path: "/update-user",
    name: "uptate-user",
    component: () => import("../components/updateUserComponent"),
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
  {
  path: "/resetpwd",
  name: "resetpwd",
  component: () => import("../components/passwordReset"),
},
{
  path: "/privacidad",
  name: "privacidad",
  component: () => import("../components/privacidadComponent"),
}
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
