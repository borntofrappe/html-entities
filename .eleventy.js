module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy('./src/static');
  eleventyConfig.addPassthroughCopy('./src/manifest.json');
  eleventyConfig.addPassthroughCopy('./src/service-worker.js');

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
  };
};
