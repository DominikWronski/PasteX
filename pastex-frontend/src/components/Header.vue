<template>
  <div>
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand href="#">PasteX</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item><router-link style="text-decoration: none; color: inherit;" to="/">Home</router-link></b-nav-item>
            <b-nav-item><router-link style="text-decoration: none; color: inherit;" to="/add-paste">Add paste</router-link></b-nav-item>
            <!-- <b-nav-item href="#" disabled>Disabled</b-nav-item> -->
          </b-navbar-nav>

          <b-navbar-nav class="ml-auto" v-if="$store.state.token">

            <b-nav-item-dropdown right>
              <template #button-content>
                <em>{{$store.state.user.username}}</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>

          <b-navbar-nav class="ml-auto" v-else>
            <b-nav-item><router-link style="text-decoration: none; color: inherit;" to="/login">Login</router-link></b-nav-item>
            <b-nav-item><router-link style="text-decoration: none; color: inherit;" to="/register">Register</router-link></b-nav-item>
          </b-navbar-nav>

        </b-collapse>
      </b-navbar>
    </div>
</template>
