FROM node:9

WORKDIR /var/www
ADD . /var/www

RUN npm install -g yarn
RUN yarn -v
RUN ls -la

RUN cp .env.dist .env
RUN yarn install
RUN yarn run build

RUN chown -R node:node /var/www
