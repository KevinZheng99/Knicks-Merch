module.exports = {
  async redirects() {
    return [
      {
        source: "/women",
        destination: "/",
        permanent: true,
      },
    ];
  },
};
