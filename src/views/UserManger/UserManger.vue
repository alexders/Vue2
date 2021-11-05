<template>
  <div class="manage">
    <div class="manage-header">
      <el-button type="primary" class="add">+ 新增</el-button>
      <common-form
        inline
        :formLable="formLable"
        :form="searchForm"
      >
      <el-button type="primary">搜索</el-button>
      </common-form>
    </div>
    <div class="manger-content"><common-table></common-table></div>
  </div>
</template>

<script>
import CommonForm from "../../components/CommonForm.vue";
import CommonTable from "../../components/CommonTable.vue";
export default {
  components: { CommonForm, CommonTable },
  data() {
    return {
      searchForm: {
        keyWords: "",
      },
      formLable: [
        {
          model: "keyWords",
          label: "",
          options:[]
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/common";
</style>