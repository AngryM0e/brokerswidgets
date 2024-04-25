import { BuildOptions } from './interfaces/config.interface';

import { pluginsWebpack } from './plugins.webpack';
import { loadersWebpack } from './loaders.webpack';
import { devServerWebpack } from './devserver.webpack';

export function buildWebpack(options: BuildOptions) {
	const { mode, paths, port } = options;

	const isDev = mode === 'development';

	return {
		mode,
		entry: paths.entry,
		output: {
			filename: '[name].[hash].js',
			path: paths.output,
			clean: true,
			publicPath: '/',
		},
		plugins: pluginsWebpack(paths),
		module: { rules: loadersWebpack() },
		resolve: { extensions: ['.tsx', '.ts', '.js', '.scss'] },
		devtool: isDev ? 'inline-source-map' : undefined,
		devServer: isDev ? devServerWebpack(port) : undefined,
	};
}
