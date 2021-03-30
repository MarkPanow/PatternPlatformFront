<template>
  <div class="p-2">
    <Navbar/>
    <div class="columns">
      <div style="min-width: 160px" class="column is-1 ml-3">
        <Menu/>
      </div>
      <div class="column">
        <router-view/>
      </div>
    </div>
    <Footer/>
  </div>

</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import Navbar from '@/components/Navbar.vue'
import Menu from '@/components/Menu.vue'
import Footer from '@/components/Footer.vue'


@Component({
      components: {
        Navbar,
        Menu,
        Footer,
      }
    }
)
export default class App extends Vue {

}

</script>

<style>

</style>
