import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PropListing from "../views/PropListing.vue";
import LegalServices from "../views/Legalservices.vue";
import PropEnquiry from "../views/PropEnquiry.vue";
import ConServices from "../views/ConServices.vue";
import VasthuServices from "../views/VasthuServices.vue";
import SignIn from '../views/SignIn.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/plisting",
    component: PropListing,
  },
  {
    path: "/legalservices",
    component: LegalServices,
  },
  {
    path: "/propenquiry",
    component: PropEnquiry,
  },
  {
    path: "/conservices",
    component:ConServices,
  },
  {
    path: "/vasthuservices",
    component:VasthuServices
  },
  {
    path:"/signin",
    component:SignIn
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
