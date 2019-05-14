FROM stefanscherer/node-windows:latest
LABEL maintainer="mikhail@corepartners.com" version="0.1"
RUN npm install -g @angular/cli --no-progress
WORKDIR ./app
COPY ./package.json .
RUN npm install --no-progress
COPY . .
EXPOSE 80
ENTRYPOINT ["/../nodejs/npm.cmd", "run", "start:80"]