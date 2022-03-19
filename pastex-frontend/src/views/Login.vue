<template>
  <div class="login">
    <h1 class="mt-5">Login</h1>
        <div class="col d-flex justify-content-center mt-4">
            <b-form style="width: 35%">
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

                <b-button class="mt-3" variant="dark" @click="login">Login</b-button>
            </b-form>
        </div>
  </div>
</template>

<script>
import UsersService from '@/services/UsersService'

export default {
  name: 'Login',

  data () {
    return {
      username: '',
      password: '',
      errors: []
    }
  },
  methods: {
    async login () {
      this.errors = []
      try {
        if (!(this.username === '' || this.password === '')) {
          const response = await UsersService.login({
            username: this.username,
            password: this.password
          })
          this.$store.dispatch('setToken', response.data.token)
          this.$store.dispatch('setUser', response.data.user)
          console.log(response.data.user)
          this.$router.push('/')
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
