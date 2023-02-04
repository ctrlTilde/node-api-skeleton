FROM node:lts

RUN mkdir -p /src && npm i -g nodemon npm
WORKDIR /src

ADD package.json package.json
RUN yarn install
COPY . /src/

EXPOSE 8080

CMD yarn start