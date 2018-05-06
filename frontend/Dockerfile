FROM node:7.9.0

WORKDIR /app
COPY ./webpack.config.js /app/webpack.config.js

RUN npm init -y
RUN npm install -g webpack webpack-cli
RUN npm install --save react react-dom axios
RUN npm install --save-dev webpack-dev-server babel-loader babel-core babel-preset-react babel-preset-env

CMD ["webpack", "-d", "--watch"]
