<template>
  <div class="columns">
    <div id="chart"/>
    <div class="mt-6 column is-4">
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
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import {chartData} from "@/data/chart_data.json"

@Component

export default class Chord extends Vue {

  private createChart() {

    let container = am4core.create("chart", am4core.Container);
    container.width = am4core.percent(100);
    container.height = am4core.percent(100);
    container.paddingBottom = 50;
    container.paddingTop = 50;
    container.paddingLeft = 50;
    container.paddingRight = 50;


    let chart = container.createChild(am4charts.ChordDiagram)
    chart.hiddenState.properties.opacity = 0;
    chart.data = chartData
    chart.dataFields.fromName = "from";
    chart.dataFields.toName = "to";
    chart.dataFields.value = "value";
    chart.dataFields.color = "nodeColor";
    chart.nodePadding = 1;
    chart.innerRadius = -7;
    chart.minNodeSize = 0.01;

    let link = chart.links.template;
    link.strokeOpacity = 0;
    link.fillOpacity = 0.2;
    link.colorMode = "solid";
    link.propertyFields.fill = "linkColor"
    link.propertyFields.tooltipText = "toolTip"
    link.showTooltipOn = "hit"


    const hoverState = link.states.create("hover");
    hoverState.properties.fillOpacity = 0.7;
    hoverState.properties.strokeOpacity = 0.7;


    const nodeTemplate = chart.nodes.template;
    nodeTemplate.cursorOverStyle = am4core.MouseCursorStyle.pointer
    nodeTemplate.clickable = false;
    nodeTemplate.draggable = false;

    nodeTemplate.events.on("over", function (event) {
      const node = event.target;
      node.outgoingDataItems.each(function (dataItem: any) {
        if (dataItem.toNode) {
          dataItem.link.isHover = true;
          dataItem.toNode.label.isHover = true;
        }
      })
      node.incomingDataItems.each(function (dataItem) {
        if (dataItem.fromNode) {
          dataItem.link.isHover = true;
          dataItem.fromNode.label.isHover = true;
        }
      })

      node.label.isHover = true;
    })


    nodeTemplate.events.on("out", function (event) {

      const node = event.target;
      node.outgoingDataItems.each(function (dataItem: any) {
        if (dataItem.toNode) {
          dataItem.link.isHover = false;
          dataItem.toNode.label.isHover = false;
        }
      })
      node.incomingDataItems.each(function (dataItem) {
        if (dataItem.fromNode) {
          dataItem.link.isHover = false;
          dataItem.fromNode.label.isHover = false;
        }
      })

      node.label.isHover = false;
    })


    const label = nodeTemplate.label;
    label.relativeRotation = 90;
    label.paddingLeft = 10;
    label.paddingRight = 10;


    label.fillOpacity = 1;
    label.properties.fontWeight = "normal";
    const labelHS = label.states.create("hover");
    labelHS.properties.fontWeight = "bold";


    chart.nodes.template.label.events.on("hit", (event) => {
      let link = event.target._dataItem.dataContext.href
      this.$router.push(link)
    })


  }

  mounted() {
    this.createChart()
  }

}


</script>

<style scoped>

#chart {
  width: 100%;
  height: 80vh;
  margin: 1em;
}


</style>

