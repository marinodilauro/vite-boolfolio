<script>
export default {
  name: 'AppBanner',
  props: {
    'title': String,
    'leadText': String,
    'callToAction': String,
    'callToActionUrl': String
  }
}
</script>

<template>

  <div class="p-5 mb-4 bg-light rounded-3">
    <div class="container-fluid py-5">
      <h1 class="display-5 fw-bold">{{ title }}</h1>
      <p class="col-md-8 fs-4">
        {{ leadText }}
      </p>
      <button class="btn btn-primary btn-lg" type="button" :to="{ name: callToActionUrl }">
        {{ callToAction }}
      </button>
    </div>
  </div>


</template>

<style></style>