module.exports = {
    cacheDirectory: true,
    cacheIdentifier: "v1",
    presets: [
        [
            "@babel/preset-env",
            {
                loose: true,
                modules: false,
                useBuiltIns: "usage",
                corejs: 3,
                targets: {
                    chrome: 55,
                    firefox: 30,
                    edge: 12,
                    safari: 9,
                },
            },
        ],
        [
            "cx-env",
            {
                cx: {
                    imports: {
                        useSrc: true,
                    },
                },
            },
        ],
    ],
    plugins: [],
};
