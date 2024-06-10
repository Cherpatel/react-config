import HtmlWebpackPlugin from "html-webpack-plugin";

import type { BuildOptions } from "@config/build/types/types";


export function HtmlWebpackPluginInstance(options: BuildOptions) {
    const { paths: { html } } = options;

    return new HtmlWebpackPlugin({ template: html });
}