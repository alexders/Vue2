module.exports = {
  devServer: {
    port: 3333,
    open: true,
  },
  css:{
    loaderOptions:{
     sass: {
             prependData: ` @import "./src/assets/scss/_variable.scss"; `
           }
    }
  }
};
