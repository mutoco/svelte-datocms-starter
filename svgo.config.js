export default {
	plugins: [
		{
			name: 'preset-default',
			params: {
				overrides: {
					removeViewBox: false,
					convertColors: {
						currentColor: true
					}
				}
			},
		}
	]
};
