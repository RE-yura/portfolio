module.exports = {
  //   experimental: {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  rewrites() {
    return [
      // Use rewrite to fetch a Firebase config file from Firebase Hosting
      // This only works `npm run dev` and does not works in production by `npm run export`
      {
        source: "/__/firebase/init.json",
        destination: "http://localhost:5000/__/firebase/init.json",
      },
    ];
  },
  //   },
};
