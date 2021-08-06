<template>
  <div class="about">
    <h1 class="mt-5">Add new paste</h1>

    <div class="col d-flex justify-content-center mt-4">
      <b-form style="width: 60rem">
        <b-form-group
          label="Paste title:"
        >
        <b-form-input
          id="input-1"
          type="text"
          placeholder="Enter paste title..."
          maxlength="100"
          required
        ></b-form-input>
      </b-form-group>

        <b-form-group
          label="Paste:"
        >
        <b-form-textarea
          id="textarea"
          placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget arcu ac ipsum rutrum consequat a rutrum enim. Nullam quis elit venenatis, finibus risus at, facilisis enim. Cras elementum tortor eu posuere accumsan. Quisque ullamcorper erat vel turpis viverra varius. Aliquam varius vulputate justo id rutrum."
          rows="20"
          maxlength="644000"
          required
        ></b-form-textarea>
      </b-form-group>

      <p class="mt-2">Your paste will be impossible to delete/edit because you are not logged in.</p>

      <b-form-checkbox required class="mb-2 mr-sm-2 mb-sm-0">I have read the terms of use and accept it</b-form-checkbox>

        <b-button class="mt-3" variant="dark">Create new paste</b-button>

      </b-form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Addpaste',
  components: {
  }
}
</script>
