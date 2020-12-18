module.exports = {
	root: true,
	env: {
		browser: true,
		node: 1
	},
	extends: [
		'eslint:recommended',
		'plugin:vue/essential',
		'standard'
	],
	plugins: [
		'vue'
	],
	rules: {
		'indent': 'off',
		'no-tabs': 0,
		'generator-star-spacing': 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'space-before-function-paren': ["error", "never"],
		'comma-dangle': ["error", "never"],
		'no-trailing-spaces': ["error", { "ignoreComments": true }]
	}
}
