module.exports = {
  expo: {
    name: "Waifu Walls DEV",
    slug: "waifuwalls",
    scheme: "waifuwalls",
    version: "0.1.0",
    orientation: "portrait",
    icon: "./assets/icon.jpg",
    userInterfaceStyle: "automatic",
    newArchEnabled: true,
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        monochromeImage: "./assets/monochrome-android.png",
      },
      intentFilters: [
        {
          action: "VIEW",
          data: {
            scheme: "waifuwalls",
            host: "wallpaper",
          },
        },
      ],
      package: "com.rks.waifuwalls_dev",
    },
    plugins: [
      "expo-sqlite",
      [
        "expo-splash-screen",
        {
          image: "./assets/splash-icon.png",
          imageWidth: 200,
          resizeMode: "contain",
          backgroundColor: "#ffffff",
          dark: {
            image: "./assets/splash-icon.png",
            backgroundColor: "#000000",
          },
        },
      ],
    ],
  },
};
