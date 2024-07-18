<script>
import axios from 'axios';
import ProjectBanner from '../components/ProjectBanner.vue';
import AppLoader from '../components/AppLoader.vue';

export default {
  name: 'SingleProject',
  components: {
    ProjectBanner,
    AppLoader
  },
  data() {
    return {
      base_api_url: 'http://127.0.0.1:8000',
      base_project_url: '/api/projects/',
      project: '',
      cover_image_base_path: 'http://127.0.0.1:8000/storage/',
      cover_image_path: '',
      loading: true
    }
  },
  methods: {
    callApi(url) {
      axios
        .get(url)
        .then(response => {
          if (response.data.success) {

            // get project data
            this.project = response.data.result;
            this.cover_image_path = this.cover_image_base_path + response.data.result.thumb;
            this.loading = false;
          } else {

            // handle 404 error  page
            this.$router.push({ name: 'not-found' });
          }
        })
        .catch(err => {
          console.error(err);
        })
    }
  },
  computed: {
    backgroundImageStyle() {
      return {
        backgroundImage: `url(${this.base_api_url + '/storage/' + this.project.thumb})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      };
    }
  },
  mounted() {
    const url = this.base_api_url + this.base_project_url + this.$route.params.slug;
    this.callApi(url);
  }
}
</script>

<template>

  <div v-if="!loading">
    <h3 class="display-4 text-end"><strong class="poppins-bold">{{ project.title }}</strong></h3>
    <div class="single_project container-fluid p-0">

      <div class="container">
        <ProjectBanner :title="project.title" :category="project.type.name" :tags="project.technologies"
          :style="backgroundImageStyle">
        </ProjectBanner>

        <section id="project_details">

          <h4 class="display-5 text-start poppins-bold mb-3">Project description</h4>

          <div class="d-flex gap-3 mb-5">
            <button type="button" class="button" :disabled="!project.project_link">
              <span class="button_top">
                <a :href="project.project_link" target="_blank">
                  View project
                </a>
              </span>
            </button>

            <button type="button" class="button" :disabled="!project.repo_link">
              <span class="button_top">
                <a :href="project.repo_link" target="_blank">
                  Check repository
                </a>
              </span>
            </button>
          </div>



          <div>
            <p class="fs-4">{{ project.description }}</p>
          </div>

        </section>

      </div>


    </div>
  </div>

  <!-- Loader -->
  <AppLoader v-else />

</template>

<style>
.button {
  --button_radius: 0.75rem;
  --button_color: aliceblue;
  --button_outline_color: linear-gradient(135deg, #0023b3 0%, #00d2ff 100%);
  font-weight: bold;
  border: none;
  border-radius: var(--button_radius);
  background: var(--button_outline_color);

  .button_top {
    display: block;
    box-sizing: border-box;
    border: 2px solid var(--button_outline_color);
    border-radius: var(--button_radius);
    padding: 0.5rem 1rem;
    background: var(--button_color);
    transform: translateY(-0.2rem);
    transition: transform 0.1s ease;

    a {
      color: linear-gradient(135deg, #0023b3 0%, #00d2ff 100%);
      text-decoration: none;
    }
  }

  &:hover .button_top {
    /* Pull the button upwards when hovered */
    transform: translateY(-0.33em);
  }

  &:active .button_top {
    /* Push the button downwards when pressed */
    transform: translateY(0);
  }
}
</style>