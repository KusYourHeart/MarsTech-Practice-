/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
    // здесь могут быть ваши настройки nextConfig
    
    webpack: (config) => {
      config.resolve.alias['@'] = path.resolve(__dirname);
      return config;
    },

    
  };
  
  module.exports = nextConfig;
