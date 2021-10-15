<template>
  <div class="login">
    <h1 class="mt-5">Register</h1>
        <div class="col d-flex justify-content-center mt-4">
            <b-form style="width: 25%">
                <b-form-group
                    label="Username:"
                    >
                    <b-form-input
                    v-model="username"
                    type="text"
                    placeholder="Enter your username"
                    maxlength="100"
                    required
                    ></b-form-input>
                </b-form-group>

                <b-form-group
                    label="Email:"
                    >
                    <b-form-input
                    v-model="email"
                    type="email"
                    placeholder="Enter your email"
                    maxlength="100"
                    required
                    ></b-form-input>
                </b-form-group>

                <b-form-group
                    label="Password:"
                    >
                    <b-form-input
                    v-model="password"
                    placeholder="Enter your password"
                    type="password"
                    maxlength="100"
                    required
                    ></b-form-input>
                </b-form-group>

                <p v-if="errors.length">
                    <b-alert show variant="danger" v-for="error in errors" :key="error">{{error}}</b-alert>
                </p>

                <b-button class="mt-3" variant="dark" @click="register">Create a new account</b-button>
            </b-form>
        </div>
  </div>
</template>

<script>
import UsersService from '@/services/UsersService'

export default {
  name: 'Register',

  data () {
    return {
      username: '',
      email: '',
      password: '',
      errors: []
    }
  },
  methods: {
    async register () {
      this.errors = []
      try {
        if (!(this.username === '' || this.password === '' || this.email === '')) {
          const response = await UsersService.register({
            username: this.username,
            email: this.email,
            password: this.password
          })
          console.log(response)
          this.$router.push('/login')
        } else {
          this.errors.push('Fields cannot be blank.')
        }
      } catch (error) {
        this.errors.push(error.response.data)
      }
    }
  }
}
</script>
