const {
    override,
    addLessLoader,
    disableChunk,
    addBabelPlugins,
    removeModuleScopePlugin,
    addBabelPresets,
} = require("customize-cra");

module.exports = override(
    ...addBabelPresets("@babel/preset-env", "@babel/preset-react"),
    ...addBabelPlugins(["@babel/plugin-proposal-decorators", { legacy: true }]),
    addLessLoader({
        javascriptEnabled: true,
        importLoaders: true,
        modifyVars: {},
    }),
    disableChunk(),
    removeModuleScopePlugin()
);
