import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import { BuildPaths } from './interfaces/config.interface';

export function pluginsWebpack(paths: BuildPaths) {
	const htmlWebpackPlugin = new HtmlWebpackPlugin({
		template: paths.html,
	});

	const copyPlugin = new CopyPlugin({
		patterns: [{
			from: 'public',
			to: '',
			globOptions: {
				ignore: ['**/index.html'],
			},
		}],
	});

	return [htmlWebpackPlugin, copyPlugin];
}
