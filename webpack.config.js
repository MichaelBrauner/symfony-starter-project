const Encore = require('@symfony/webpack-encore');
const backendConfig = require('./webpack/webpack-backend.config')
const frontendConfig = require('./webpack/webpack-frontend.config')

// Manually configure the runtime environment if not already configured yet by the "encore" command.
// It's useful when you use tools that rely on webpack.config.js file.
if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

backendConfig.get(Encore);
const backend = Encore.getWebpackConfig();
backend.name = 'backend';
Encore.reset();

frontendConfig.get(Encore)
const frontend = Encore.getWebpackConfig();
backend.name = 'frontend';

module.exports = [backend, frontend];
