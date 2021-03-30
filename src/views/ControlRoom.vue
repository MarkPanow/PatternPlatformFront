<template>
  <div class="columns">
    <div class="column is-1">
    </div>
    <div style="max-width: 1400px" class="column is-8">
      <svg viewBox="0 0 1600 901" xmlns="http://www.w3.org/2000/svg"
           xmlns:xlink="http://www.w3.org/1999/xlink">
        <g>
          <image width="1600" height="901" preserveAspectRatio="none" xlink:href="@/assets/control_room.jpg"/>

          <router-link v-tooltip="'Pattern A'" to="/patterns/pattern-a">
            <ellipse @mouseover="showPatternAConnection = true"
                     @mouseleave="showPatternAConnection = false"
                     class="outline" cx="627.5" cy="566" rx="47.94" ry="52.84"
                     style="fill-opacity:0;stroke-width:5;stroke:#FF3860"/>
          </router-link>

          <router-link v-tooltip="'Pattern B'" to="/patterns/pattern-b">
            <ellipse @mouseover="showPatternBConnection = true"
                     @mouseleave="showPatternBConnection = false"
                     class="outline" cx="146.5" cy="418.9" rx="40.86" ry="45.21"
                     style="fill-opacity:0;stroke-width:5;stroke:#FF3860"/>
          </router-link>

          <router-link v-tooltip="'Pattern C'" to="/patterns/pattern-c">
            <path
                @mouseover="showPatternCConnection = true"
                @mouseleave="showPatternCConnection = false"
                class="outline" d="m738.7 412.9 197.2 21.79 2.179 154.7-198.3-34.86z"
                style="fill-opacity:0;stroke-width:5;stroke:#FF3860"/>
          </router-link>

          <router-link v-tooltip="'Pattern D'" to="/patterns/pattern-d">
            <path
                @mouseover="showPatternDConnection = true"
                @mouseleave="showPatternDConnection = false"
                class="outline"
                style="fill-opacity:0;stroke:#FF3860;stroke-width:5;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;stroke-miterlimit:4;stroke-dasharray:none"
                d="m 1287.2655,721.81639 c 7.1219,1.91388 15.3549,1.35955 22.1126,4.7384 2.0805,1.04024 4.2374,3.69815 6.3179,4.7384 1.7723,0.88618 4.4882,0.66468 6.3178,1.57947 2.9991,1.49955 4.7673,5.2745 7.8974,6.31786 4.7384,1.57947 1.5794,-0.78973 4.7384,0 3.2303,0.8076 6.1923,2.61152 9.4768,3.15894 4.136,0.68934 12.292,-1.92318 15.7946,1.57946 3.1601,3.16011 5.5202,13.43867 3.159,17.37414 -1.8569,3.09474 -14.0704,10.9114 -17.3742,14.2152 -4.848,4.84802 0.9228,1.31329 -1.5794,6.31787 -1.6723,3.34448 -5.4847,5.31055 -6.3179,9.4768 -0.177,0.88478 -1.6888,13.77798 -1.5795,14.2152 1.9773,7.90907 17.467,21.18362 12.6358,28.43041 -0.6531,0.97954 -2.1794,0.92644 -3.159,1.57947 -3.6286,2.41907 0.6773,0.90218 -3.1589,4.7384 -4.6544,4.65442 -11.7382,10.83361 -17.3741,14.2152 -3.4844,2.09062 -25.8942,6.79624 -30.0099,4.7384 -0.4709,-0.23545 0.3723,-1.20718 0,-1.57947 -0.5265,-0.52649 -4.2119,-1.05298 -4.7384,-1.57946 -0.7446,-0.74457 0.4709,-2.21713 0,-3.15894 -0.9342,-1.86831 -5.2605,-3.68105 -6.3179,-4.7384 -3.268,-3.26797 4.9939,0.12775 -1.5795,-3.15893 -0.9418,-0.47091 -2.4143,0.74457 -3.1589,0 -0.3723,-0.37229 0.3723,-1.20719 0,-1.57947 -2.461,-2.46096 -9.5812,-3.26339 -12.6357,-6.31787 -1.3423,-1.34229 -1.8167,-3.39611 -3.159,-4.7384 -2.9486,-2.94865 -4.2525,-0.85069 -7.8973,-6.31787 -5.3889,-8.08336 13.1636,-10.0047 15.7947,-12.63573 1.1168,-1.11685 -0.3831,-3.20609 0,-4.7384 1.8096,-7.23839 3.5467,-18.98173 1.5794,-26.85094 -1.0801,-4.32072 -2.2209,-2.54169 -4.7384,-6.31787 -0.8761,-1.31419 0.3831,-3.20609 0,-4.7384 -1.0765,-4.30615 -4.7384,-8.49932 -4.7384,-12.63573 0,-3.17019 -1.9562,-15.41788 0,-17.37414 3.7611,-3.76107 23.4526,-11.67807 23.692,-12.63574 0.5108,-2.04307 0,-4.21191 0,-6.31786 z"
                id="path843"/>
          </router-link>

          <router-link v-tooltip="'Pattern E'" to="/patterns/pattern-e">
            <rect
                @mouseover="showPatternEConnection = true"
                @mouseleave="showPatternEConnection = false"
                class="outline"
                style="fill-opacity:0;stroke:#FF3860;stroke-width:5"
                id="rect856"
                width="183.21817"
                height="115.30109"
                x="688.64758"
                y="41.066139"/>
          </router-link>


          <router-link v-tooltip="'Pattern F'" to="/patterns/pattern-f">
            <rect
                @mouseover="showPatternFConnection = true"
                @mouseleave="showPatternFConnection = false"
                class="outline"
                style="fill:#000000;fill-opacity:0;stroke:#FF3860;stroke-width:5"
                id="rect861"
                width="42.645607"
                height="82.132278"
                x="1244.62"
                y="489.63474"/>
          </router-link>

          <!--       Connection-->
          <path
              v-if="showPatternAConnection || showPatternEConnection"
              :class=" { similar: showPatternAConnection || showPatternEConnection }"
              style="fill:none;stroke:green;stroke-width:5;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;stroke-miterlimit:4;stroke-dasharray:none"
              d="M 658.63771,499.11155 762.88253,186.3771 v 0"
              id="path877"/>
          <path
              v-if="showPatternCConnection || showPatternFConnection"
              :class=" { uses: showPatternCConnection || showPatternFConnection }"
              style="fill:none;stroke:green;stroke-width:5;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;stroke-miterlimit:4;stroke-dasharray:none"
              d="m 980.84896,533.85982 224.28434,-12.63573 v 0"
              id="path883"/>
          <path
              v-if="showPatternCConnection || showPatternDConnection"
              :class=" { combines: showPatternCConnection || showPatternDConnection }"
              style="fill:none;stroke:green;stroke-width:5;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;stroke-miterlimit:4;stroke-dasharray:none"
              d="m 979.2695,579.66436 257.4531,191.1155 v 0"
              id="path885"/>
          <path
              v-if="showPatternFConnection || showPatternDConnection"
              :class=" { uses: showPatternFConnection || showPatternDConnection }"
              style="fill:none;stroke:green;stroke-width:5;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;stroke-miterlimit:4;stroke-dasharray:none"
              d="M 1312.537,702.86278 1287.2655,592.3001 v 0"
              id="path887"/>
          <path
              v-if="showPatternAConnection || showPatternBConnection"
              :class=" { combines: showPatternAConnection || showPatternBConnection }"
              style="fill:none;stroke:green;stroke-width:5;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;stroke-miterlimit:4;stroke-dasharray:none"
              d="M 541.75716,554.39289 206.91017,442.25074 v 0"
              id="path889"/>


        </g>
      </svg>
    </div>
    <div class="column is-1">
      <b-field>
        <b-tag size="is-medium" type="is-success" rounded>Uses</b-tag>
      </b-field>
      <b-field>
        <b-tag size="is-medium" type="is-warning" rounded>Combines</b-tag>
      </b-field>
      <b-field>
        <b-tag size="is-medium" type="is-info" rounded>Similar</b-tag>
      </b-field>
    </div>


  </div>
</template>

<script lang="ts">

import {Component, Vue} from 'vue-property-decorator';


@Component

export default class Control extends Vue {

  private showPatternAConnection = false
  private showPatternBConnection = false
  private showPatternCConnection = false
  private showPatternDConnection = false
  private showPatternEConnection = false
  private showPatternFConnection = false


}


</script>

<style>

.outline:hover {
  stroke: turquoise !important;
}

.uses {
  stroke: #23D160 !important;
}

.combines {
  stroke: #FFDD57 !important;
}

.similar {
  stroke: #209CEE !important;

}


</style>

