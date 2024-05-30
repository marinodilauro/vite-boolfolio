<script>

import axios from 'axios';

export default {
  name: 'AppMain',
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
          console.log(response);
          this.projects = response.data.projects;
          this.loading = false;
        })
        .catch(errr => {
          console.error(err);
        })
    }
  },
  mounted() {
    let url = this.base_api_url + this.base_project_url;
    this.callApi(url);
  }
}

</script>

<template>

  <main>
    <div class="container mx-auto">

      <div class="grid grid-cols-4 gap-4" v-if="!loading">
        <div class="col" v-for="project in projects.data">

          <div class="card flex flex-col max-w-sm rounded overflow-hidden shadow-lg">

            <template v-if="project.thumb.startsWith('uploads')">
              <img :src="base_api_url + '/storage/' + project.thumb" alt="">
            </template>

            <template v-else>
              <img :src="project.thumb" alt="">
            </template>

            <div class="card-body grow px-6 py-4">

              <h3 class="font-bold text-xl mb-2">{{ project.title }}</h3>

              <p class="text-gray-700 text-base">
                {{ project.description }}
              </p>

            </div>

            <div class="px-6 pt-4 pb-2">
              <span
                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                v-for="tag in project.technologies">
                {{ tag.name }}
              </span>
            </div>

          </div>



        </div>
      </div>



      <div class="grid grid-cols-4 gap-4" v-else>


        <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm h-96 w-full mx-auto">
          <div class="animate-pulse flex space-x-4">
            <div class="flex-1 space-y-6 py-1">
              <div class="h-2 bg-slate-700 h-40 rounded"></div>
              <div class="h-2 bg-slate-700 rounded"></div>
              <div class="space-y-3">
                <div class="grid grid-cols-3 gap-4 mb-5">
                  <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                  <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                  <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                  <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                  <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                  <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                </div>
                <div class="grid grid-cols-5 gap-4">
                  <div class="h-6 bg-slate-700 rounded-full col-span-1"></div>
                  <div class="h-6 bg-slate-700 rounded-full col-span-1"></div>
                  <div class="h-6 bg-slate-700 rounded-full col-span-1"></div>
                  <div class="h-6 bg-slate-700 rounded-full col-span-1"></div>
                  <div class="h-6 bg-slate-700 rounded-full col-span-1"></div>
                  <div class="h-6 bg-slate-700 rounded-full col-span-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm h-96 w-full mx-auto">
          <div class="animate-pulse flex space-x-4">
            <div class="flex-1 space-y-6 py-1">
              <div class="h-2 bg-slate-700 h-40 rounded"></div>
              <div class="h-2 bg-slate-700 rounded"></div>
              <div class="space-y-3">
                <div class="grid grid-cols-3 gap-4 mb-5">
                  <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                  <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                  <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                  <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                  <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                  <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                </div>
                <div class="grid grid-cols-5 gap-4">
                  <div class="h-6 bg-slate-700 rounded-full col-span-1"></div>
                  <div class="h-6 bg-slate-700 rounded-full col-span-1"></div>
                  <div class="h-6 bg-slate-700 rounded-full col-span-1"></div>
                  <div class="h-6 bg-slate-700 rounded-full col-span-1"></div>
                  <div class="h-6 bg-slate-700 rounded-full col-span-1"></div>
                  <div class="h-6 bg-slate-700 rounded-full col-span-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm h-96 w-full mx-auto">
          <div class="animate-pulse flex space-x-4">
            <div class="flex-1 space-y-6 py-1">
              <div class="h-2 bg-slate-700 h-40 rounded"></div>
              <div class="h-2 bg-slate-700 rounded"></div>
              <div class="space-y-3">
                <div class="grid grid-cols-3 gap-4 mb-5">
                  <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                  <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                  <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                  <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                  <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                  <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                </div>
                <div class="grid grid-cols-5 gap-4">
                  <div class="h-6 bg-slate-700 rounded-full col-span-1"></div>
                  <div class="h-6 bg-slate-700 rounded-full col-span-1"></div>
                  <div class="h-6 bg-slate-700 rounded-full col-span-1"></div>
                  <div class="h-6 bg-slate-700 rounded-full col-span-1"></div>
                  <div class="h-6 bg-slate-700 rounded-full col-span-1"></div>
                  <div class="h-6 bg-slate-700 rounded-full col-span-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm h-96 w-full mx-auto">
          <div class="animate-pulse flex space-x-4">
            <div class="flex-1 space-y-6 py-1">
              <div class="h-2 bg-slate-700 h-40 rounded"></div>
              <div class="h-2 bg-slate-700 rounded"></div>
              <div class="space-y-3">
                <div class="grid grid-cols-3 gap-4 mb-5">
                  <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                  <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                  <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                  <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                  <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                  <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                </div>
                <div class="grid grid-cols-5 gap-4">
                  <div class="h-6 bg-slate-700 rounded-full col-span-1"></div>
                  <div class="h-6 bg-slate-700 rounded-full col-span-1"></div>
                  <div class="h-6 bg-slate-700 rounded-full col-span-1"></div>
                  <div class="h-6 bg-slate-700 rounded-full col-span-1"></div>
                  <div class="h-6 bg-slate-700 rounded-full col-span-1"></div>
                  <div class="h-6 bg-slate-700 rounded-full col-span-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm h-96 w-full mx-auto">
          <div class="animate-pulse flex space-x-4">
            <div class="flex-1 space-y-6 py-1">
              <div class="h-2 bg-slate-700 h-40 rounded"></div>
              <div class="h-2 bg-slate-700 rounded"></div>
              <div class="space-y-3">
                <div class="grid grid-cols-3 gap-4 mb-5">
                  <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                  <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                  <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                  <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                  <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                  <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                </div>
                <div class="grid grid-cols-5 gap-4">
                  <div class="h-6 bg-slate-700 rounded-full col-span-1"></div>
                  <div class="h-6 bg-slate-700 rounded-full col-span-1"></div>
                  <div class="h-6 bg-slate-700 rounded-full col-span-1"></div>
                  <div class="h-6 bg-slate-700 rounded-full col-span-1"></div>
                  <div class="h-6 bg-slate-700 rounded-full col-span-1"></div>
                  <div class="h-6 bg-slate-700 rounded-full col-span-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm h-96 w-full mx-auto">
          <div class="animate-pulse flex space-x-4">
            <div class="flex-1 space-y-6 py-1">
              <div class="h-2 bg-slate-700 h-40 rounded"></div>
              <div class="h-2 bg-slate-700 rounded"></div>
              <div class="space-y-3">
                <div class="grid grid-cols-3 gap-4 mb-5">
                  <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                  <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                  <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                  <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                  <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                  <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                </div>
                <div class="grid grid-cols-5 gap-4">
                  <div class="h-6 bg-slate-700 rounded-full col-span-1"></div>
                  <div class="h-6 bg-slate-700 rounded-full col-span-1"></div>
                  <div class="h-6 bg-slate-700 rounded-full col-span-1"></div>
                  <div class="h-6 bg-slate-700 rounded-full col-span-1"></div>
                  <div class="h-6 bg-slate-700 rounded-full col-span-1"></div>
                  <div class="h-6 bg-slate-700 rounded-full col-span-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm h-96 w-full mx-auto">
          <div class="animate-pulse flex space-x-4">
            <div class="flex-1 space-y-6 py-1">
              <div class="h-2 bg-slate-700 h-40 rounded"></div>
              <div class="h-2 bg-slate-700 rounded"></div>
              <div class="space-y-3">
                <div class="grid grid-cols-3 gap-4 mb-5">
                  <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                  <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                  <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                  <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                  <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                  <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                </div>
                <div class="grid grid-cols-5 gap-4">
                  <div class="h-6 bg-slate-700 rounded-full col-span-1"></div>
                  <div class="h-6 bg-slate-700 rounded-full col-span-1"></div>
                  <div class="h-6 bg-slate-700 rounded-full col-span-1"></div>
                  <div class="h-6 bg-slate-700 rounded-full col-span-1"></div>
                  <div class="h-6 bg-slate-700 rounded-full col-span-1"></div>
                  <div class="h-6 bg-slate-700 rounded-full col-span-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm h-96 w-full mx-auto">
          <div class="animate-pulse flex space-x-4">
            <div class="flex-1 space-y-6 py-1">
              <div class="h-2 bg-slate-700 h-40 rounded"></div>
              <div class="h-2 bg-slate-700 rounded"></div>
              <div class="space-y-3">
                <div class="grid grid-cols-3 gap-4 mb-5">
                  <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                  <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                  <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                  <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                  <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                  <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                </div>
                <div class="grid grid-cols-5 gap-4">
                  <div class="h-6 bg-slate-700 rounded-full col-span-1"></div>
                  <div class="h-6 bg-slate-700 rounded-full col-span-1"></div>
                  <div class="h-6 bg-slate-700 rounded-full col-span-1"></div>
                  <div class="h-6 bg-slate-700 rounded-full col-span-1"></div>
                  <div class="h-6 bg-slate-700 rounded-full col-span-1"></div>
                  <div class="h-6 bg-slate-700 rounded-full col-span-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>




    </div>
  </main>

</template>

<style></style>