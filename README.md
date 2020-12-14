# pjbase-vue
# Docker

## Installation

[Dockerインストール](https://www.docker.com/get-started)

# Dockerfile.dev の作成
### アプリのルートディレクトリに Dockerfile.dev を作成します。

```
	Dockerfile.env
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
