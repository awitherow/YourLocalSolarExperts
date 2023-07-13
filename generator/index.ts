// this file can help you generate data for your project based on your data sets.
// this will be a working file that will transform to allow the generation of datasets as required.

const cities = require("./sets/cities.json");

(() => {
  console.log(cities?.filter((city: { state: string }) => city?.state === "FL"));
})();
