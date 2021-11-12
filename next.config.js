/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    INFURA_ID: process.env.INFURA_ID,
    CHAIN_ID: 4, // Rinkeby
  },
};
