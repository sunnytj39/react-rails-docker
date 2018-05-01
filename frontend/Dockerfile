FROM node:7.9.0

WORKDIR /app
COPY ./webpack.config.js /app/webpack.config.js

RUN npm init -y
RUN npm install --save react react-dom
RUN npm install --save-dev webpack webpack-cli webpack-dev-server babel-loader babel-core babel-preset-react babel-preset-env
