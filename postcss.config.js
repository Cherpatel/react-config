const postcssGlobalData = require("@csstools/postcss-global-data");
const autoprefixer = require("autoprefixer");
const postcssCustomMedia = require("postcss-custom-media");

module.exports = {
    plugins: [
        postcssGlobalData({
            files: [ "./src/styles/variables/breakpoint.css" ],
        }),
        postcssCustomMedia({ preserve: true }),
        autoprefixer(),
    ],
};