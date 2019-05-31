FROM stefanscherer/node-windows:latest as builder

LABEL maintainer="mikhail@corepartners.com" version="0.1"

RUN npm install -g @angular/cli --no-progress
WORKDIR ./app
#RUN npm install --no-progress
EXPOSE 80
ENTRYPOINT ["/../nodejs/npm.cmd", "run" "start"]