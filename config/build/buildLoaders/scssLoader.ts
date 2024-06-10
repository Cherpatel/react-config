import MiniCssExtractPlugin from "mini-css-extract-plugin";

import type { BuildOptions } from "@config/build/types/types";
import type { RuleSetRule } from "webpack";


export function scssLoader(options: BuildOptions): RuleSetRule {
    const { isProd } = options;

    const cssLoader = {
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
        test: /\.(sa|sc|c)ss$/,
        use: [
            isProd ? MiniCssExtractPlugin.loader : "style-loader",
            cssLoader,
            "sass-loader",
        ],
    };
}