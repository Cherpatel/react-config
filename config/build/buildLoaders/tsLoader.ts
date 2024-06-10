export function tsLoader() {
    return {
        exclude: "/node_modules/",
        test: /\.tsx?$/,
        use: "ts-loader",
    };
}