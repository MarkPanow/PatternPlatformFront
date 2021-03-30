<template>
  <b-menu class="mt-2">
    <b-menu-list label="Pattern">
      <b-menu-item label="Pattern" icon="lock-pattern" tag="router-link" to="/patterns"></b-menu-item>
      <b-menu-item label="Connection" icon="transit-connection-variant" tag="router-link"
                   to="/connections"></b-menu-item>
      <b-menu-item label="Tags" icon="label" tag="router-link" to="/tags"></b-menu-item>
    </b-menu-list>
    <b-menu-list label="Control Room">
      <b-menu-item label="Visualisation" icon="monitor-multiple" tag="router-link" to="/control"></b-menu-item>
    </b-menu-list>
  </b-menu>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';


@Component({
      components: {}
    }
)
export default class Menu extends Vue {

}

</script>

<style>

</style>