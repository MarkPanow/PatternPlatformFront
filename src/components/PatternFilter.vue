<template>
  <div class="columns">
    <div class="column is-2">
      <div class="card">
        <header class="card-header" style="height: 75px; box-shadow: none">
          <div class="title p-5 is-4">
            <div class="mb-4">
              <b-field label="Filter Patterns by Stage">
                <b-radio-button @input="getPattern()" v-model="filterStage" native-value="-1">
                  <span>All</span>
                </b-radio-button>
                <b-radio-button @input="filterPattern()" v-model="filterStage" native-value="0">
                  <b-icon icon="pencil"></b-icon>
                </b-radio-button>
                <b-radio-button @input="filterPattern()" v-model="filterStage" native-value="1">
                  <b-icon icon="head-dots-horizontal"></b-icon>
                </b-radio-button>
                <b-radio-button @input="filterPattern()" v-model="filterStage" native-value="2">
                  <b-icon icon="head-check"></b-icon>
                </b-radio-button>
                <b-radio-button @input="filterPattern()" v-model="filterStage" native-value="3">
                  <b-icon icon="check-bold"></b-icon>
                </b-radio-button>
              </b-field>
            </div>
          </div>
        </header>
        <div class="card-content pt-5">
          <div class=" mb-2" v-for="pattern in filteredPatterns">
            <router-link :to="{path: '/patterns/'+pattern.name.replace(/\s+/g, '-').toLowerCase()}">
              {{ pattern.name }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="column">
      <router-view/>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';


@Component({
      components: {}
    }
)

export default class Patterns extends Vue {

  private filterStage = "-1"
  private patterns = []
  private filteredPatterns = []


  private filterPattern() {
    this.filteredPatterns = this.patterns
    this.filteredPatterns = this.patterns.filter((c: any) => (c.stage == this.filterStage))
  }

  private async getPattern() {

    Vue.axios.get(`${this.$store.state.root}/api/patterns`).then(resp => {
      this.patterns = resp.data
      this.filteredPatterns = this.patterns
    })
  }


  created() {
    this.getPattern()
  }

}


</script>

<style scoped>


</style>

