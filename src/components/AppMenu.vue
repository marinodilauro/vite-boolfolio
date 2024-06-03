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

  <!--   <header id="header">
    <nav class="navbar navbar-expand-sm navbar-dark ">
      <div class="container">

        <a class="navbar-brand" href="#">
          <img width="60" src="/src/assets/img/Avatar.jpg" class="rounded-circle" alt="Marino di Lauro logo">
        </a>

        <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="collapsibleNavId">
          <ul class="navbar-nav me-auto mt-2 mt-lg-0">
            <li class="nav-item" v-for="item in navLinks">
              <RouterLink :to="{ name: item.route }" class="nav-link" aria-current="page">
                {{ item.name }}
              </RouterLink>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  </header> -->
  <div id="menu">
    <ul class="list-unstyled">
      <li class="nav-item" v-for="item in navLinks">
        <RouterLink :to="{ name: item.route }" class="nav-link poppins-bold" aria-current="page">
          {{ item.name }}
        </RouterLink>
      </li>
    </ul>
  </div>

</template>

<style></style>