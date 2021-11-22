<template>
  <div>
    <h1 class="mt-5" v-if="this.errors.length > 0">Oops... something went wrong</h1>
    <div v-else>
      <h1 class="mt-5">{{this.paste.title}}</h1>
      <b-button variant="danger">Report</b-button>
      <div class="col d-flex justify-content-center mt-4">
        <b-card
          style="max-width: 100rem; min-width: 100rem;"
        >
          <b-card-text>
            {{paste.body}}
          </b-card-text>
        </b-card>
      </div>
      <h3 class="mt-5">Raw paste data</h3>
      <div class="col d-flex justify-content-center mt-4">
        <b-form-textarea readonly
          style="max-width: 100rem; min-width: 100rem;"
          id="textarea"
          :value="this.paste.body"
          rows="20"
          maxlength="644000"
          required
        ></b-form-textarea>
      </div>
    </div>
  </div>
</template>

<script>
import PastesService from '@/services/PastesService'

export default {
  name: 'Paste',

  data: () => ({
    paste: {},
    errors: []
  }),

  methods: {
    async loadPaste () {
      try {
        this.paste = (await PastesService.loadPaste(this.$route.params.id)).data
      } catch (err) {
        this.errors.push(err)
      }
    }
  },
  mounted () {
    this.loadPaste()
  }
}
</script>

<style>

</style>
