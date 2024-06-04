<script>
import AppLogo from './AppLogo.vue';

export default {
  name: 'AppFooter',
  components: {
    AppLogo
  },
  props: {
    projects: Array
  },
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
            {
              name: 'Project 1',
              route: 'home'
            },
            {
              name: 'Project 2',
              route: 'about'
            },
            {
              name: 'Project 3',
              route: 'projects'
            },
            {
              name: 'Project 4',
              route: 'contacts'
            }
          ]
        },
        {
          name: 'Contacts',
          link: [
            {
              name: 'Linkedin',
              route: 'home'
            },
            {
              name: 'GitHub',
              route: 'about'
            },
            {
              name: 'CV',
              route: 'projects'
            }
          ]
        }
      ]
    }
  }
}
</script>

<template>


  <footer id="footer" class="pt-4">
    <div class="container">
      <div class="row">

        <div class="col-12 col-md-4 col-lg-4 align-self-center" v-for="category in categories">
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
    </div>
  </footer>


</template>

<style></style>