import {BuildOptions} from './types/config';
import webpack from 'webpack';
import {buildLoaders} from './buildLoaders';
import {buildResolves} from './buildResolves';
import {buildPlugins} from './buildPlugins';
import {buildDevServer} from './buildDevServer';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {

    const {paths, mode, isDev} = options

    return {
        mode: mode,
        entry: paths.entry,
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolves(),
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true
        },
        plugins: buildPlugins(options),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined
    }
}