
const pluginWebc = require("@11ty/eleventy-plugin-webc");

module.exports = function (eleventyConfig) {

  // ---------- PLUGINS --------------------
  eleventyConfig.addPlugin(pluginWebc, {
    components: "src/_includes/**/*.webc",
  });

  // ---------- PASSTHROUGH --------------------
  eleventyConfig.addPassthroughCopy("src/assets/fonts");
  eleventyConfig.addPassthroughCopy("src/assets/img");
  eleventyConfig.addPassthroughCopy("src/assets/css");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
    },

    passthroughFileCopy: true,
  };
};
