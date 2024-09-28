export type BuildPaths = {
    assets: string;
    components: string;
    config: string;
    controllers: string;
    entry: string;
    env: string;
    favicon: string;
    html: string;
    output: string;
    libs: string;
};

export type BuildMode = "production" | "development";

export type BuildOptions = {
    mode: BuildMode;
    port: number;
    paths: BuildPaths;
    isProd: boolean;
    isDev: boolean;
};