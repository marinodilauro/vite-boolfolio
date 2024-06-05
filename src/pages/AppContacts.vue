<script>
import axios from 'axios';

export default {
  name: 'AppContacts',
  data() {
    return {

      // API varaibles
      base_api_url: 'http://127.0.0.1:8000',

      name: '',
      email: '',
      message: '',
      loading: false,
      success: false,
      errors: false
    }
  },
  methods: {

    sendMessage() {
      this.loading = true;

      const data = {
        name: this.name,
        email: this.email,
        message: this.message
      }

      const apiUrl = `${this.base_api_url}/api/contacts`;

      axios.post(apiUrl, data)
        .then(response => {
          console.log(response);

          if (response.data.success) {
            // show success message
            this.name = '';
            this.email = '';
            this.message = '';
            this.success = response.data.message;

          } else {
            // get errors
            this.errors = response.data.errors
            console.log(this.errors);
          }

          this.loading = false;
        })
        .catch(err => {
          console.log(err);
        })

    }
  }
}
</script>

<template>

  <section id="contacts">
    <div class="container">
      <h3 class="display-4 text-end">contact<strong class="poppins-bold">me</strong></h3>
      <section class="py-8">
        <div class="container">

          <template v-if="success">
            <div class="alert alert-success alert-dismissible fade show" role="alert">
              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
              <strong>Thank you!</strong>
              <br>
              <span>Your email has been received!</span>
            </div>
          </template>

          <template v-if="errors">
            <div class="alert alert-danger alert-dismissible fade show" role="alert">
              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
              <strong>Errors</strong>
              <ul class="list-unstyled">
                <li class="text-danger" v-for="error in errors">
                  {{ error[0] }}
                </li>
              </ul>
            </div>
          </template>

          <form @submit.prevent="sendMessage()">

            <div class="mb-3">
              <label for="name" class="form-label">Name</label>
              <input type="text" class="form-control" :class="{ 'is-invalid': errors.name }" name="name" id="name"
                aria-describedby="helpId" placeholder="" v-model="name" />
              <small id="nameHelper" class="form-text text-muted">Help text</small>
            </div>

            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input type="email" class="form-control" :class="{ 'is-invalid': errors.email }" name="email" id="email"
                aria-describedby="helpId" placeholder="" v-model="email" />
              <small id="emailHelper" class="form-text text-muted">Help text</small>
            </div>

            <div class="mb-3">
              <label for="message" class="form-label">Message</label>
              <textarea class="form-control" :class="{ 'is-invalid': errors.message }" name="message" id="message"
                rows="3" v-model="message"></textarea>
              <small id="messageHelper" class="form-text text-muted">Help text</small>
            </div>

            <button type="submit" class="btn btn-primary" :disabled="loading">
              {{ loading ? 'Sending message...' : 'Send' }}
            </button>

          </form>
        </div>
      </section>
    </div>
  </section>

</template>

<style></style>