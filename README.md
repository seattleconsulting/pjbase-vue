# pjbase-vue
# Docker

## dockerのインストール

[Dockerインストール](https://www.docker.com/get-started)

## docker build

```
docker build --tag your_app_name:latest --file Dockerfile.dev .
```
## docker run

```
docker run --rm -it --name your_app_name -p 8080:8080 -v ${PWD}:/app -v /app/node_modules your_app_name:latest
```
