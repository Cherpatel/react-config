import { scssLoader } from "./scssLoader";
import { tsLoader } from "./tsLoader";

import type { BuildOptions } from "@config/build/types/types";
import type { ModuleOptions } from "webpack";


export default function buildLoaders(options: BuildOptions): ModuleOptions["rules"] {
    return [
        tsLoader(),
        scssLoader(options),
    ];
}
