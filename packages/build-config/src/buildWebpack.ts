import webpack from 'webpack';
import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { BuildOptions } from './types/types';
import { buildResolvers } from './buildResolvers';

export function buildWebpack(options: BuildOptions): webpack.Configuration {
  const isDev = options.mode === 'development';

  return {
    mode: options.mode ?? 'development',
    // Точка входа (тут прописываем путь)
    entry: options.paths.entry,
    output: {
      path: options.paths.output,
      filename: 'bundle-[contenthash].js',
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    devtool: isDev && 'inline-source-map',
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
