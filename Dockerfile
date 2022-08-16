FROM alpine:3.16

ENV NODE_VERSION 16.16.0

COPY . /web

RUN set -eux \
    & apk add \
        --no-cache \
        nodejs \
        yarn \
        npm

WORKDIR /web

RUN yarn install

RUN yarn build

RUN yarn global add serve


CMD npx serve -s build
