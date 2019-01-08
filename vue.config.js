// Vue Config JS file
// Created by @author
module.exports = {
    css: {
      loaderOptions: {
        sass: {
          data: `
            @import "@/assets/scss/_globals.scss";
            @import "@/assets/scss/_variables.scss";
            @import "@/assets/scss/_mixins.scss";
          `
        }
      }
    }
  };