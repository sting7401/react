module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		jsx: true,
	},
	plugins: ['react', 'prettier'],
	rules: {
		'react/jsx-uses-react': 'error',
		'react/jsx-uses-vars': 'error',
		'prettier/prettier': 'error', // prettier 의 포맷팅 에러를 lint 에러 리포팅으로 볼 수 있도록 하는 규칙
		'arrow-body-style': 'off',
		'prefer-arrow-callback': 'off',
		'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
		'linebreak-style': 0,
		'no-undef-vars': 'off',
	},
};
