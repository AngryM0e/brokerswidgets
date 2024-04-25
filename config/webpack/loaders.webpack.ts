export function loadersWebpack() {
	const svgLoader = {
		test: /\.svg&/i,
		issuer: /\.[jt]sx?$/,
		use: ['@svgr/webpack'],
	};

	const tsLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	};

	const fileLoader = {
		test: /\.(png|jpeg|gif|woff|woff2)$/i,
		use: 'file-loader',
	};

	const scssLoader = {
		test: /\.s[ac]ss|css$/i,
		use: ['style-loader',
			'css-loader',
			{
				loader: 'sass-loader',
				options: {
					additionalData: '@import "src/scss/variables.scss";\n@import "src/scss/mixins.scss";',
				},
			}],
	};

	return [scssLoader, fileLoader, tsLoader, svgLoader];
}
