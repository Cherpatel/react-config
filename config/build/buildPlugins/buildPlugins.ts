import { HtmlWebpackPluginInstance } from "./HtmlWebpackPlugin";
import { MiniCssExtractPluginInstance } from "./MiniCssExtractPlugin";

import type { BuildOptions } from "@config/build/types/types";
import type { Configuration } from "webpack";

export default function buildPlugins(options: BuildOptions): Configuration["plugins"] {
    const {
        isDev,
        isProd,
    } = options;

    const plugins: Configuration["plugins"] = [
        HtmlWebpackPluginInstance(options),
    ];

    if (isProd) {
        const prodPlugins = [
            MiniCssExtractPluginInstance,
        ];

        plugins.push(...prodPlugins);
    }

    if (isDev) {
        const devPlugins = [];

        plugins.push(...devPlugins);
    }

    return plugins;
}