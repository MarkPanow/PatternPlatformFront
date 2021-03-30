<template>
  <b-navbar>
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">

        <img src="@/assets/pervaSafeLogo.png"
             alt="Logo">

      </b-navbar-item>
    </template>
    <template slot="end">
      <b-navbar-item style="text-decoration: none;" tag="router-link" :to="{ path: '/' }">
        Home
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/about' }">
        About
      </b-navbar-item>
      <b-navbar-item v-if="!this.$store.state.isLogged" @click="openLoginModal">
        Login
      </b-navbar-item>
      <b-navbar-item v-if="this.$store.state.isLogged" @click="logout">
        Logout
      </b-navbar-item>

    </template>
  </b-navbar>
</template>

<script lang="ts">

import {Component} from 'vue-property-decorator';
import Vue from 'vue'
import ModalLogin from '@/components/ModalLogin.vue'


@Component({
  components: {
    ModalLogin
  }
})

export default class Navbar extends Vue {

  private openLoginModal() {
    this.$buefy.modal.open({
      parent: this,
      component: ModalLogin,
      trapFocus: true
    })
  }

  private logout() {
    this.$store.commit('statusLogin', false)
  }


}
</script>