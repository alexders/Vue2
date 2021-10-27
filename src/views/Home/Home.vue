<template>
  <div>Home</div>
</template>

<script>
export default {
  mounted() {
    this.$http.get('/home/getData').then(
      res=>{
        console.log(res.data);
      },
      err=>{
        console.log(err)
      }
    )
  },
}
</script>

<style>

</style>