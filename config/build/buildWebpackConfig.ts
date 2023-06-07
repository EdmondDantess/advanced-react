import {BuildOptions} from './types/config';
import webpack from 'webpack';
import {buildLoaders} from './buildLoaders';
import {buildResolves} from './buildResolves';
import {buildPlugins} from './buildPlugins';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {paths, mode} = options

    return {
        mode: mode,
        entry: paths.entry,
        module: {
            rules: buildLoaders(),
        },
        resolve: buildResolves(),
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true
        },
        plugins: buildPlugins(options)
    }
}