<script>
import { RouterLink } from 'vue-router';
import AppLogo from './AppLogo.vue';
import gsap from 'gsap';

export default {
  name: 'AppMenu',
  data() {
    return {
      navLinks: [
        {
          name: 'HOME',
          route: 'home'
        },
        {
          name: 'ABOUT',
          route: 'about'
        },
        {
          name: 'PROJECTS',
          route: 'projects'
        },
        {
          name: 'CONTACTS',
          route: 'contacts'
        }
      ]
    }
  },
  components: {
    AppLogo
  },
  mounted() {
    gsap.fromTo('#menu .nav-item:first-child',
      { x: -500 },
      {
        duration: 0.5,

        x: 0
      }
    )
    gsap.fromTo('#menu .nav-item:nth-child(2)',
      { x: -500 },
      {
        duration: 0.7,

        delay: 0.05,
        x: 0
      }
    )
    gsap.fromTo('#menu .nav-item:nth-child(3)',
      { x: -500 },
      {
        duration: 0.7,

        delay: 0.1,
        x: 0
      }
    )
    gsap.fromTo('#menu .nav-item:nth-child(4)',
      { x: -500 },
      {
        duration: 0.7,

        delay: 0.15,
        x: 0
      }
    )
  }
}


</script>

<template>

  <div id="menu" class="d-flex flex-column h-100">
    <ul class="list-unstyled flex-fill">
      <li class="nav-item" v-for="item in navLinks">
        <RouterLink :to="{ name: item.route }" class="nav-link" aria-current="page">
          {{ item.name }}
        </RouterLink>
      </li>
    </ul>
    <div class="d-flex flex-sm-row justify-content-center align-items-center py-2 border-top gap-3">
      <img width="35" src="/src/assets/img/Avatar.jpg" class="rounded-circle" alt="Marino di Lauro logo">
      <p class="m-0">© 2024 Marino di Lauro. All rights reserved.</p>
    </div>
  </div>


</template>

<style></style>