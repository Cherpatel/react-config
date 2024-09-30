import type { BuildOptions } from "./types/types";
import type { ResolveOptions } from "webpack";

export default function buildResolvers(options: BuildOptions): ResolveOptions {
    const {
        paths: {
            assets,
            components,
            config,
            controllers,
            libs,
            styles,
        },
    } = options;

    return {
        alias: {
            "@assets": assets,
            "@components": components,
            "@config": config,
            "@controllers": controllers,
            "@libs": libs,
            "@styles": styles,
        },
        extensions: [".tsx", ".jsx", ".ts", ".js"],
    };
}