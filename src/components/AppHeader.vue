<script>
import { RouterLink } from 'vue-router';
import AppLogo from './AppLogo.vue';

export default {
  name: 'AppHeader',
  data() {
    return {
      navLinks: [
        {
          name: 'Home',
          route: 'home'
        },
        {
          name: 'About',
          route: 'about'
        },
        {
          name: 'Projects',
          route: 'projects'
        },
        {
          name: 'Contacts',
          route: 'contacts'
        }
      ]
    }
  },
  components: {
    AppLogo
  }
}


</script>

<template>

  <header id="header">
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
              <RouterLink :to="{ name: item.route }" class="nav-link" href="#" aria-current="page">
                {{ item.name }}
              </RouterLink>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  </header>

</template>

<style></style>