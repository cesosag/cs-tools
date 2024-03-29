module.exports = {
	extends: ['plugin:node/recommended', 'airbnb', 'airbnb/hooks'],
	parser: '@babel/eslint-parser',
	parserOptions: {
		requireConfigFile: false,
	},
	root: true,
	rules: {
		'arrow-body-style': ['warn', 'as-needed'],
		'import/prefer-default-export': ['off'],
		indent: ['warn', 'tab'],
		'max-len': ['warn', { code: 160 }],
		'no-tabs': ['error', { allowIndentationTabs: true }],
		'no-unused-vars': ['warn'],
		'node/no-unsupported-features/es-syntax': ['off'],
		'node/no-missing-import': [
			'error',
			{ tryExtensions: ['.js', '.jsx', '.json'] },
		],
		'object-curly-newline': ['off'],
		'react/jsx-indent': ['error', 'tab'],
		'react/jsx-props-no-spreading': ['off'],
		'react/prop-types': ['warn', { ignore: ['children'] }],
		semi: ['error', 'never', { beforeStatementContinuationChars: 'always' }],
		strict: ['off'],
	},
}
