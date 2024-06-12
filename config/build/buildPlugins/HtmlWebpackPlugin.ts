import HtmlWebpackPlugin from "html-webpack-plugin";

import type { BuildOptions } from "@config/build/types/types";

export function htmlWebpackPluginInstance(options: BuildOptions) {
    const {
        paths: {
            favicon,
            html,
        },
    } = options;

    return new HtmlWebpackPlugin({
        favicon,
        template: html,
    });
}