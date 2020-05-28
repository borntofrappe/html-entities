module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy('./src/static');
  eleventyConfig.addPassthroughCopy('./src/manifest.json');

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
  };
};
