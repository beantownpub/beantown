FROM node:22.14.0-bullseye-slim AS build

RUN apt-get update  && \
    apt-get install -y \
        apt-utils \
        python \
        g++ \
        make \
        gcc

FROM build AS install
ARG git_hash
ARG node_env
ARG support_email
ARG version
ENV GIT_HASH=${git_hash}
ENV SUPPORT_EMAIL=${support_email}
ENV NODE_ENV=${node_env}
ENV VERSION=${version}

COPY ./package* /app/
WORKDIR /app
RUN --mount=type=secret,id=npmrc,target=/app/.npmrc npm ci --save-dev --production=false --legacy-peer-deps

COPY . ./

RUN npx webpack --config webpack.config.js && \
    rm -rf node_modules

FROM node:22.14.0-bullseye-slim

ARG aws_default_region
ARG node_env
ENV AWS_DEFAULT_REGION=${aws_default_region}
ENV NODE_ENV=${node_env}
ENV TINI_VERSION=v0.19.0

RUN apt-get update && apt-get install -y curl
COPY ./package* /app/
WORKDIR /app
RUN --mount=type=secret,id=npmrc,target=/app/.npmrc npm ci --production --legacy-peer-deps
#RUN npm ci --production || npm ci --production
COPY . ./
COPY --from=install /app/dist/public/js/main.js /app/dist/public/js/
RUN chown -R node:node /app/dist/public/
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini
RUN chmod +x /tini
ENTRYPOINT ["/tini", "-s", "--"]

USER node
CMD ["npm", "run", "start"]
