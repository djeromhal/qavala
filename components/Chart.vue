<template>
  <div class="chart" ref="chartdiv">
  </div>
</template>

<script>
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);


export default {
  name: 'ChartFB',
  mounted() {
    let chart = am4core.create(this.$refs.chartdiv, am4charts.XYChart);
    let interfaceColors = new am4core.InterfaceColorSet();

    chart.paddingRight = 20;

    chart.leftAxesContainer.layout = "vertical";

    chart.dateFormatter.inputDateFormat = "k:m";

    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;
    dateAxis.renderer.ticks.template.length = 8;
    dateAxis.renderer.ticks.template.strokeOpacity = 0.1;
    // dateAxis.renderer.grid.template.disabled = true;
    dateAxis.renderer.ticks.template.disabled = false;
    dateAxis.renderer.ticks.template.strokeOpacity = 0.2;
    dateAxis.renderer.fontSize = "0.8em"
    // dateAxis.baseInterval = {
    //   "timeUnit": "minute",
    //   "count": 1
    // };
    dateAxis.renderer.grid.template.location = 0;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.height = am4core.percent(60);
    valueAxis.renderer.gridContainer.background.fill = interfaceColors.getFor("alternativeBackground");
    valueAxis.renderer.gridContainer.background.fillOpacity = 0.02;
    valueAxis.title.text = 'Close';
    valueAxis.renderer.fontSize = "0.8em"

    let series = chart.series.push(new am4charts.CandlestickSeries());
    series.dataFields.dateX = "label";
    series.dataFields.valueY = "close";
    series.dataFields.openValueY = "open";
    series.dataFields.lowValueY = "low";
    series.dataFields.highValueY = "high";
    // series.simplifiedProcessing = true;
    series.tooltipText = "Open:${openValueY.value}\nLow:${lowValueY.value}\nHigh:${highValueY.value}\nClose:${valueY.value}";

    chart.cursor = new am4charts.XYCursor();

    // a separate series for scrollbar
    let lineSeries = chart.series.push(new am4charts.LineSeries());
    lineSeries.dataFields.dateX = "label";
    lineSeries.dataFields.valueY = "close";
    // need to set on default state, as initially series is "show"
    lineSeries.defaultState.properties.visible = false;
    // lineSeries.tooltipText = "{valueY.value}";

    // Create volume
    let valueAxis2 = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis2.tooltip.disabled = true;
    valueAxis2.height = am4core.percent(40);
    valueAxis2.marginTop = 60;
    valueAxis2.renderer.gridContainer.background.fill = interfaceColors.getFor("alternativeBackground");
    valueAxis2.renderer.gridContainer.background.fillOpacity = 0.05;
    valueAxis2.title.text = 'Volume';
    valueAxis2.renderer.fontSize = "0.8em"

    var volumeSeries = chart.series.push(new am4charts.ColumnSeries());
    volumeSeries.dataFields.valueY = "volume";
    volumeSeries.dataFields.dateX = "label";
    volumeSeries.yAxis = valueAxis2;

    // hide from legend too (in case there is one)
    lineSeries.hiddenInLegend = true;
    lineSeries.fillOpacity = 0.5;
    lineSeries.strokeOpacity = 0.5;

    let scrollbarX = new am4charts.XYChartScrollbar();
    scrollbarX.series.push(lineSeries);
    chart.scrollbarX = scrollbarX;
    
    chart.data = this.$store.state.candles;

    this.chart = chart;

  },
  beforeDestroy() {
    if (this.chart) {
      this.chart.dispose();
    }
  }
}
</script>

<style scoped>
  .chart{
    height: calc(100vh - 56px);
  }
</style>