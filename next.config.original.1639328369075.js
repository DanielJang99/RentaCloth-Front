const withPWA = require("next-pwa");

module.exports = withPWA({
    reactStrictMode: true,
    pwa: {
        dest: "public",
        skipWaiting: true,
        register: true,
        disable: process.env.NODE_ENV === "development",
    },
});
