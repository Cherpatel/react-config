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
        },
    } = options;

    return {
        alias: {
            "@assets": assets,
            "@components": components,
            "@config": config,
            "@controllers": controllers,
            "@libs": libs,
        },
        extensions: [".tsx", ".jsx", ".ts", ".js"],
    };
}