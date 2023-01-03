FROM node:16.14-alpine
WORKDIR /srv/frontend
COPY package* ./
COPY yarn* ./
# COPY . .
RUN yarn
COPY . .
ENTRYPOINT ["yarn", "dev"]