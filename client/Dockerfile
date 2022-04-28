# Build Stage Start
FROM node:16-slim as builder

# Specify a working directory
WORKDIR /usr/app

# user, workdir, etc
COPY .yarn/ ./.yarn/
COPY .pnp.cjs .yarnrc.yml package.json yarn.lock ./
RUN ["yarn", "install"]
COPY . ./
# react 실행
CMD ["yarn", "start"]

