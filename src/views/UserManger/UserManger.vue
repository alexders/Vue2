<template>
  <div class="manage">
    <div class="manage-header">
      <el-button type="primary" class="add">+ 新增</el-button>
      <common-form inline :formLable="formLable" :form="searchForm">
        <el-button type="primary">搜索</el-button>
      </common-form>
    </div>
   <common-table :tableData="tableData" :tableLabel="tableLabel" :config="config"></common-table>
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
          options: [],
        },
      ],
      tableData: [],
      tableLabel: [
        {
          prop: "name",
          label: "姓名",
        },
        {
          prop: "age",
          label: "年龄",
        },
        {
          prop: "sexLabel",
          label: "性别",
        },
        {
          prop: "birth",
          label: "出生日期 ",
        },
        {
          prop: "address",
          label: "地址",
        },
      ],
      config: {
        page:1,
        total:30,
        loading:false,
      }
    };
  },
  methods: {
    getList(){
      // 列表加载
      this.config.loading=true;
      this.$http.get('/api/user/getUser',{
        params:{
          page:this.config.page,
        }
      }).then(
        res=>{
          this.tableData=res.data.list.map(item=>{
            item.sexLabel= item.sex===0 ?'女':'男'
            return item;
          })
          this.config.total=res.data.count;
          this.config.loading=false;
        },
        err=>{
          console.log(err)
        },
      )
    }
  },
  mounted() {
    this.getList();
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/common";
</style>