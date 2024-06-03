import { createWebHistory, createRouter } from 'vue-router';

import AppHome from "./pages/AppHome.vue";
import AppProjects from "./pages/AppProjects.vue";
import AppAbout from "./pages/AppAbout.vue";
import AppContacts from "./pages/AppContacts.vue";
import SingleProject from "./pages/SingleProject.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AppHome
    },
    {
      path: '/about',
      name: 'about',
      component: AppAbout
    },
    {
      path: '/projects',
      name: 'projects',
      component: AppProjects
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: AppContacts
    },
    {
      path: '/projects/:slug',
      name: 'project',
      component: SingleProject,
      props: true
    }

  ]
})

export default router;