import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const MiniCssExtractPluginInstance = new MiniCssExtractPlugin({
    chunkFilename: "css/[name].[contenthash:8].css",
    filename: "css/[name].[contenthash:8].css",
});