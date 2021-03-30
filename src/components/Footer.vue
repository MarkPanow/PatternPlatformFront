<template>
  <div>
    <footer class="myfooter">
      <div class="columns is-centered is-vcentered" style="background: whitesmoke;">
        <div class="column is-half">
          <div class="columns">
            <div class="column is-one-quarter">
              <a href="https://www.hochschule-trier.de/">
                <img alt="Logo HS Trier" src="@/assets/Logo_HS_Trier.svg">
              </a>
            </div>
            <div class="column is-one-quarter">
              <a href="https://www.uni-siegen.de/start/">
                <img alt="Logo Uni Siegen" src="@/assets/Logo_Uni_Siegen.svg">
              </a>
            </div>
            <div class="column is-one-quarter">
              <a href="https://www.dfg.de/">
                <img alt="Logo DFG" src="@/assets/Logo_DFG.svg">
              </a>
            </div>
            <div class="column is-one-quarter">
              <a href="#/">
                <img alt="Logo PervaSafe" src="@/assets/pervaSafeLogoText.png">
              </a>
            </div>
          </div>
        </div>
<!--        <div class="column is-one-third has-text-centered">-->
<!--          <Breadcrumbs/>-->
<!--        </div>-->
        <div class="column is-half has-text-centered">
          <a class="is-pulled-right  mr-3" href="https://www.hochschule-trier.de/impressum">Legal Notes</a>
          <a class="is-pulled-right  mr-3" href="https://www.hochschule-trier.de/datenschutz">Data Privacy </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component({
      components: {}
    }
)
export default class Footer extends Vue {

}
</script>

<style scoped>

img {
  height: 50px;
}

.myfooter {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background: whitesmoke;
  /*padding-top: 0.5em;*/
}

.is-one-quarter {
  min-width: 270px !important;
}
</style>