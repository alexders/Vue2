<template>
  <div class="manage">
    <div class="manger-header"><common-form></common-form></div>
    <div class="manger-content"><common-table></common-table></div>
  </div>
</template>

<script>
import CommonForm from '../../components/CommonForm.vue'
import CommonTable from '../../components/CommonTable.vue'
export default {
  components: { CommonForm, CommonTable },

}
</script>

<style lang="scss">
@import '~@/assets/scss/common';
</style>