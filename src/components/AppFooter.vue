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
            'Home',
            'About',
            'Projects',
            'Contacts'
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


  <footer id="footer" class=" bg-gray-300 text-gray-600 body-font">
    <div
      class="container px-3 py-6 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">

      <a target="_blank" href="https://github.com/marinodilauro">
        <img src="https://api.daily.dev/devcards/v2/i2wBVvYiWjLfBHxq4txLd.png?type=default&r=ias" width="250"
          alt="Marino di Lauro's Dev Card" />
      </a>

      <div class="flex-grow flex flex-wrap md:pl-20 md:mt-0 mt-10 md:text-left text-center pt-3">

        <div class="lg:w-1/4 md:w-1/2 w-full px-4" v-for="category in categories">
          <h2 class="title-font font-medium uppercase text-gray-900 tracking-widest text-sm mb-3">{{ category.name }}
          </h2>
          <nav class="list-none mb-10">
            <li v-for="link in category.link">
              <a class="text-gray-600 hover:text-gray-800" href="#">{{ link }}</a>
            </li>
          </nav>
        </div>

      </div>
    </div>

  </footer>


</template>

<style></style>