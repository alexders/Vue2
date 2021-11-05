<template>

<el-form inline :model="form" ref="form" label-with="100px">
  <el-form-item v-for="item in formLable" :key="item.model" >
    <!--form[item.model]类似于  -->

  <el-input  v-model="form[item.model]" :placeholder="'请输入'+item.label" v-if=" !item.type "></el-input>

   <el-select v-model="form[item.model]" placeholder="请选择"  v-if="item.type === 'select'">

      <el-option v-for="item in item.options" :key="item.value" :label="item.label"></el-option>

  </el-select>

    <el-switch v-model="form[item.model]" v-if="item.type === 'switch'"></el-switch>
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

<style>

</style>