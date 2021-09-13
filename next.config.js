const withPlugins = require('next-compose-plugins');
const withLess = require('@zeit/next-less');


module.exports = withPlugins([ withLess],{
  reactStrictMode: true,
  basePath: '/permittering-og-omstilling',

});

