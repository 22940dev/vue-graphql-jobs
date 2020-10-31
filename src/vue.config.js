module.exports = {
    css: {
        loaderOptions: {
            scss: {
                additionalData: `
          @import "@/assets/_variables.scss";
          @import "@/assets/_custom.scss";
                    `
            }
        }
    }
};