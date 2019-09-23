module.exports = function(api) {
  api.cache(true);

  const presets = [
    [
      "@babel/preset-env",
      {
        useBuiltIns: false
      }
    ],
    "@babel/preset-typescript"
  ];

  const plugins = [];

  return { presets, plugins };
};