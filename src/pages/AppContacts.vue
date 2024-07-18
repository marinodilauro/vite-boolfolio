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
    <div class="container wrapper">
      <h3 class="display-4 text-end">contact<strong class="poppins-bold">me</strong></h3>
      <section class="p-5">
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
              <small id="nameHelper" class="form-text">Your full name</small>
            </div>

            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input type="email" class="form-control" :class="{ 'is-invalid': errors.email }" name="email" id="email"
                aria-describedby="helpId" placeholder="" v-model="email" />
              <small id="emailHelper" class="form-text">Your email address</small>
            </div>

            <div class="mb-3">
              <label for="message" class="form-label">Message</label>
              <textarea class="form-control" :class="{ 'is-invalid': errors.message }" name="message" id="message"
                rows="3" v-model="message"></textarea>
              <small id="messageHelper" class="form-text">Your message</small>
            </div>

            <button type="submit" class="button" :disabled="loading">
              <span class="button_top">
                {{ loading ? 'Sending message...' : 'Send' }}
              </span>
            </button>

          </form>
        </div>
      </section>
    </div>
  </section>

</template>

<style scoped>
.form-text {
  color: rgba(240, 250, 255, 0.8);
}

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