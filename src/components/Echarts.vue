<template>
  <div style="height: 100%" ref="echart">echart</div>
</template>
<script>
import * as echarts from 'echarts';
export default {
  //父组件传来的数据
  props: {
    chartData: {
      type: Object,
      default() {
        return {
          xData: [],
          series: [],
        }; //通过一个函数返回默认对象，其它组件调用时不受影响
      },
    },
    isAxistChart: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    options() {
      return this.isAxistChart ? this.axistOption : this.normalOption;
    },
  },
  methods: {
    //   初始图表方法
    initChart() {
      this.initChartData();
      if (this.echart) {
        this.echart.setOption(this.options);
      } else {
        this.echart = echarts.init(this.$refs.echart);
        this.echart.setOption(this.options);
      }
    },
    //初始化图标数据
    initChartData() {
      if (this.isAxistChart) {
         this.axistOption.xAxis.data=this.chartData.xData;
         console.log(this.chartData.xData);
         this.axistOption.series=this.chartData.series;
      } else {
          console.log('normalOption')
      }
    },
  },
  watch: {
    chartData:{
      handler:function(){
        this.initChart()
      },
      deep:true,
    }
  },
  data() {
    return {
      echart: null,
      axistOption: {
        //   有坐标
        xAxis: {
          type: "category",
          data: [],
        },
        yAxis: {
          type: "value",
        },
        series: [],
      },
      //无坐标轴
      normalOption: {
        series: [],
      },
    };
  },
};
</script>
<style>
</style>