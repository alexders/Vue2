<template>

<el-form :inline="inline" :model="form" ref="form" label-with="100px" >
  <el-form-item v-for="item in formLable" :key="item.model" :label="item.label"  >
    <!--form[item.model]类似于  -->

  <el-input  v-model="form[item.model]" :placeholder="'请输入'+item.label" v-if=" !item.type " ></el-input>

   <el-select v-model="form[item.model]" placeholder="请选择"  v-if="item.type === 'select'">

      <el-option v-for="item in item.options" :key="item.value" :label="item.label" :value="item.value"></el-option>

  </el-select>
    <el-switch v-model="form[item.model]" v-if="item.type === 'switch'"></el-switch>
     <el-date-picker
      v-model="form[item.model]"
      type="date"
      placeholder="选择日期"
      v-if="item.type==='date'"
      value-format="yyyy-MM-dd"
      >
    </el-date-picker>
</el-form-item>
<!-- 按钮插槽 -->
  <el-form-item >
    <slot></slot>
  </el-form-item>
</el-form>
</template>

<script>
export default {
  props: {
    inline:Boolean,  //默认为false
    form: Object,
    formLable:Array,
  },
  data() {
    return {
      
    }
  },
}
</script>

<style lang='scss' scoped>
.el-input{
  width: 90%;
}
</style>