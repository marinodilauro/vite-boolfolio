<script>
export default {
  name: 'ProjectBanner',
  props: {
    'title': String,
    'leadText': String,
    'callToAction': String,
    'callToActionUrl': String
  }
}
</script>

<template>

  <div id="banner" class="p-5 mb-4">
    <div class="container-fluid py-5">
      <div class="banner_foreground">
        <div class="banner_content">

          <h1 class="display-5 fw-bold">{{ title }}</h1>
          <p class="col-md-8 fs-4">
            {{ leadText }}
          </p>
          <button class="btn btn-primary btn-lg" type="button" :to="{ name: callToActionUrl }">
            {{ callToAction }}
          </button>

        </div>
      </div>
    </div>
  </div>


</template>

<style></style>