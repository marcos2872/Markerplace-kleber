FROM node:16.14-alpine
WORKDIR /srv/back-end
COPY package* ./
COPY yarn* ./
# COPY . .
RUN yarn
COPY . .
ENTRYPOINT ["yarn", "start"]