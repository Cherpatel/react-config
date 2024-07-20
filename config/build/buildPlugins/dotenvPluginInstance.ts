import Dotenv from "dotenv-webpack";

import type { BuildOptions } from "@config/build/types/types";

export function dotenvPluginInstance(options: BuildOptions) {
    const { paths: { env } } = options;

    return new Dotenv({
        path: env,
        safe: true,
    });
}