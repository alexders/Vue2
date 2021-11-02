<template>
  <el-row class="home" :gutter="20">
    <el-col :span="8">
      <el-card shadow="hover">
        <div class="user">
          <img :src="userImg" alt="" />
          <div class="userinfo">
            <p class="name">Admin</p>
            <p class="access">管理员</p>
          </div>
        </div>
        <div class="login-info">
          <p>上次登录时间：<span>2021/10/28</span></p>
          <p>上次登录地点：<span>北京</span></p>
        </div>
      </el-card>
      <el-card shadow="hover" style="height: 522px; margin-top: 20px">
        <el-table :data="tableData">
          <el-table-column
            show-overflow-tooltip
            v-for="(val, key) in tableLabel"
            :key="key"
            :prop="key"
            :label="val"
          ></el-table-column>
        </el-table>
      </el-card>
    </el-col>
    <el-col :span="16">
      <div class="num">
        <el-card shadow="hover" v-for="item in countData" :key="item.name">
          <i
            class="icon"
            :class="`el-icon-${item.icon}`"
            :style="{ background: item.color }"
          ></i>
          <div class="detail">
            <p class="num">${{ item.value }}</p>
            <p class="txt">{{ item.name }}</p>
          </div>
        </el-card>
      </div>
      <el-card shadow="hover">
        <echart style="height: 280px" :chartData="echartData.order"></echart>
      </el-card>
      <div class="graph">
        <el-card shadow="hover">
          <echart style="height: 260px" :chartData="echartData.user"></echart>
        </el-card>
        <el-card shadow="hover">
          <echart style="height: 260px" :chartData="echartData.video" :isAxistChart="false"></echart>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import Echart from "../../components/Echarts.vue";
export default {
  components: { Echart },
  data() {
    return {
      userImg: require("../../assets/img/avator.jpg"), //使用require 将图片当成模块引入，否则会被当成字符串
      countData: [
        {
          name: "今日支付订单",
          value: "999",
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "今日收藏订单",
          value: "90",
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "今日未支付订单",
          value: "4",
          icon: "s-goods",
          color: "#5ab1ef",
        },
        {
          name: "本月支付订单",
          value: "9949",
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "本月收藏订单",
          value: "955",
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "本月未支付订单",
          value: "91",
          icon: "s-goods",
          color: "#5ab1ef",
        },
      ],
      tableData: [],
      tableLabel: {
        name: "课程名",
        todayBuy: "今日购买",
        monthBuy: "本月购买",
        totalBuy: "总共购买",
      },
      // 图标数据
      echartData: {
        order: {
          xData: [],
          series: [],
        },
        user: {
          xData: [],
          series: [],
        },
        video: {
          series: [],
        },
      },
    };
  },
  methods: {
    getTableData() {
      this.$http.get("/home/getData").then(
        (res) => {
          res = res.data;
          this.tableData = res.data.tableData;
          console.log(res.data);
          //接受订单折现图数据
          const orders = res.data.saleData;
          this.echartData.order.xData = orders.selltime;
          // 取出series键名
          let keyArray = Object.keys(orders.selldata[0]);
          // console.log(keyArray);
          keyArray.forEach((key) => {
            this.echartData.order.series.push({
              name: key === "wechat" ? "小程序" : key,
              data: orders.selldata.map((item) => item[key]),
              type: "line",
            });
          });
          //处理柱状图数据
          const users = res.data.userData;
          this.echartData.user.xData = users.time;
          let userArray = Object.keys(users.num[0]);
          userArray.forEach((key) => {
            this.echartData.user.series.push({
              name: key,
              data: users.num.map((item) => item[key]),
              type: "bar",
            });
          });
          //处理饼图数据
          const videos = res.data.videoData;
          let videoArray = Object.keys(videos[0]);
          console.log(videos);
          videoArray.forEach((key) => {
            this.echartData.video.series.push({
              name: key,
              data: videos,
              type: "pie",
              radius:'50%',
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: "rgba(0, 0, 0, 0.5)",
                },
              },
            });
          });
        },
        (err) => {
          console.log(err);
        }
      );
    },
  },
  mounted() {},
  created() {
    this.getTableData();
  },
};
</script>

<style lang='scss' sccoped>
@import "~@/assets/scss/home.scss";
</style>