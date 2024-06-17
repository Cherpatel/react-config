import MiniCssExtractPlugin from "mini-css-extract-plugin";

import type { BuildOptions } from "@config/build/types/types";
import type { RuleSetRule } from "webpack";

export function scssLoader(options: BuildOptions): RuleSetRule {
    const { isProd } = options;

    const cssModuleLoader = {
        loader: "css-loader",
        options: {
            importLoaders: 1,
            modules: {
                exportLocalsConvention: "camel-case-only",
                localIdentName: "[folder]__[local]_[hash:base64:5]",
                namedExport: false,
            },
            sourceMap: true,
        },
    };

    return {
        oneOf: [
            {
                test: /\.module\.(css|scss)$/,
                use: [
                    isProd ? MiniCssExtractPlugin.loader : "style-loader",
                    cssModuleLoader,
                    "postcss-loader",
                    "sass-loader",
                ],
            },
            {
                use: [
                    isProd ? MiniCssExtractPlugin.loader : "style-loader",
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                ],
            },
        ],
        test: /\.(sa|sc|c)ss$/,
    };
}