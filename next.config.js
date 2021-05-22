module.exports = {
  env: {
    PUBLIC_URL: process.env.PUBLIC_URL,
    REACT_APP_FACEBOOK_URI: process.env.REACT_APP_FACEBOOK_URI,
    REACT_APP_FACEBOOK_CLIENT_ID: process.env.REACT_APP_FACEBOOK_CLIENT_ID,
    REACT_APP_FACEBOOK_CLIENT_SECRET:
      process.env.REACT_APP_FACEBOOK_CLIENT_SECRET,
    REACT_APP_GOOGLE_URI: process.env.REACT_APP_GOOGLE_URI,
    REACT_APP_GOOGLE_ID: process.env.REACT_APP_GOOGLE_ID,
    REACT_APP_GOOGLE_SECRET: process.env.REACT_APP_GOOGLE_SECRET,
    REACT_APP_LINE_ID: process.env.REACT_APP_LINE_ID,
    REACT_APP_LINE_URI: process.env.REACT_APP_LINE_URI,
    REACT_APP_LINE_SECRET: process.env.REACT_APP_LINE_SECRET,
    MONGO_URI: process.env.MONGO_URI,
    JWT_SECRET: process.env.JWT_SECRET,
  },
  // Target must be serverless
  target: "serverless",
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
