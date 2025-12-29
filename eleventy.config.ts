import type { UserConfig } from "@11ty/eleventy";

export default function(eleventyConfig: UserConfig) {
  eleventyConfig.addPassthroughCopy("./global.css");
  eleventyConfig.addPassthroughCopy("./images");
};