<script>
import { RouterLink } from 'vue-router';
import AppLoader from '../components/AppLoader.vue';
import axios from 'axios';

export default {
  name: 'AppProjects',
  components: {
    AppLoader
  },
  data() {
    return {

      // API varaibles
      base_api_url: 'http://127.0.0.1:8000',
      base_project_url: '/api/projects',

      // Other variables
      projects: [],
      loading: true,
    }
  },
  methods: {
    callApi(url) {
      axios
        .get(url)
        .then(response => {
          this.projects = response.data.projects;
          this.loading = false;
        })
        .catch(err => {
          console.error(err);
        })
    }
  },
  mounted() {
    const url = this.base_api_url + this.base_project_url;
    this.callApi(url);
  }
}

</script>

<template>

  <div class="project_list container mx-auto">
    <h3 class="display-4 text-end">all<strong class="poppins-bold">projects</strong></h3>
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4" v-if="!loading">

      <div class="col" v-for="project in projects.data">

        <div class="project_card card border-0 d-flex">

          <RouterLink :to="{ name: 'project', params: { slug: project.slug } }">

            <div class="card-img-top">
              <img :src="base_api_url + '/storage/' + project.thumb" :alt="project.title + 'thumbnail'" />
            </div>

            <div class="card-title">
              <h3 class="card-title">{{ project.title }}</h3>
            </div>

          </RouterLink>

          <div class="card-body flex-fill">
            <p>{{ project.description }}</p>

            <div>
              <button type="button">
                <a :href="project.project_link" target="_blank">
                  View project
                </a>
              </button>

              <button type="button">
                <a :href="project.repo_link" target="_blank">
                  Check repository
                </a>
              </button>

            </div>
          </div>

          <div class="card-footer d-flex">
            <span class="tag" v-for="tag in project.technologies">
              {{ tag.name }}
            </span>
          </div>

        </div>

      </div>
    </div>

    <!-- Loader -->
    <AppLoader v-else />

  </div>

</template>

<style></style>
