module.exports = function(eleventyConfig) {
  // Copy images folder to output
  eleventyConfig.addPassthroughCopy("images");

  // Watch for changes in images
  eleventyConfig.addWatchTarget("./images/");

  // German collections
  eleventyConfig.addCollection("experienceDe", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./src/experience/*.de.md")
      .sort((a, b) => a.data.order - b.data.order);
  });

  eleventyConfig.addCollection("educationDe", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./src/education/*.de.md")
      .sort((a, b) => a.data.order - b.data.order);
  });

  eleventyConfig.addCollection("aboutDe", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./src/about/*.de.md")
      .sort((a, b) => a.data.order - b.data.order);
  });

  // English collections
  eleventyConfig.addCollection("experienceEn", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./src/experience/*.en.md")
      .sort((a, b) => a.data.order - b.data.order);
  });

  eleventyConfig.addCollection("educationEn", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./src/education/*.en.md")
      .sort((a, b) => a.data.order - b.data.order);
  });

  eleventyConfig.addCollection("aboutEn", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./src/about/*.en.md")
      .sort((a, b) => a.data.order - b.data.order);
  });

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
