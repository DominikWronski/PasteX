<template>
<div>
  <h1 class="mt-5">Public pastes</h1>
    <div v-if="this.pastes.length > 0">
      <div v-for="paste in pastes" :key="paste.id">
        <div class="col d-flex justify-content-center mt-4">
          <b-card
            :title="paste.title"
            style="max-width: 44rem; min-width: 44rem;"
          >
            <b-card-text>
              {{paste.body}}
            </b-card-text>
            <b-button href="#" variant="dark">Go to paste</b-button>
          </b-card>
        </div>
      </div>
    </div>
  <h3 v-else class="mt-5">Oops... there are no public pastes</h3>
</div>
</template>

<script>
import PastesService from '@/services/PastesService'

export default {
  name: 'Pastes',

  data: () => ({
    pastes: []
  }),
  methods: {
    async loadPastes () {
      this.pastes = (await PastesService.loadPastes()).data
    }
  },
  mounted () {
    this.loadPastes()
  }
}
</script>

<style>

</style>
