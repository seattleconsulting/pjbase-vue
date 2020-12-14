# pjbase-vue

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## インストール手順

[Vue インストール手順](https://qiita.com/watataku8911/items/26f2ce546fcd562e4b46)

[Vue プロジェクト作成手順](https://qiita.com/567000/items/dde495d6a8ad1c25fa43)

# Eslint

## Installation
```
npm i -D eslint eslint-config-standard eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-standard
if eslint-config-standard > ^14.1.1 , npm i eslint-config-standard@14.1.1 eslint-plugin-standard -D
```

## Usage
```.eslintrc.js
module.exports = {
	root: true,
	env: {
		browser: true,
		node: 1
	},
	extends: [
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
```

## Installation
```
In VS Code, Ctrl + Shift + X
Search ESLint
Install ESLint
Restart VS Code
```
# Docker

## Installation

[Dockerインストール](https://www.docker.com/get-started)

[Dockerize Vue.js App](https://vuejs.org/v2/cookbook/dockerize-vuejs-app.html)

# 開発環境 Docker の手順

# Dockerfile.dev の作成

```
	Dockerfile.dev
FROM node:10.17.0-alpine3.9

# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies
RUN npm install

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

CMD ["npm", "run", "serve"]

```

# docker build

```
docker build --tag your_app_name:latest --file Dockerfile.dev .
```
# docker run

```
docker run --rm -it --name your_app_name -p 8080:8080 -v ${PWD}:/app -v /app/node_modules your_app_name:latest
```
