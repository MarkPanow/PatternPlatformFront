<template>
  <div class="columns">
    <div class="column is-2">
      <div class="card">
        <header class="card-header" style="height: 75px; box-shadow: none">
          <p class="title p-5 is-5">
            Tags:
          </p>
        </header>
        <div class="card-content">
          <div v-for="tag in tags" @click="showPattern(tag)">
            <b-button size="is-small" icon-left="label" class="mb-3" type="is-light">{{ tag }}</b-button>
          </div>
        </div>
      </div>
    </div>
    <div class="column is-4">
      <div class="card">
        <header class="card-header" style="height: 75px; box-shadow: none">
          <p class="title p-5 is-5">
            Pattern:
          </p>
        </header>

        <div class="card-content">
          <div class="mb-2" v-for="pattern in filteredPatterns">
            <router-link :to="{path: '/patterns/'+pattern.name.replace(/\s+/g, '-').toLowerCase()}">
              {{ pattern.name }}
            </router-link>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';


@Component({
      components: {}
    }
)

export default class Tags extends Vue {

  private patterns = []
  private tags = []
  private filteredPatterns = []


  private showPattern(s: String) {
    Vue.axios.get(`${this.$store.state.root}/api/tags`).then(resp => {
      let tagsData = resp.data
      let matchingPatterns = tagsData.filter((c: any) => (c.tag == s)).map((id: any) => id.pattern)
      this.filteredPatterns = this.patterns.filter((p: any) => (matchingPatterns.includes(p.patternId)))
    })
  }

  private async getData() {

    Promise.all([
      fetch(`${this.$store.state.root}/api/patterns`, {
        method: 'GET'
      }),
      fetch(`${this.$store.state.root}/api/tags`, {
        method: 'GET'
      })
    ]).then(async allResponses => {
      this.patterns = await allResponses[0].json()
      let data = await allResponses[1].json()
      this.tags = [...new Set(data.map((x: any) => x.tag))] as []
    })

  }

  created() {
    this.getData()
  }

}


</script>

<style scoped>


</style>

