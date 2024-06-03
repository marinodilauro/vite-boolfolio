<script>
import AppLogo from './AppLogo.vue';

export default {
  name: 'AppFooter',
  data() {
    return {
      categories: [
        {
          name: 'SiteMap',
          link: [
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
        },
        {
          name: 'Projects',
          link: [
            'Project-1',
            'Project-2',
            'Project-3',
            'Project-4'
          ]
        },
        {
          name: 'Contacts',
          link: [
            'Linkedin',
            'GitHub',
            'CV'
          ]
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

  <div class="container">
    <footer id="footer" class="py-5">
      <div class="row">

        <div class=" col-12 col-md-3 col-lg-3 mb-3">
          <a href="https://github.com/marinodilauro">
            <img src="https://api.daily.dev/devcards/v2/i2wBVvYiWjLfBHxq4txLd.png?type=default&r=zvp" width="250"
              alt="Marino di Lauro's Dev Card" />
          </a>
        </div>

        <div class="col-12 col-md-3 col-lg-3 mb-3 align-self-center" v-for="category in categories">
          <h5>{{ category.name }}</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2" v-for="link in category.link">
              <RouterLink :to="{ name: link.route }" class="nav-link p-0">
                {{ link.name }}
              </RouterLink>
            </li>
          </ul>
        </div>

      </div>

      <div class="d-flex flex-sm-row justify-content-center align-items-center py-4 my-4 border-top gap-3">
        <img width="35" src="/src/assets/img/Avatar.jpg" class="rounded-circle" alt="Marino di Lauro logo">
        <p class="m-0">© 2024 Marino di Lauro. All rights reserved.</p>
      </div>
    </footer>
  </div>

</template>

<style></style>