<script>
import { RouterLink } from 'vue-router';
import AppBanner from '../components/AppBanner.vue';
import axios from 'axios';

export default {
  name: 'AppProjects',
  components: {
    AppBanner
  },
  data() {
    return {
      base_api_url: 'http://127.0.0.1:8000',
      base_project_url: '/api/projects',
      projects: [],
      loading: true
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

  <div class="container mx-auto p-5">
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4" v-if="!loading">

      <div class="col" v-for="project in projects.data">

        <RouterLink :to="{ name: 'project', params: { slug: project.slug } }">
          <div class="project_card card border-0 d-flex">
            <div class="card-img-top">
              <img class="img-fluid" :src="base_api_url + '/storage/' + project.thumb"
                :alt="project.title + 'thumbnail'" />
            </div>
            <div class="card-body flex-fill">
              <h3 class="card-title">{{ project.title }}</h3>
              <p>
                {{ project.description }}
              </p>
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
        </RouterLink>

      </div>

    </div>

    <!-- TODO: Skeleton card for loading -->
  </div>

</template>

<style></style>
