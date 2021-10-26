<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    background-color="#33aef0"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-menu-item
      :index="item.path"
      v-for="item in noChildren"
      :key="item.path"
      @click="clickMenu(item)"
    >
      <i :class="'el-icon-' + item.icon"></i>
      <span slot="title">{{ item.lable }}</span>
    </el-menu-item>
    <el-submenu :index="item.path" v-for="item in hasChildren" :key="item.path">
      <template slot="title">
        <i :class="'el-icon-' + item.icon"></i>
        <span>{{ item.lable }}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item
          :index="subItem.path"
          v-for="subItem in item.children"
          :key="subItem.path"
          @click="clickMenu(subItem)"
          >{{ subItem.lable }}</el-menu-item
        >
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      asidemenu: [
        { path: "/", name: "home", lable: "首页", icon: "home" },
        {
          path: "/video",
          name: "video",
          lable: "视频管理",
          icon: "video-play",
        },
        {
          path: "/user",
          name: "user",
          lable: "用户管理",
          icon: "user",
        },
        {
          path: "/other",
          name: "other",
          lable: "其它",
          icon: "more",
          children: [
            {
              path: "/page1",
              name: "page1",
              lable: "其它页面",
              icon: "setting",
            },
            {
              path: "/page2",
              name: "page2",
              lable: "其它页面2",
              icon: "setting",
            },
          ],
        },
      ],
    };
  },
  computed: {
    noChildren() {
      // console.log(this.asidemenu.filter((item) => !item.children))
      return this.asidemenu.filter((item) => !item.children);
    },
    hasChildren() {
      console.log(this.asidemenu.filter((item) => item.children));
      return this.asidemenu.filter((item) => item.children);
    },
  },
  methods: {
    clickMenu(item) {
      this.$router.push({name:item.name})

      this.$store.commit("selectMenu", item);
    },
  },
};
</script>

<style lang="scss" scoped>
.el-menu {
  height: 100%;
  border: none;
}
</style>