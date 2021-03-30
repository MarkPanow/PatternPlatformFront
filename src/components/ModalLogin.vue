<template>
  <div class="modal-card" style="width: 300px">
    <header class="modal-card-head">
      <p class="modal-card-title">Login</p>
      <button
          type="button"
          class="delete"
          @click="$emit('close')"/>
    </header>
    <section class="modal-card-body">
      <b-field label="Password">
        <b-input
            type="password"
            v-model="password"
            password-reveal
            placeholder="Your password"
        >
        </b-input>
      </b-field>
    </section>
    <footer class="modal-card-foot">
      <b-button
          label="Close"
          @click="$emit('close')"/>
      <b-button
          @click="login"
          label="Login"
          type="is-primary"/>
    </footer>
  </div>
</template>


<script lang="ts">
import Vue from 'vue'
import {Component} from "vue-property-decorator";

@Component({
      components: {}
    }
)
export default class ModalLogin extends Vue {

  private password = ""


  private async login() {

    if (this.password != "") {
      const pw = this.password
      Vue.axios.post(`${this.$store.state.root}/login`, pw, {
        headers: {
          'Content-Type': 'text/plain'
        }
      })
          .then(resp => {
            this.$store.commit('statusLogin', resp.data)
          })
      this.$emit('close')
    }
  }
}

</script>


